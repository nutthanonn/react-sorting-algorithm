import React, { useState } from "react";

import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { observer } from "mobx-react";
import { DataStoreImpl, DataStore } from "../Store/dataStore";
import { SortFunctionImpl } from "../Store/sort_function";

interface HomeProps {
  sortFunction: SortFunctionImpl;
  dataStore: DataStoreImpl;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background:
      "linear-gradient(to left bottom, #010059, #570d64, #892f6e, #b3577b, #d6828d, #e69893, #f4b09c, #ffc8a9, #ffd1a2, #ffdc9b, #ffe896, #fcf594)",
  },
  box: {
    backgroundColor: "#107595",
    width: "300px",
    height: "300px",
    opacity: 0.8,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
  m_top: {
    marginTop: 20,
  },
  paper: {
    padding: "5px 10px",
  },
});

const items: string[] = [
  "Merge Sort",
  "Bubble Sort",
  "Insertion Sort",
  "Selection Sort",
];

const Home: React.FC<HomeProps> = observer(({ dataStore, sortFunction }) => {
  const classes = useStyles();
  const [size, setSize] = useState<string>("");
  const [sortFunc, setSortFunc] = useState<string>("Bubble Sort");

  function handleChangeSelect(event: SelectChangeEvent) {
    setSortFunc(event.target.value);
  }
  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSize(event.target.value.toString());
  }

  function createArray(len: number) {
    var arr: number[] = [];
    for (var i: number = 0; i <= len - 1; i++) {
      const r_n: number = Math.floor(Math.random() * len);
      arr.push(r_n);
    }
    return arr;
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    var arr = createArray(parseInt(size));

    var startTime = performance.now();
    arr = sortFunction.call_sort(sortFunc, arr);
    var endTime = performance.now();

    const ms_time: number = endTime - startTime;

    console.log(ms_time);
    console.log(arr);
    dataStore.collect_data(sortFunc, parseInt(size), ms_time);
  }

  return (
    <div className={classes.root}>
      <form className={classes.box} onSubmit={handleSubmit}>
        <Typography variant="h5">Sort Algorithm</Typography>
        <div className={classes.m_top}>
          <Paper elevation={1} className={classes.paper}>
            <InputBase
              type="number"
              onChange={handleChangeInput}
              value={size}
              placeholder="Enter size of array"
            />
          </Paper>
        </div>
        <div className={classes.m_top}>
          <Select value={sortFunc} onChange={handleChangeSelect}>
            {items.map((item, index) => {
              return (
                <MenuItem value={item} key={index}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </div>
        <div className={classes.m_top}>
          <Button
            variant="outlined"
            sx={{ color: "black", borderColor: "black" }}
            type="submit"
          >
            Check Runtime
          </Button>
        </div>
      </form>
    </div>
  );
});

export default Home;
