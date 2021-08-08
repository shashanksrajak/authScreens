import React from "react";
import StepEmail from "./stepEmail";
import StepInfo from "./stepInfo";
import Success from "./success";
import { useState } from "react";

const SignUp = () => {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  if (error) {
    alert(error);
  }

  return (
    <>
      {step === "email" && <StepEmail setStep={setStep} setEmail={setEmail} />}
      {step === "info" && (
        <StepInfo
          email={email}
          setStep={setStep}
          setError={setError}
          setEmail={setEmail}
        />
      )}
      {step === "success" && <Success />}
    </>
  );
};

export default SignUp;
