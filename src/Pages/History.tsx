import React from "react";
import { DataStore } from "../Store/dataStore";
import History from "../Components/history";
import Navbar from "../Components/navbar";

const HistoryPage = () => {
  return (
    <div>
      <Navbar />
      <History dataStore={DataStore} />
    </div>
  );
};

export default HistoryPage;
