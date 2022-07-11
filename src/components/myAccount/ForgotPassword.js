import React from "react";

import { Stack } from "@mui/material";

import classes from "./Account.module.css";
import Heading1 from "../UI/Heading";
import RouterLink from "../UI/RouterLink";
import Input from "../UI/Input";

const ForgotPassword = () => {
  return (
    <>
      <Stack
        minHeight="90vh"
        direction="column"
        rowGap={2}
        justifyContent="center"
        alignItems="center"
        p={3}
      >
        <Heading1
          classes={classes["general-headings"]}
          name={"Password Creation"}
        />

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
        <h3>What's your favorite city?</h3>

        <Input
          classes={classes["input-field"]}
          type={"text"}
          placeholder={"Answer"}
        />

        <Input
          classes={classes["input-field"]}
          type={"password"}
          placeholder={"New Password"}
        />

        <Input
          classes={classes["input-field"]}
          type={"password"}
          placeholder={"Confirm Password"}
        />
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
