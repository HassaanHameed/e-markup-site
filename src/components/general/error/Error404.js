import React from "react";
import { Link } from "react-router-dom";

import { Stack } from "@mui/material";

import classes from "./Error.module.css";

const Error404 = () => {
  return (
    <Stack
      direction="column"
      rowGap={3}
      height="90vh"
      alignItems="center"
      justifyContent="center"
    >
      <h1 className={classes["main-heading"]}>404 Error</h1>
      <p>No Page Found</p>
      <Link to="/" className={classes["action-button-forgot"]}>
        Go to Home
      </Link>
    </Stack>
  );
};

export default Error404;
