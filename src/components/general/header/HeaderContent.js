import { useState } from "react";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Dialog from "@mui/material/Dialog";
import { Grid, Stack, Hidden, Badge } from "@mui/material";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import { navbarLinks, iconsStyle } from "./headerData";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

const HeaderContent = props => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Grid
        container
        p={2}
        backgroundColor="rgba(0,0,0, 0.8)"
        height="80px"
        alignItems="center"
        position="fixed"
        top="0"
        zIndex="1"
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
              <FavoriteBorderIcon sx={iconsStyle} />
              <Badge badgeContent={1} color="error">
                <ShoppingCartIcon sx={iconsStyle} />
              </Badge>
              <PersonIcon sx={iconsStyle} />
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
        <Dialog open={open} onClose={() => setOpen(false)}>
          <Stack
            sx={{
              width: "300px",
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
      </Grid>
    </>
  );
};

export default HeaderContent;
