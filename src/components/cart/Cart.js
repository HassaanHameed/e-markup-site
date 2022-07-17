import React, { Fragment } from "react";

import { Grid } from "@mui/material";

import Text from "../UI/Heading";
import classes from "./Cart.module.css";
import GeneralImg from "../../assets/smallpics/general.jfif";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Cart = () => {
  return (
    <>
      <Grid container padding="100px 5px" minHeight="90vh" rowGap={2}>
        <Grid item xs={12} textAlign="center" alignItems="center">
          <Text name={"Cart"} classes={classes["main-heading"]} />
        </Grid>
        <Grid item xs={12}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Picture</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Color</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Picture</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Color</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <h3>Total Amount: $24</h3>
        </Grid>
        <Grid item xs={12}>
          <button>purchase</button>
        </Grid>
      </Grid>
    </>
  );
};

export default Cart;
