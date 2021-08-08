import React from "react";
import Card from "../../components/card";
import Input from "../../components/input";
import Button from "../../components/button";

import { useState } from "react";

const StepInfo = ({ email, setStep, setError, setEmail }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    const sendUserData = async () => {
      const response = await fetch("/api/auth/sign-up", {
        method: "Post",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    };
    sendUserData().then((data) => {
      if (data.success) {
        setStep("success");
      } else {
        setError("Invalid input! Please check the entries.");
      }
    });
  };

  return (
    <div className="center">
      <Card>
        <h2>Tell us about yourself</h2>
        <form onSubmit={registerUser}>
          <Input
            type={"email"}
            placeholder={"Email"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type={"text"}
            placeholder={"First name"}
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <Input
            type={"text"}
            placeholder={"Last name"}
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <Input
            type={"password"}
            placeholder={"Password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p>
            Password must contain at least one capital letter, one special
            character and number
          </p>

          <Button type={"Submit"}>Continue</Button>
        </form>
      </Card>
    </div>
  );
};

export default StepInfo;
