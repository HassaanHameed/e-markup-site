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
        padding={{ xs: "100px 0px 50px 0px", md: "50px 0px" }}
        width="100%"
        direction="column"
        minHeight="100vh"
        rowGap={2}
        justifyContent="center"
        alignItems="center"
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
