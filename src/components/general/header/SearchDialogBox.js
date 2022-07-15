import React, { useState } from "react";

import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { Dialog, Stack } from "@mui/material";

import classes from "./Header.module.css";

const SearchDialogBox = ({ open, setOpen }) => {
  return (
    <>
      <Dialog open={open}>
        <Stack
          sx={{
            width: "200px",
          }}
          p={3}
          direction="column"
          rowGap={1}
          justifyContent="center"
          alignItems="center"
        >
          <h2>Search</h2>

          <Input
            classes={classes["dialogbox-inputfields"]}
            type={"text"}
            placeholder={"Search here..."}
          />
          <Stack
            width="100%"
            direction="row"
            columnGap={2}
            justifyContent="flex-end"
            alingItems="center"
          >
            <Button
              classes={classes["dialogbox-button-cancel"]}
              name={"Cancel"}
              onClick={() => setOpen(false)}
            />
            <Button
              classes={classes["dialogbox-button-action"]}
              name={"Search"}
              onClick={() => setOpen(false)}
            />
          </Stack>
        </Stack>
      </Dialog>
    </>
  );
};

export default SearchDialogBox;
