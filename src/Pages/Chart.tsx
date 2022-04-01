import React from "react";

import Box from "@mui/material/Box";
import Navbar from "../Components/navbar";
import { makeStyles } from "@mui/styles";
import ChartBar from "../Components/chartBar";
import ToggleBtn from "../Components/toggleBtn";
import { DataStore } from "../Store/dataStore";

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(to left bottom, #010059, #570d64, #892f6e, #b3577b, #d6828d, #e69893, #f4b09c, #ffc8a9, #ffd1a2, #ffdc9b, #ffe896, #fcf594)",
    height: "92vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  btn: {
    backgroundColor: "whitesmoke",
  },
});

const Chart: React.FC = () => {
  const classes = useStyles();

  return (
    <Box>
      <Navbar />
      <Box className={classes.root}>
        <ToggleBtn dataStore={DataStore} />
        <ChartBar dataStore={DataStore} />
      </Box>
    </Box>
  );
};

export default Chart;
