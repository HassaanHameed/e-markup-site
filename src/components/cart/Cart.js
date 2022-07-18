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

import Button from "../UI/Button";

const Cart = props => {
  // collect total amount from cart items
  let total = 0;
  props.cart.map(item => {
    total += item.price;
  });

  return (
    <>
      <Grid container padding="100px 5px" minHeight="90vh" rowGap={2}>
        <Grid item xs={12} textAlign="center" alignItems="center">
          <Text name={"Cart"} classes={classes["main-heading"]} />
        </Grid>
        {props.cart.length !== 0 ? (
          <>
            <Grid item xs={12}>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Picture</TableCell>
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="center">Size</TableCell>
                      <TableCell align="center">Color</TableCell>
                      <TableCell align="center">Price</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.cart.map(({ id, name, size, color, price }) => (
                      <Fragment key={id}>
                        <TableRow>
                          <TableCell align="center">
                            <img
                              src={GeneralImg}
                              width="50px"
                              height="50px"
                              alt={name}
                            />
                          </TableCell>
                          <TableCell align="center">{name}</TableCell>
                          <TableCell align="center">{size}</TableCell>
                          <TableCell align="center">{color}</TableCell>
                          <TableCell align="center">{`$${price}`}</TableCell>
                          <TableCell align="center">
                            <Button
                              name={"Remove"}
                              classes={classes["remove-btn"]}
                              onClick={() => props.removeCartItem(id)}
                            />
                          </TableCell>
                        </TableRow>
                      </Fragment>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12}>
              <h3>Total Amount: {`$${total}`}</h3>
            </Grid>
            <Grid item xs={12}>
              <Button name={"Purchase"} classes={classes["purchase-btn"]} />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} textAlign="center">
              <p>No item added yet</p>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default Cart;
