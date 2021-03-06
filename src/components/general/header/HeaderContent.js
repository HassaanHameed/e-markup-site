import { useState } from "react";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

import { Grid, Stack, Hidden, Badge } from "@mui/material";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import { navbarLinks, iconsStyle } from "./headerData";

import SearchDialogBox from "./SearchDialogBox";

const HeaderContent = props => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Grid
        container
        p={2}
        backgroundColor="black"
        height="70px"
        alignItems="center"
      >
        <Grid item xs={6} md={2} color="white" textAlign={{ xs: "left" }}>
          <Link to="/" className={classes["navbar-heading"]}>
            E-Markup
          </Link>
        </Grid>
        <Hidden mdDown>
          <Grid item xs={8}>
            <Stack
              direction="row"
              justifyContent="center"
              columnGap={{ xs: 1 }}
              alignItems="center"
            >
              {navbarLinks.map(({ id, name, link, icon }) => (
                <Link className={classes["navbar-links"]} key={id} to={link}>
                  <Stack direction="row" columnGap={1} alignItems="center">
                    {icon}
                    {name}
                  </Stack>
                </Link>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Stack
              direction="row"
              justifyContent="center"
              columnGap={2}
              alignItems="center"
            >
              <SearchIcon sx={iconsStyle} onClick={() => setOpen(true)} />
              <Link to={"/wishlist"}>
                <Badge badgeContent={props.wishlistLength} color="error">
                  <FavoriteBorderIcon sx={iconsStyle} />
                </Badge>
              </Link>
              <Link to={"/cart"}>
                <Badge badgeContent={props.length} color="error">
                  <ShoppingCartIcon sx={iconsStyle} />
                </Badge>
              </Link>
              <Link to={"/profile"}>
                <PersonIcon sx={iconsStyle} />
              </Link>
            </Stack>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item xs={6} textAlign={{ xs: "right" }}>
            <MenuOpenIcon
              sx={iconsStyle}
              onClick={props.toggleDrawer("left", true)}
            />
          </Grid>
        </Hidden>
        <SearchDialogBox open={open} setOpen={setOpen} />
      </Grid>
    </>
  );
};

export default HeaderContent;
