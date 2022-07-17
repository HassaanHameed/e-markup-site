import { useState, forwardRef, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Grid,
  Stack,
  Hidden,
  Slide,
  Typography,
  Dialog,
  AppBar,
  Toolbar,
  Box,
  Accordion,
  Chip,
  AccordionSummary,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TuneIcon from "@mui/icons-material/Tune";
import ViewListIcon from "@mui/icons-material/ViewList";
import AppsIcon from "@mui/icons-material/Apps";
import Rating from "@mui/material/Rating";
import RouterLink from "../UI/RouterLink";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";

import { categoryCollection } from "./categoryData";

import GeneralImg from "../../assets/smallpics/general.jfif";

import classes from "./Categories.module.css";
import Heading from "../UI/Heading";
import Button from "../UI/Button";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Categories = () => {
  const [layout, setLayout] = useState(false);
  const [open, setOpen] = useState(false);
  const [showItems, setShowItems] = useState(6);
  const [searchedItems, setSearchedItems] = useState(null);

  const [value, setValue] = useState(null);
  const [categoryChipOpen, setCategoryChipOpen] = useState({
    action: false,
    value: "",
  });
  const [sizeChipOpen, setSizeChipOpen] = useState({
    action: false,
    value: "",
  });
  const [colorChipOpen, setColorChipOpen] = useState({
    action: false,
    value: "",
  });

  const prices = categoryCollection.flatMap(item => item.price);
  const sumOfPrices = Math.max(...prices);
  useEffect(() => {
    setValue([0, sumOfPrices]);
  }, [sumOfPrices]);

  let gettingSizes = [];
  let gettingColors = [];
  // let searchedItems = [];

  const findDataRelatedCategory = val => {
    const getval = categoryCollection.filter(item => item.category === val);

    const uniqueSizes = new Set(getval.map(item => item.size));
    uniqueSizes.forEach(size => gettingSizes.push(size));

    const uniqueColorsOfCategory = new Set(getval.map(item => item.color));
    uniqueColorsOfCategory.forEach(item => gettingColors.push(item));
  };
  const onCategoryDeleteHandler = () => {
    gettingSizes = [];
    gettingColors = [];
    setSizeChipOpen(false);
    setColorChipOpen(false);
    setCategoryChipOpen(false);
  };
  const onColorDeleteHandler = () => {
    setColorChipOpen(false);
  };
  const onSizeDeleteHandler = () => {
    setSizeChipOpen(false);
  };
  categoryChipOpen.action && findDataRelatedCategory(categoryChipOpen.value);

  const uniqueCategories = [];
  const uniqueSizes = [];
  const uniqueColors = [];

  const getUniqueValues = (val, storingArray) => {
    const categories = categoryCollection.flatMap(item => item[val]);
    const uniqueCatValues = new Set(categories);
    uniqueCatValues.forEach(item => storingArray.push(item));
  };

  getUniqueValues("category", uniqueCategories);
  getUniqueValues("size", uniqueSizes);
  getUniqueValues("color", uniqueColors);

  // searching items through filter

  // if (categoryChipOpen.action) {
  //   const filteredSearchedItems = categoryCollection.filter(
  //     item => item.category === categoryChipOpen.value
  //   );
  //   setSearchedItems(filteredSearchedItems);
  //   console.log(searchedItems);
  // }

  return (
    <>
      <Grid container padding={{ xs: "0px 0px 400px 0px", md: "0px" }}>
        <Grid
          item
          xs={12}
          textAlign="center"
          // backgroundColor="black"
          sx={{
            background: `linear-gradient(to right, #b92b27, #1565c0)`,
          }}
          padding={"100px 0px"}
        >
          <Heading
            classes={classes["category-main-heading"]}
            name={"Explore Categories"}
          />
        </Grid>
        <Hidden mdDown>
          <Grid item xs={3} p={3}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Categories</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  container
                  spacing={1}
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  {categoryChipOpen.action && (
                    <Grid item xs={12} mb={3}>
                      <Stack
                        alignItems={"center"}
                        direction="row"
                        columnGap={1}
                      >
                        <Heading name={"Selected Item:"} />
                        <Chip
                          label={categoryChipOpen.value}
                          onDelete={onCategoryDeleteHandler}
                        />
                      </Stack>
                    </Grid>
                  )}
                  {uniqueCategories.map((cat, index) => (
                    <Grid
                      item
                      key={index}
                      onClick={() =>
                        setCategoryChipOpen({ action: true, value: cat })
                      }
                    >
                      <Heading
                        classes={classes["filter-category"]}
                        name={cat}
                      />
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Price</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Slider
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  valueLabelDisplay="auto"
                  min={0}
                  max={sumOfPrices}
                />
                <Heading
                  name={`$${value && value[0]} - $${value && value[1]}`}
                />
                <Button name={"Filter"} classes={classes["price-filter-btn"]} />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Size</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {gettingSizes.length > 0 && (
                  <Grid
                    container
                    spacing={1}
                    justifyContent="space-evenly"
                    alignItems="center"
                  >
                    {sizeChipOpen.action && (
                      <Grid item xs={12} mb={3}>
                        <Stack
                          alignItems={"center"}
                          direction="row"
                          columnGap={1}
                        >
                          <Heading name={"Selected Size:"} />
                          <Chip
                            label={sizeChipOpen.value}
                            onDelete={onSizeDeleteHandler}
                          />
                        </Stack>
                      </Grid>
                    )}
                    {gettingSizes.map((size, index) => (
                      <Grid
                        item
                        onClick={() =>
                          setSizeChipOpen({ action: true, value: size })
                        }
                        key={index}
                      >
                        <Heading
                          classes={classes["filter-category"]}
                          name={size}
                        />
                      </Grid>
                    ))}
                  </Grid>
                )}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Color</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  container
                  spacing={1}
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  {colorChipOpen.action && (
                    <Grid item xs={12} mb={3}>
                      <Stack
                        alignItems={"center"}
                        direction="row"
                        columnGap={1}
                      >
                        <Heading name={"Selected Color:"} />
                        <Chip
                          label={colorChipOpen.value}
                          onDelete={onColorDeleteHandler}
                        />
                      </Stack>
                    </Grid>
                  )}
                  {gettingColors.map((col, index) => (
                    <Grid
                      item
                      onClick={() =>
                        setColorChipOpen({ action: true, value: col })
                      }
                      key={index}
                    >
                      <Heading
                        classes={classes["filter-category"]}
                        name={col}
                      />
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Hidden>
        <Grid item container xs={12} md={9} p={3}>
          <Hidden mdUp>
            <Grid item xs={12} mb={3}>
              <Stack
                onClick={() => setOpen(true)}
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
          <Grid item xs={12} mb={3}>
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
                  <select
                    name=""
                    id=""
                    value={showItems}
                    onChange={e => setShowItems(e.target.value)}
                  >
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="30">30</option>
                  </select>
                  {layout ? (
                    <ViewListIcon
                      onClick={() => setLayout(!layout)}
                      className={classes["category-layout-style"]}
                    />
                  ) : (
                    <AppsIcon
                      onClick={() => setLayout(!layout)}
                      className={classes["category-layout-style"]}
                    />
                  )}
                </Stack>
              </Hidden>
            </Stack>
          </Grid>
          {categoryCollection
            .slice(0, showItems ? showItems : 6)
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
                  <Grid item xs={12} md={layout ? 4 : 12} p={{ xs: 0, md: 2 }}>
                    <Stack
                      direction={{
                        xs: "column",
                        md: layout ? "column" : "row",
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
                      <Box
                        padding={{
                          xs: "15px 0px",
                          md: layout ? "0px" : "0px 15px",
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
                          {!layout && (
                            <Stack
                              direction="row"
                              columnGap={1}
                              alignItems="center"
                            >
                              <Rating
                                name="half-rating-read"
                                defaultValue={rating}
                                precision={0.5}
                                readOnly
                              />
                              <Heading name={`(${reviews} reviews)`} />
                            </Stack>
                          )}
                          {!layout && (
                            <Heading
                              classes={classes["category-descrition"]}
                              name={`${desc}`}
                            />
                          )}

                          <Stack
                            direction="row"
                            columnGap={1}
                            alignItems="center"
                          >
                            <Heading
                              classes={classes["category-price"]}
                              name={"Color:"}
                            />
                            <Heading name={color} />
                          </Stack>
                          <Stack
                            direction="row"
                            columnGap={1}
                            alignItems="center"
                          >
                            <Heading
                              classes={classes["category-price"]}
                              name={"Size:"}
                            />

                            <Heading name={`${size}`} />
                          </Stack>
                          <Stack
                            direction="row"
                            columnGap={1}
                            alignItems="center"
                          >
                            <RouterLink
                              address={`/cart/${id}`}
                              classes={classes["routerlink-addtocart"]}
                              name={<Heading name={"Add to Cart"} />}
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
        </Grid>
      </Grid>

      <Dialog
        fullScreen
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setOpen(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Filter Item
            </Typography>
          </Toolbar>
        </AppBar>
      </Dialog>
    </>
  );
};

export default Categories;
