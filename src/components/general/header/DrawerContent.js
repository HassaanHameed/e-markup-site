import { Fragment, useState } from "react";

import { Badge, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

import classes from "./Header.module.css";
import { navbarLinks, iconsStyle } from "./headerData";
import SearchDialogBox from "./SearchDialogBox";

const DrawerContent = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Link to="/" className={classes["navbar-heading"]}>
          E-Markup
        </Link>
        {navbarLinks.map(({ id, name, link, icon }) => (
          <Fragment key={id}>
            <Link className={classes["navbar-links"]} to={link}>
              <Stack direction="row" columnGap={1} alignItems="center">
                {icon}
                {name}
              </Stack>
            </Link>
          </Fragment>
        ))}
        <Stack mt={1} direction="row" alignItems="center" columnGap={1}>
          <SearchIcon sx={iconsStyle} onClick={() => setOpen(true)} />
          <FavoriteBorderIcon sx={iconsStyle} />
          <Badge badgeContent={1} color="error">
            <ShoppingCartIcon sx={iconsStyle} />
          </Badge>
          <PersonIcon sx={iconsStyle} />
        </Stack>
      </Stack>
      <SearchDialogBox open={open} setOpen={setOpen} />
    </>
  );
};

export default DrawerContent;
