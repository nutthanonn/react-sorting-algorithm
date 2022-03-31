import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import generatePDF from "../Service/reportGenerator";
import { DataStoreImpl } from "../Store/dataStore";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
// import Divider from "@mui/material/Divider";

interface DrawerListProps {
  isopen: boolean;
  dataStore: DataStoreImpl;
  handleClickIcon: () => void;
}

const DrawerList: React.FC<DrawerListProps> = observer(
  ({ isopen, handleClickIcon, dataStore }) => {
    const navigate = useNavigate();

    return (
      <Drawer open={isopen} anchor="right" onClose={handleClickIcon}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            <ListItem button onClick={() => navigate("/")}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => navigate("/history")}>
              <ListItemText primary="History" />
            </ListItem>
            <ListItem button onClick={() => navigate("/chart")}>
              <ListItemText primary="Chart" />
            </ListItem>
            <ListItem button onClick={() => generatePDF(dataStore.Data)}>
              <ListItemText primary="Report PDF" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    );
  }
);

export default DrawerList;
