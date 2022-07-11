import React from "react";

import { Stack } from "@mui/material";

import Input from "../UI/Input";
import classes from "./Account.module.css";
import Button from "../UI/Button";
import Heading1 from "../UI/Heading";
import RouterLink from "../UI/RouterLink";

const LogIn = () => {
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
        <Heading1 classes={classes["general-headings"]} name={"Log In"} />
        <Input
          classes={classes["input-field"]}
          type={"email"}
          placeholder={"Email"}
        />
        <Input
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
        <Button classes={classes["action-button"]} name={"Log In"} />
      </Stack>
    </>
  );
};

export default LogIn;
