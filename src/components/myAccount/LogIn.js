import React, { useState } from "react";

import { Stack, Alert } from "@mui/material";

import Input from "../UI/Input";
import classes from "./Account.module.css";
import Button from "../UI/Button";
import Heading1 from "../UI/Heading";
import RouterLink from "../UI/RouterLink";

const LogIn = () => {
  // get email and password from local storage and store it in variables
  const preservedEmail = localStorage.getItem("email");
  const preservedPassword = localStorage.getItem("password");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // compare email and password with local storage
    if (email === preservedEmail && password === preservedPassword) {
      setError(false);
      // clear all states
      setEmail("");
      setPassword("");
      setSuccess(true);
      console.log("login successfully done");
      setTimeout(() => {
        setSuccess(false);
        window.location.href = "/";
      }, 1000);
    } else {
      console.log("login failed");
      setSuccess(false);
      setError(true);
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
        {error && (
          <Alert severity="error">
            Login Failed — Type correct Email and Password!
          </Alert>
        )}
        {success && (
          <Alert severity="success">
            Welcome back! — You are logged in successfully!
          </Alert>
        )}
        <Heading1 classes={classes["general-headings"]} name={"Log In"} />
        <Input
          onChange={e => setEmail(e.target.value)}
          value={email}
          classes={classes["input-field"]}
          type={"email"}
          placeholder={"Email"}
        />
        <Input
          onChange={e => setPassword(e.target.value)}
          value={password}
          classes={classes["input-field"]}
          type={"password"}
          placeholder={"Password"}
        />
        <p>
          New User?
          <RouterLink
            address={"/registration"}
            classes={classes["action-button-forgot"]}
            name={"Create New Account"}
          />
        </p>

        <RouterLink
          address={"/forgotpassword"}
          classes={classes["action-button-forgot"]}
          name={"Forgot Password?"}
        />
        <Button
          onClick={handleSubmit}
          classes={classes["action-button"]}
          name={"Log In"}
        />
      </Stack>
    </>
  );
};

export default LogIn;
