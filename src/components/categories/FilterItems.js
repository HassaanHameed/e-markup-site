import React, { useState, useEffect } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";
import { Typography, Grid, Chip, Stack, Box, Hidden } from "@mui/material";

import Heading from "../UI/Heading";
import Button from "../UI/Button";

import classes from "./Categories.module.css";

const FilterItems = props => {
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

  const prices = props.categoryCollection.flatMap(item => item.price);
  const sumOfPrices = Math.max(...prices);
  useEffect(() => {
    setValue([0, sumOfPrices]);
  }, [sumOfPrices]);

  let gettingSizes = [];
  let gettingColors = [];

  const findDataRelatedCategory = val => {
    const getval = props.categoryCollection.filter(
      item => item.category === val
    );

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
  return (
    <>
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
                <Stack alignItems={"center"} direction="row" columnGap={1}>
                  <Heading name={"Selected Item:"} />
                  <Chip
                    label={categoryChipOpen.value}
                    onDelete={onCategoryDeleteHandler}
                  />
                </Stack>
              </Grid>
            )}
            {props.uniqueCategories.map((cat, index) => (
              <Grid
                item
                key={index}
                onClick={() =>
                  setCategoryChipOpen({ action: true, value: cat })
                }
              >
                <Heading classes={classes["filter-category"]} name={cat} />
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
          <Heading name={`$${value && value[0]} - $${value && value[1]}`} />
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
                  <Stack alignItems={"center"} direction="row" columnGap={1}>
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
                  onClick={() => setSizeChipOpen({ action: true, value: size })}
                  key={index}
                >
                  <Heading classes={classes["filter-category"]} name={size} />
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
                <Stack alignItems={"center"} direction="row" columnGap={1}>
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
                onClick={() => setColorChipOpen({ action: true, value: col })}
                key={index}
              >
                <Heading classes={classes["filter-category"]} name={col} />
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Hidden mdDown>
        <Box>
          <Button name={"Search"} classes={classes["filter-search-btn"]} />
        </Box>
      </Hidden>
    </>
  );
};

export default FilterItems;
