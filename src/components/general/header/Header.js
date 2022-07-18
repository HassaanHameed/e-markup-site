import { useState, useCallback } from "react";

import { Box, Drawer } from "@mui/material";

import DrawerContent from "./DrawerContent";
import HeaderContent from "./HeaderContent";

export default function TemporaryDrawer(props) {
  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#232323 !important",
        minHeight: "90vh",
        height: "100%",
      }}
      role="presentation"
      onClose={toggleDrawer("left", false)}
    >
      <DrawerContent
        wishlistLength={props.wishlistLength}
        length={props.length}
      />
    </Box>
  );

  return (
    <>
      <HeaderContent
        toggleDrawer={toggleDrawer}
        length={props.length}
        wishlistLength={props.wishlistLength}
      />
      <Drawer
        sx={{
          "& .css-4t3x6l-MuiPaper-root-MuiDrawer-paper": {
            backgroundColor: "#232323 !important",
          },
        }}
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </>
  );
}
