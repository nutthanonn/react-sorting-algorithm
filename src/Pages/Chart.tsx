import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import Box from "@mui/material/Box";
import Navbar from "../Components/navbar";

const data = [
  {
    name: "Page A",
    uv: 4000,
  },
  {
    name: "Page B",
    uv: 3000,
  },
  {
    name: "Page C",
    uv: 2000,
  },
  {
    name: "Page D",
    uv: 2780,
  },
  {
    name: "Page E",
    uv: 1890,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page G",
    uv: 3490,
  },
];

const Chart: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          background:
            "linear-gradient(to left bottom, #010059, #570d64, #892f6e, #b3577b, #d6828d, #e69893, #f4b09c, #ffc8a9, #ffd1a2, #ffdc9b, #ffe896, #fcf594)",
          height: "93vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AreaChart
          width={1000}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </Box>
    </Box>
  );
};

export default Chart;
