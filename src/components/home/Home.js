import { Stack, Grid, Box } from "@mui/material";

import classes from "./Home.module.css";
import {
  homeContainerStyle,
  homeCategoryItems,
  modernDesignStyles,
} from "./homeData";
import DiscoverImg from "../../assets/smallpics/discover.jfif";
const Home = () => {
  return (
    <>
      <Stack
        direction="column"
        rowGap={2}
        alignItems="center"
        justifyContent="center"
        sx={homeContainerStyle}
      >
        <h1 className={classes["home-heading"]}>Make Yourself at Home</h1>
        <h2 className={classes["home-subheading"]}>
          We create
          <span className={classes["home-span"]}>
            &nbsp;High Quality Products
          </span>
          <br />
          thats are used & loved by thousands Customers
        </h2>
        <button className={classes["home-button"]}>Discover Now</button>
      </Stack>
      <Grid mt={4} container alignItems="center">
        <Grid item xs={12} textAlign="center">
          <h1 className={classes["home-category-heading"]}>
            Popular Categories
          </h1>
          <p className={classes["home-category-paragraph"]}>
            Huge stock of beautiful and modern designs
          </p>
        </Grid>
        {homeCategoryItems.map(({ id, name, img }) => (
          <Grid key={id} item xs={12} sm={6} md={3} p={2}>
            <Box
              className={classes["home-catergory-box"]}
              item
              alignItems="center"
              sx={{
                backgroundImage: `url(${img})`,
              }}
            >
              <h2>{name}</h2>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid container mt={3}>
        <Grid item xs={12} sm={6} p={3}>
          <Stack direction="column" justifyContent="center" height="100%">
            <h1 className={classes["home-shopnow-heading"]}>
              complete your perfect set
            </h1>
            <h3 className={classes["home-shopnow-subheading"]}>
              new collection
            </h3>
            <p className={classes["home-shopnow-paragraph"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              ut exercitationem minima sunt est similique dolores nesciunt
              provident! Quisquam animi qui iste nesciunt possimus.
            </p>
            <button className={classes["home-shopnow-btn"]}>shop now</button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            className={classes["home-table-img"]}
            src={DiscoverImg}
            alt="Table"
          />
        </Grid>
      </Grid>
      <Grid container mt={3} sx={modernDesignStyles}>
        <Stack
          p={3}
          direction="column"
          rowGap={2}
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <h1>best for less</h1>
          <h1 className={classes["home-modernfurniture-heading"]}>
            modern furniture & design
          </h1>
          <button className={classes["home-button"]}>Discover Now</button>
        </Stack>
      </Grid>
    </>
  );
};

export default Home;
