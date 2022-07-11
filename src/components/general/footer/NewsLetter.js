import React from "react";

import { Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

import classes from "./Footer.module.css";
import { footerSocialLinksStyle } from "./footerData";

const NewsLetter = () => {
  return (
    <Stack
      direction="column"
      justifyContent={{ xs: "center", sm: "flex-start" }}
      alignItems={{ xs: "center", sm: "flex-start" }}
      rowGap={1}
    >
      <h3 className={classes["newsletter-heading"]}>Newsletter</h3>
      <p className={classes["newsletter-paragraph"]}>
        Get all the latest information, Sales and Offers.
      </p>
      <div className={classes["newsletter-div"]}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <input type="text" />
          <SendIcon
            sx={{
              color: "brown",
              "&:hover": { color: "white", cursor: "pointer" },
            }}
          />
        </Stack>
      </div>
      <Stack columnGap={2} direction="row" alignItems="center">
        <FacebookIcon sx={footerSocialLinksStyle} />
        <InstagramIcon sx={footerSocialLinksStyle} />
        <TwitterIcon sx={footerSocialLinksStyle} />
        <PinterestIcon sx={footerSocialLinksStyle} />
      </Stack>
    </Stack>
  );
};

export default NewsLetter;
