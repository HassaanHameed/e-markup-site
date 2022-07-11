import { Grid, Stack } from "@mui/material";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";
import { footerLinks } from "./footerData";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <>
      <Grid container p={2} backgroundColor="#232323" rowGap={1}>
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          textAlign={{ xs: "center" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Link to="/" className={classes["footer-heading"]}>
            E-Markup
          </Link>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Stack
            direction="column"
            rowGap={1}
            justifyContent={{ xs: "center", sm: "flex-start" }}
            alignItems={{ xs: "center", sm: "flex-start" }}
          >
            {footerLinks.slice(0, 5).map(({ id, name, link }) => (
              <Fragment key={id}>
                <Link to={link} className={classes["footer-links"]}>
                  {name}
                </Link>
              </Fragment>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Stack
            direction="column"
            rowGap={1}
            justifyContent={{ xs: "center", sm: "flex-start" }}
            alignItems={{ xs: "center", sm: "flex-start" }}
          >
            {footerLinks.slice(5, 10).map(({ id, name, link }) => (
              <Fragment key={id}>
                <Link to={link} className={classes["footer-links"]}>
                  {name}
                </Link>
              </Fragment>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <NewsLetter />
        </Grid>
        <Grid item xs={12}>
          <div className={classes["footer-straightline"]}></div>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <p className={classes["footer-copyright"]}>
            © 2022, E-markup Powered by Shopify
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
