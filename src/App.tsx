import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Home from "./Components/home";
import { DataStore } from "./Store/dataStore";
import { SortFunctionStore } from "./Store/sort_function";

const App: React.FC = () => {
  return (
    <div>
      <Home dataStore={DataStore} sortFunction={SortFunctionStore} />
      <CssBaseline />
    </div>
  );
};

export default App;
