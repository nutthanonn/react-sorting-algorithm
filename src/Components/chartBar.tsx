import React, { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import { observer } from "mobx-react";
import { DataStoreImpl } from "../Store/dataStore";

interface ChartBarProps {
  dataStore: DataStoreImpl;
}
interface dataProps {
  // func_name: string;
  size: number;
  runtime: number;
}

const ChartBar: React.FC<ChartBarProps> = observer(({ dataStore }) => {
  const [data, setData] = useState<dataProps[]>([]);

  useEffect(() => {
    setData(dataStore.fetch_data_chart());
  }, [dataStore.TypeofChart, dataStore]);

  return (
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
      <CartesianGrid strokeDasharray="2 2" />
      <XAxis dataKey="size" />
      <YAxis />
      <Area type="monotone" dataKey="runtime" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
});

export default ChartBar;
