import React, { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";
import { Typography, Grid, Chip, Stack } from "@mui/material";

import Heading from "../UI/Heading";
import Button from "../UI/Button";

import classes from "./Categories.module.css";

const FilterItems = props => {
  const [value, setValue] = useState([0, 2000]);
  const [categoryChipOpen, setCategoryChipOpen] = useState({
    action: false,
    value: "",
  });

  let gettingSizes = [];
  let gettingColors = [];
  let gettingPrices = [];

  const findDataRelatedCategory = val => {
    const getval = props.categoryCollection.filter(
      item => item.category === val
    );
    gettingSizes = getval.map(item => item.size);

    const uniqueColorsOfCategory = new Set(getval.map(item => item.color));
    uniqueColorsOfCategory.forEach(item => gettingColors.push(item));

    // gettingPrices = getval.map(item => item.size);
    // console.log(gettingSizes);
  };
  const onDeleteHandler = () => {
    gettingSizes = [];
    gettingColors = [];
    setCategoryChipOpen(false);
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
                    onDelete={onDeleteHandler}
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
            max={2000}
          />
          <Heading name={`$${value[0]} - $${value[1]}`} />
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
              {gettingSizes.map((size, index) => (
                <Grid item key={index}>
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
            {gettingColors.map((col, index) => (
              <Grid item key={index}>
                <Heading classes={classes["filter-category"]} name={col} />
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FilterItems;
