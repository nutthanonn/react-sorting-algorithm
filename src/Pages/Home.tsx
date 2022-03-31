import React from "react";
import Home from "../Components/home";
import Navbar from "../Components/navbar";

import { DataStore } from "../Store/dataStore";
import { SortFunctionStore } from "../Store/sort_function";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home dataStore={DataStore} sortFunction={SortFunctionStore} />
    </div>
  );
};

export default HomePage;
