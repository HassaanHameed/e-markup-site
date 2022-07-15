import { useState, forwardRef } from "react";

import {
  Grid,
  Stack,
  Hidden,
  Slide,
  Typography,
  Button,
  Dialog,
  AppBar,
  Toolbar,
  TablePagination,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TuneIcon from "@mui/icons-material/Tune";
import ViewListIcon from "@mui/icons-material/ViewList";
import AppsIcon from "@mui/icons-material/Apps";

import { categoryCollection } from "./categoryData";

import classes from "./Categories.module.css";
import Heading from "../UI/Heading";
import FilterItems from "./FilterItems";
import DataRendering from "./DataRendering";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Categories = () => {
  const [layout, setLayout] = useState(false);
  const [open, setOpen] = useState(false);
  const [showItems, setShowItems] = useState(null);

  // const [page, setPage] = useState(2);
  // const [rowsPerPage, setRowsPerPage] = useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = event => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

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
            <FilterItems
              categoryCollection={categoryCollection}
              uniqueCategories={uniqueCategories}
              uniqueSizes={uniqueSizes}
              uniqueColors={uniqueColors}
            />
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

          <DataRendering
            showItems={showItems}
            setShowItems={setShowItems}
            categoryCollection={categoryCollection}
            layout={layout}
            setLayout={setLayout}
          />
          {/* <Grid
            item
            xs={12}
            justifyContent="center"
            alignItems="center"
            backgroundColor="tan"
          >
            <TablePagination
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Grid> */}
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
            <Button autoFocus color="inherit" onClick={() => setOpen(false)}>
              Search
            </Button>
          </Toolbar>
        </AppBar>
        <FilterItems
          categoryCollection={categoryCollection}
          uniqueCategories={uniqueCategories}
          uniqueSizes={uniqueSizes}
          uniqueColors={uniqueColors}
        />
      </Dialog>
    </>
  );
};

export default Categories;
