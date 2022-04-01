import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { observer } from "mobx-react";
import { makeStyles } from "@mui/styles";
import { DataStoreImpl } from "../Store/dataStore";

interface ToggleBtnProps {
  dataStore: DataStoreImpl;
}

const useStyles = makeStyles({
  btn: {
    backgroundColor: "whitesmoke",
  },
});

const ToggleBtn: React.FC<ToggleBtnProps> = observer(({ dataStore }) => {
  const classes = useStyles();
  const [alignment, setAlignment] = useState<string>(dataStore.TypeofChart);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
    dataStore.change_typeof_chart(newAlignment);
  };
  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      className={classes.btn}
    >
      <ToggleButton value="Merge Sort">Merge Sort</ToggleButton>
      <ToggleButton value="Bubble Sort">Bubble Sort</ToggleButton>
      <ToggleButton value="Insertion Sort">Insertion Sort</ToggleButton>
      <ToggleButton value="Selection Sort">Selection Sort</ToggleButton>
    </ToggleButtonGroup>
  );
});

export default ToggleBtn;
