import React, { useState } from "react";

import { Alert, Stack } from "@mui/material";

import classes from "./Account.module.css";
import Heading1 from "../UI/Heading";
import RouterLink from "../UI/RouterLink";
import Input from "../UI/Input";
import Button from "../UI/Button";

const ForgotPassword = () => {
  // get email, cnic, question and answer from local storage and store it in variables
  const preservedEmail = localStorage.getItem("email");
  const preservedCnic = localStorage.getItem("cnic");
  const preservedQuestion = localStorage.getItem("question");
  const preservedAnswer = localStorage.getItem("answer");

  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [answer, setAnswer] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [passValid, setPassValid] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // compare email and password with local storage
    if (
      email === preservedEmail &&
      answer === preservedAnswer &&
      cnic === preservedCnic
    ) {
      setError(false);

      if (password === confirmPassword) {
        localStorage.setItem("password", password);
        setPassword("");
        setConfirmPassword("");
        setEmail("");
        setAnswer("");
        setCnic("");
        setError(false);
        setSuccess(true);
        console.log("password changed successfully");
      } else {
        setPassValid(true);
        setTimeout(() => {
          setPassValid(false);
        }, 2000);
      }
    } else {
      console.log("login failed");
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <>
      <Stack
        padding={{ xs: "50px 0px", md: "0px" }}
        width="100%"
        direction="column"
        minHeight="100vh"
        rowGap={2}
        justifyContent="center"
        alignItems="center"
      >
        <Heading1
          classes={classes["general-headings"]}
          name={"Password Creation"}
        />
        {error && (
          <Alert severity="error">
            Something went wrong — Type correct entries!
          </Alert>
        )}
        {passValid && (
          <Alert severity="warning">
            New password and Confirm Password should be matched!
          </Alert>
        )}
        {success && (
          <Alert severity="success">Password changed successfully!</Alert>
        )}
        <Input
          onChange={e => setEmail(e.target.value)}
          value={email}
          classes={classes["input-field"]}
          type={"email"}
          placeholder={"Email"}
        />

        <Input
          onChange={e => setCnic(e.target.value)}
          value={cnic}
          classes={classes["input-field"]}
          type={"number"}
          placeholder={"CNIC no"}
        />
        <h3>{preservedQuestion}</h3>

        <Input
          onChange={e => setAnswer(e.target.value)}
          value={answer}
          classes={classes["input-field"]}
          type={"text"}
          placeholder={"Answer"}
        />

        <Input
          onChange={e => setPassword(e.target.value)}
          value={password}
          classes={classes["input-field"]}
          type={"password"}
          placeholder={"New Password"}
        />

        <Input
          onChange={e => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          classes={classes["input-field"]}
          type={"password"}
          placeholder={"Confirm Password"}
        />
        <Button
          onClick={handleSubmit}
          classes={classes["action-button"]}
          name={"Submit"}
        />
        <Heading1 name={"and"} />
        <RouterLink
          address={"/login"}
          classes={classes["action-button-forgot"]}
          name={"Go to Login"}
        />
      </Stack>
    </>
  );
};

export default ForgotPassword;
