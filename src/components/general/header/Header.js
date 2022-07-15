import { useState, useCallback } from "react";

import { Box, Drawer } from "@mui/material";

import DrawerContent from "./DrawerContent";
import HeaderContent from "./HeaderContent";

export default function TemporaryDrawer() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
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
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        padding: "10px 0px",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <DrawerContent />
    </Box>
  );

  return (
    <>
      <HeaderContent toggleDrawer={toggleDrawer} />
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
