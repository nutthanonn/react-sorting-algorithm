import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import HomePage from "./Pages/Home";
import HistoryPage from "./Pages/History";
import Chart from "./Pages/Chart";

const App: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<HistoryPage />} path="/history" />
        <Route element={<Chart />} path="/chart" />
      </Routes>
    </div>
  );
};

export default App;
