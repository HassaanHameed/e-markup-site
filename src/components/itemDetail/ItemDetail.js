import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { Stack, Grid, Box, Rating, Snackbar, Alert } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { categoryCollection } from "../categories/categoryData";
import GeneralImg from "../../assets/smallpics/general.jfif";
import classes from "./ItemDetail.module.css";
import Heading from "../UI/Heading";
import RouterLink from "../UI/RouterLink";
import Button from "../UI/Button";
import Reviews from "./Reviews";

const ItemDetail = props => {
  const [value, setValue] = useState(0);
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const item = categoryCollection.find(item => item.id === id);

  const handleClick = id => {
    props.addToCart(id);
    props.setOpenSnack(true);
  };
  const handleWishlist = id => {
    props.handleWishlist(id);
    props.setOpenSnack(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    props.setOpenSnack(false);
  };
  console.log(item);
  const {
    category,
    name,
    desc,
    country,
    size,
    rating,
    reviews,
    color,
    price,
    offer,
  } = item;
  return (
    <Grid container minHeight="100vh">
      <Grid
        item
        backgroundColor="black"
        xs={12}
        height="100px"
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        p={2}
      >
        <Heading name={"Item Detail"} classes={classes["main-heading"]} />
      </Grid>
      <Grid item xs={12} p={{ xs: 0, md: 2 }}>
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
        >
          <Box
            p={3}
            className={classes["category-image-grid"]}
            sx={{
              backgroundImage: `url(${GeneralImg})`,
            }}
          >
            {offer && (
              <Heading
                name={`${Math.round((offer / price) * 100)}% OFF`}
                classes={classes["category-offer-badge"]}
              />
            )}
          </Box>
          <Box p={2}>
            <Stack direction="column" rowGap={2}>
              <Heading name={country} classes={classes["category-country"]} />
              <RouterLink
                address={`/itemdetail/${id}`}
                classes={classes["category-routerlink"]}
                name={
                  <Heading
                    classes={classes["category-name-heading"]}
                    name={name}
                  />
                }
              />
              <Heading classes={classes["category-cat"]} name={`${category}`} />
              {offer ? (
                <Stack direction="row" alignItems="center" columnGap={1}>
                  <Heading
                    classes={classes["category-price-with-offer"]}
                    name={`$${price}`}
                  />
                  <Heading
                    classes={classes["category-price"]}
                    name={`$${price - Math.round((price / 100) * offer)}`}
                  />
                </Stack>
              ) : (
                <Heading
                  classes={classes["category-price"]}
                  name={`$${price}`}
                />
              )}

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
                <Heading classes={classes["category-price"]} name={"Color:"} />
                <Heading name={color} />
              </Stack>
              <Stack direction="row" columnGap={1} alignItems="center">
                <Heading classes={classes["category-price"]} name={"Size:"} />

                <Heading name={`${size}`} />
              </Stack>
              <Stack direction="row" columnGap={1} alignItems="center">
                <Button
                  classes={classes["category-addtocart-btn"]}
                  onClick={() => handleClick(id)}
                  name={"Add to Cart"}
                />
                <FavoriteBorderIcon
                  onClick={() => handleWishlist(id)}
                  className={classes["category-heart"]}
                />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12} p={2}>
        <Stack
          direction="column"
          rowGap={2}
          alignItems="center"
          justifyContent="center"
        >
          <div
            style={{ width: "100%", height: "2px", backgroundColor: "black" }}
          ></div>
          <Heading name="Reviews" classes={classes["reviews-heading"]} />
          <Heading name="Give us Rating" />
          <Stack direction="row" columnGap={1} alignItems="center">
            <Rating
              name="simple-controlled"
              value={value}
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Heading name={`${value}/5.0`} />
          </Stack>
          <Heading name="Write a Review" />
          <textarea
            className={classes["textarea"]}
            placeholder="Write here..."
            cols="30"
            rows="10"
          ></textarea>
          <Button classes={classes["review-btn"]} name="Submit" />
          <div
            style={{ width: "100%", height: "2px", backgroundColor: "black" }}
          ></div>
          <Button name="See Other's Review" onClick={() => setShow(!show)} />
          {show && <Reviews />}
        </Stack>
      </Grid>
      <Snackbar
        open={props.openSnack}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Item Added
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default ItemDetail;
