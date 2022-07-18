import React, { useState } from "react";

import { Alert, Stack } from "@mui/material";

import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./Account.module.css";
import Heading1 from "../UI/Heading";
import RouterLink from "../UI/RouterLink";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cnic, setCnic] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [success, setSuccess] = useState(false);
  const [passValid, setPassValid] = useState(false);
  const [error, setError] = useState(false);
  // add all states to local storage as registration
  const handleSubmit = e => {
    e.preventDefault();
    if (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      cnic !== "" &&
      question !== "" &&
      answer !== ""
    ) {
      // check if password and confirm password are same
      if (password === confirmPassword) {
        // add all states to local storage as registration
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("cnic", cnic);
        localStorage.setItem("question", question);
        localStorage.setItem("answer", answer);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setCnic("");
        setQuestion("");
        setAnswer("");
        setSuccess(true);
        setError(false);
        setPassValid(false);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      } else {
        setSuccess(false);
        setPassValid(true);
        setTimeout(() => {
          setPassValid(false);
        }, 2000);
      }
    } else {
      setPassValid(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
    console.log("registration successfully done");
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
        {success && (
          <Alert severity="success">Registration successfully done!</Alert>
        )}
        {error && (
          <Alert severity="error">
            Something went wrong, Please type corrent entries!
          </Alert>
        )}
        {passValid && (
          <Alert severity="warning">
            Password and Confirm Password should be matched!
          </Alert>
        )}
        <Heading1 classes={classes["general-headings"]} name={"Registration"} />
        <Input
          onChange={e => setName(e.target.value)}
          value={name}
          classes={classes["input-field"]}
          type={"text"}
          placeholder={"Full Name"}
        />
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

        <h3>Choose your Question</h3>
        <select
          className={classes["quetion-selection"]}
          value={question}
          onChange={e => setQuestion(e.target.value)}
        >
          <option value="">Select here</option>
          <option value="What's your favourite city?">
            What's your favourite city?
          </option>
          <option value="Name your pet">Name your pet</option>
          <option value="Your birth Place">Your birth Place</option>
        </select>

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
          placeholder={"Password"}
        />
        <Input
          onChange={e => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          classes={classes["input-field"]}
          type={"password"}
          placeholder={"Re-enter Password"}
        />
        <p>
          Already have an Account?
          <RouterLink
            address={"/login"}
            classes={classes["action-button-forgot"]}
            name={"Log In"}
          />
        </p>
        <Button
          onClick={handleSubmit}
          classes={classes["action-button"]}
          name={"Register"}
        />
      </Stack>
    </>
  );
};

export default Registration;
