import React from "react";
import { PieChart, Pie } from "recharts";
import UseDashboard from "../../Utilites/Hooks/UseDashboard";

const Piechart = () => {
  const [dashboardData] = UseDashboard();
  return (
    <div className="text-center mx-auto">
      <h1 className="text-4xl mb-5">Investment Vs Revenue</h1>
      <PieChart width={400} height={400}>
        <Pie
          data={dashboardData}
          dataKey="investment"
          cx={200}
          cy={200}
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={dashboardData}
          dataKey="revenue"
          cx={200}
          cy={200}
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};
export default Piechart;
