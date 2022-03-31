import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { makeStyles } from "@mui/styles";

import { DataStoreImpl } from "../Store/dataStore";
import { observer } from "mobx-react";

interface HistoryProps {
  dataStore: DataStoreImpl;
}

const useStyles = makeStyles({
  root: {
    height: "100vh",
    background:
      "linear-gradient(to left bottom, #010059, #570d64, #892f6e, #b3577b, #d6828d, #e69893, #f4b09c, #ffc8a9, #ffd1a2, #ffdc9b, #ffe896, #fcf594)",
  },
  tableContent: {
    marginTop: 90,
    backgroundColor: "white",
    opacity: 0.8,
    borderRadius: 10,
  },
});

const History: React.FC<HistoryProps> = observer(({ dataStore }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        className={classes.tableContent}
      >
        <TableHead>
          <TableRow>
            <TableCell>Sorting Algorithm</TableCell>
            <TableCell align="right">Size</TableCell>
            <TableCell align="right">Runtime</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataStore.Data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.func_name}
              </TableCell>
              <TableCell align="right">{row.size}</TableCell>
              <TableCell align="right">{row.runtime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default History;
