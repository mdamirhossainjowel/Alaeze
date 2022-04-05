import React from "react";
import UseDashboard from "../../Utilites/Hooks/UseDashboard";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Barchart = () => {
  const [dashboardData] = UseDashboard();
  return (
    <div className="text-center mx-auto">
      <h1 className="text-4xl mb-5">Investment Vs Revenue</h1>
      <BarChart
        width={500}
        height={300}
        data={dashboardData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};
export default Barchart;
