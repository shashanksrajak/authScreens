import React from "react";
import Card from "../../components/card";
import Input from "../../components/input";
import Button from "../../components/button";
import User from "../user";

import { useState } from "react";

const SignIn = () => {
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState({});

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    const sendUserData = async () => {
      const response = await fetch("/api/auth/sign-in", {
        method: "Post",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      return data;
    };
    sendUserData().then((data) => {
      if (data.success) {
        setSuccess(true);
        setUser(data.user);
      } else {
        alert("Invalid credentials. Please try again!");
      }
    });
  };

  if (!success) {
    return (
      <div className="center">
        <Card>
          <h2>Sign-In</h2>
          <form onSubmit={signInHandler} style={{ width: "100%" }}>
            <Input
              type={"email"}
              placeholder={"Email"}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              type={"password"}
              placeholder={"Password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button type={"Submit"}>Sign In</Button>
          </form>
        </Card>
      </div>
    );
  } else {
    return <User user={user} />;
  }
};

export default SignIn;
