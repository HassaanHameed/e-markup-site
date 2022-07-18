import React, { Fragment } from "react";

import classes from "./Wishlist.module.css";
import Text from "../UI/Heading";
import Button from "../UI/Button";
import GeneralImg from "../../assets/smallpics/general.jfif";

import { Alert, Snackbar, Stack } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Wishlist = props => {
  const handleClick = id => {
    props.addToCart(id);
    props.setOpenSnack(true);
  };
  const handleDelete = id => {
    props.removeWishlistItem(id);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    props.setOpenSnack(false);
  };
  return (
    <Stack
      minHeight="100vh"
      p={2}
      direction="column"
      rowGap={2}
      justifyContent="center"
      alignItems="center"
    >
      <Text name={"Wishlist"} classes={classes["main-heading"]} />
      {props.wishlist.length !== 0 ? (
        <TableContainer sx={{ width: "90%" }} mx="auto">
          <Table>
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
              {props.wishlist.map(({ id, name, size, color, price }) => (
                <Fragment key={id}>
                  <TableRow>
                    <TableCell align="center">
                      <img
                        width={"50px"}
                        height={"50px"}
                        src={GeneralImg}
                        alt="picture"
                      />
                    </TableCell>
                    <TableCell align="center">{name}</TableCell>
                    <TableCell align="center">{size}</TableCell>
                    <TableCell align="center">{color}</TableCell>
                    <TableCell align="center">{`$${price}`}</TableCell>
                    <TableCell align="center">
                      <Stack
                        direction="row"
                        columnGap={1}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Button
                          onClick={() => handleClick(id)}
                          classes={classes["addtocart-btn"]}
                          name={"Add to Cart"}
                        />
                        <Button
                          onClick={() => handleDelete(id)}
                          classes={classes["remove-btn"]}
                          name={"Remove"}
                        />
                      </Stack>
                    </TableCell>
                  </TableRow>
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <>
          <p>Wishlist is Empty</p>
        </>
      )}
      <Snackbar
        open={props.openSnack}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Item Added
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Wishlist;
