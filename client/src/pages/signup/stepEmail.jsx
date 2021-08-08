import React from "react";
import Card from "../../components/card";
import Input from "../../components/input";
import Button from "../../components/button";

const StepEmail = ({ setStep, setEmail, email }) => {
  return (
    <div className="center">
      <Card>
        <h2>Sign-Up</h2>
        <Input
          type={"email"}
          placeholder={"Email"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            setStep("info");
          }}
        >
          Sign Up
        </Button>
      </Card>
    </div>
  );
};

export default StepEmail;
