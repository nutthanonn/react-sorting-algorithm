import React, { useState } from "react";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DrawerList from "./drawerList";
import Tooltip from "@mui/material/Tooltip";
import { HiMenuAlt3 } from "react-icons/hi";
import { makeStyles } from "@mui/styles";
import { DataStore } from "../Store/dataStore";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FDBFB3",
    width: "100%",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
    opacity: 0.6,
  },
  navTap: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const Navbar: React.FC = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClickIcon() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={classes.root}>
      <Toolbar className={classes.navTap}>
        <Typography
          sx={{ fontWeight: "bold", textDecoration: "none", color: "black" }}
          component="a"
          href="https://github.com/nutthanonn"
          target="_blank"
        >
          Sorting Algorithm By Nutthanon
        </Typography>
        <Tooltip title="Menu">
          <IconButton onClick={handleClickIcon}>
            <HiMenuAlt3 />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <DrawerList
        isopen={isOpen}
        handleClickIcon={handleClickIcon}
        dataStore={DataStore}
      />
    </div>
  );
};
export default Navbar;
