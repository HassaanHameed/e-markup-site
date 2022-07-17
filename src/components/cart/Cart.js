import React from "react";
import { useParams } from "react-router-dom";

import { Grid, Stack } from "@mui/material";

import Text from "../UI/Heading";
import classes from "./Cart.module.css";
import GeneralImg from "../../assets/smallpics/general.jfif";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { categoryCollection } from "../categories/categoryData";

const Cart = () => {
  const id = useParams();
  const { id: productId } = id;
  const product = categoryCollection.find(product => product.id === productId);
  console.log(product);
  const { name, price, image, size, color, offer } = product;

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
                  {offer && <TableCell>Offer</TableCell>}
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <img
                      src={GeneralImg}
                      width="50px"
                      height="50px"
                      alt={name}
                    />
                  </TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{size}</TableCell>
                  <TableCell>{color}</TableCell>
                  {offer && <TableCell>{offer}</TableCell>}
                  <TableCell>{price}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <button>purchase</button>
        </Grid>
      </Grid>
    </>
  );
};

export default Cart;
