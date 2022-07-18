import React from "react";

import { Stack } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import GeneralImg from "../../assets/smallpics/general.jfif";

import classes from "./Profile.module.css";
import Text from "../UI/Heading";

const Profile = () => {
  // make state of name, email, cnic and get data from local storage and save it in state
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cnic, setCnic] = React.useState("");

  React.useEffect(() => {
    const userName = localStorage.getItem("name");
    const userEmail = localStorage.getItem("email");
    const userCnic = localStorage.getItem("cnic");
    setName(userName);
    setEmail(userEmail);
    setCnic(userCnic);
  }, []);

  return (
    <Stack
      direction="column"
      rowGap={2}
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      padding="50px 0px"
    >
      <Text name={"Profile"} classes={classes["main-heading"]} />
      <Stack
        direction={{ xs: "column", md: "row" }}
        rowGap={1}
        columnGap={1}
        justifyContent="center"
        alignItems="center"
      >
        <Text name={"Name:"} classes={classes["sub-heading"]} />
        <Text name={name} />
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        rowGap={1}
        columnGap={1}
        justifyContent="center"
        alignItems="center"
      >
        <Text name={"Email:"} classes={classes["sub-heading"]} />
        <Text name={email} />
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        rowGap={1}
        columnGap={1}
        justifyContent="center"
        alignItems="center"
      >
        <Text name={"CNIC no:"} classes={classes["sub-heading"]} />
        <Text name={cnic} />
      </Stack>
      <div
        style={{ width: "90%", height: "2px", backgroundColor: "black" }}
      ></div>
      <Text name={"Order History"} classes={classes["sub-heading"]} />
      <TableContainer sx={{ width: "90%" }} mx="auto">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Picture</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Size</TableCell>
              <TableCell align="center">Color</TableCell>
              <TableCell align="center">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <img src={GeneralImg} width="50px" height="50px" alt={name} />
              </TableCell>
              <TableCell align="center">Irani Chair</TableCell>
              <TableCell align="center">4x3 ft</TableCell>
              <TableCell align="center">Black</TableCell>
              <TableCell align="center">$300</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{ width: "90%", height: "2px", backgroundColor: "black" }}
      ></div>
      <Text name={"Order in Progress"} classes={classes["sub-heading"]} />
      <TableContainer sx={{ width: "90%" }} mx="auto">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Picture</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Size</TableCell>
              <TableCell align="center">Color</TableCell>
              <TableCell align="center">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <img src={GeneralImg} width="50px" height="50px" alt={name} />
              </TableCell>
              <TableCell align="center">Rose Marry</TableCell>
              <TableCell align="center">45mm</TableCell>
              <TableCell align="center">Black</TableCell>
              <TableCell align="center">$2500</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{ width: "90%", height: "2px", backgroundColor: "black" }}
      ></div>
    </Stack>
  );
};

export default Profile;
