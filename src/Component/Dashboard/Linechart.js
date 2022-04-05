import React from "react";
import UseDashboard from "../../Utilites/Hooks/UseDashboard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Linechart = () => {
  const [dashboardData] = UseDashboard();

  return (
    <div className="text-center mx-auto">
      <h1 className="text-4xl mb-5">Month Wise Sell</h1>
      <LineChart
        width={500}
        height={300}
        data={dashboardData}
        margin={{
          top: 5,
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
        <Line
          type="monotone"
          dataKey="sell"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};
export default Linechart;
