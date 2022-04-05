import React from "react";
import UseDashboard from "../../Utilites/Hooks/UseDashboard";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Areachart = () => {
  const [dashboardData] = UseDashboard();
  return (
    <div className="text-center mx-auto">
      <h1 className="text-4xl mb-5">Investment Vs Revenue</h1>
      <AreaChart
        width={500}
        height={400}
        data={dashboardData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <Area
          type="monotone"
          dataKey="investment"
          stroke="#8884d8"
          fill="#8884d8"
        />

        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#8884d8"
          fill="#82ca9d"
        />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      </AreaChart>
    </div>
  );
};
export default Areachart;
