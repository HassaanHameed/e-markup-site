import React, { Fragment } from "react";

import { Grid, Stack, Hidden } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import TuneIcon from "@mui/icons-material/Tune";
import ViewListIcon from "@mui/icons-material/ViewList";
import AppsIcon from "@mui/icons-material/Apps";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { categoryCollection } from "./categoryData";
import CustomButton from "../UI/Button";
import RouterLink from "../UI/RouterLink";

import WatchImg from "../../assets/watch1.jpg";
import classes from "./Categories.module.css";
import Heading from "../UI/Heading";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Categories = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container padding={{ xs: "80px 5px 400px 5px", md: "80px 5px" }}>
        <Grid item xs={12} textAlign="center">
          <Heading
            classes={classes["category-main-heading"]}
            name={"Explore Categories"}
          />
        </Grid>
        <Hidden mdDown>
          <Grid item xs={3} p={3}>
            Filters here
          </Grid>
        </Hidden>
        <Grid item container xs={12} md={9} p={3}>
          <Hidden mdUp>
            <Grid item xs={12}>
              <Stack
                onClick={handleClickOpen}
                direction="row"
                alignItems="center"
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <TuneIcon />
                <h3>Filters</h3>
              </Stack>
            </Grid>
          </Hidden>
          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" columnGap={1} alignItems="center">
                <Heading
                  classes={classes["category-sortby-heading"]}
                  name={"Sort by:"}
                />
                <select name="" id="">
                  <option value="">Select here</option>
                  <option value="">Best Selling</option>
                  <option value="">Featured</option>
                  <option value="">Sort A-Z</option>
                  <option value="">Sort Z-A</option>
                  <option value="">Price High to Low</option>
                  <option value="">Price Low to High</option>
                  <option value="">Date, Old to New</option>
                  <option value="">Date, New to Old</option>
                </select>
              </Stack>
              <Hidden mdDown>
                <Stack direction="row" columnGap={1} alignItems="center">
                  <Heading
                    classes={classes["category-sortby-heading"]}
                    name={"SHOW:"}
                  />
                  <select name="" id="">
                    <option value="">10</option>
                    <option value="">20</option>
                    <option value="">30</option>
                    <option value="">40</option>
                    <option value="">50</option>
                  </select>
                  <ViewListIcon className={classes["category-layout-style"]} />
                  <AppsIcon className={classes["category-layout-style"]} />
                </Stack>
              </Hidden>
            </Stack>
          </Grid>
          <Grid item container xs={12} pt={3} rowGap={4}>
            {categoryCollection.map(
              ({
                id,
                name,
                desc,
                country,
                size,
                rating,
                reviews,
                color,
                minPrice,
                maxPrice,
                img,
              }) => (
                <Fragment key={id}>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    p={3}
                    className={classes["category-image-grid"]}
                    sx={{ backgroundImage: `url(${img})` }}
                  >
                    <Heading
                      name={"16% OFF"}
                      classes={classes["category-offer-badge"]}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={8}
                    padding={{ xs: "15px 0px", md: "0px 15px" }}
                  >
                    <Stack direction="column" rowGap={1}>
                      <Heading
                        name={country}
                        classes={classes["category-country"]}
                      />
                      <RouterLink
                        address={"/w1"}
                        classes={classes["category-routerlink"]}
                        name={
                          <Heading
                            classes={classes["category-name-heading"]}
                            name={name}
                          />
                        }
                      />
                      <Heading
                        classes={classes["category-price"]}
                        name={`$${minPrice} - $${maxPrice}`}
                      />
                      <Stack direction="row" columnGap={1} alignItems="center">
                        <Rating
                          name="half-rating-read"
                          defaultValue={rating}
                          precision={0.5}
                          readOnly
                        />
                        <Heading name={`(${reviews} reviews)`} />
                      </Stack>
                      <Heading
                        classes={classes["category-descrition"]}
                        name={`${desc}`}
                      />

                      <Stack direction="row" columnGap={1} alignItems="center">
                        <Heading
                          classes={classes["category-price"]}
                          name={"Available Colors:"}
                        />
                        {color.map((col, index) => (
                          <Fragment key={index}>
                            <Heading name={`${col},`} />
                          </Fragment>
                        ))}
                      </Stack>
                      <Stack direction="row" columnGap={1} alignItems="center">
                        <Heading
                          classes={classes["category-price"]}
                          name={"Available Sizes:"}
                        />

                        <Heading name={`${size},`} />
                      </Stack>
                      <Stack direction="row" columnGap={1} alignItems="center">
                        <CustomButton
                          classes={classes["category-addtocart-btn"]}
                          name={"Add to Cart"}
                        />
                        <FavoriteBorderIcon
                          className={classes["category-heart"]}
                        />
                      </Stack>
                    </Stack>
                  </Grid>
                </Fragment>
              )
            )}
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Filter Item
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Search
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog>
    </>
  );
};

export default Categories;
