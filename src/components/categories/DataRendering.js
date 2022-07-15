import React, { Fragment } from "react";

import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Grid, Box, Stack } from "@mui/material";

import CustomButton from "../UI/Button";
import RouterLink from "../UI/RouterLink";
import Heading from "../UI/Heading";

import classes from "./Categories.module.css";

const DataRendering = props => {
  return (
    <>
      {props.categoryCollection
        .slice(0, 6)
        .map(
          ({
            id,
            category,
            name,
            desc,
            country,
            size,
            rating,
            reviews,
            color,
            price,
            img,
            offer,
          }) => (
            <Fragment key={id}>
              <Grid
                item
                xs={12}
                md={props.layout ? 4 : 12}
                p={{ xs: 0, md: 2 }}
              >
                <Stack
                  direction={{
                    xs: "column",
                    md: props.layout ? "column" : "row",
                  }}
                >
                  <Box
                    p={3}
                    className={classes["category-image-grid"]}
                    // sx={{ backgroundImage: `url(${img})` }}
                    sx={{
                      backgroundImage: `url(https://picsum.photos/200)`,
                    }}
                  >
                    {offer && (
                      <Heading
                        name={`${Math.round((offer / price) * 100)}% OFF`}
                        classes={classes["category-offer-badge"]}
                      />
                    )}
                  </Box>
                  <Box
                    padding={{
                      xs: "15px 0px",
                      md: props.layout ? "0px" : "0px 15px",
                    }}
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
                        classes={classes["category-cat"]}
                        name={`${category}`}
                      />
                      {offer ? (
                        <Stack
                          direction="row"
                          alignItems="center"
                          columnGap={1}
                        >
                          <Heading
                            classes={classes["category-price-with-offer"]}
                            name={`$${price}`}
                          />
                          <Heading
                            classes={classes["category-price"]}
                            name={`$${
                              price - Math.round((price / 100) * offer)
                            }`}
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
                        <Heading
                          classes={classes["category-price"]}
                          name={"Available Colors:"}
                        />
                        <Heading name={color} />
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
                  </Box>
                </Stack>
              </Grid>
            </Fragment>
          )
        )}
    </>
  );
};

export default DataRendering;
