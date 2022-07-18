import React from "react";

import { Stack } from "@mui/material";

import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./Account.module.css";
import Heading1 from "../UI/Heading";
import RouterLink from "../UI/RouterLink";

const Registration = () => {
  return (
    <>
      <Stack
        padding={{ xs: "100px 5px 50px 5px", md: "50px 5px" }}
        width="100%"
        direction="column"
        minHeight="100vh"
        rowGap={2}
        justifyContent="center"
        alignItems="center"
      >
        <Heading1 classes={classes["general-headings"]} name={"Registration"} />
        <Input
          classes={classes["input-field"]}
          type={"email"}
          placeholder={"Email"}
        />
        <Input
          classes={classes["input-field"]}
          type={"number"}
          placeholder={"CNIC no"}
        />

        <h3>Choose your Question</h3>
        <select className={classes["quetion-selection"]} name="" id="">
          <option value="">Select here</option>
          <option value="">What's your favourite city?</option>
          <option value="">Name your pet</option>
          <option value="">Your birth Place</option>
        </select>
        <Input
          classes={classes["input-field"]}
          type={"text"}
          placeholder={"Answer"}
        />
        <Input
          classes={classes["input-field"]}
          type={"password"}
          placeholder={"Password"}
        />
        <Input
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
        <Button classes={classes["action-button"]} name={"Register"} />
      </Stack>
    </>
  );
};

export default Registration;
