import React from "react";
import Areachart from "./Areachart";
import Barchart from "./Barchart";
import Linechart from "./Linechart";
import Piechart from "./Piechart";

const Dashboard = () => {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4">
      <Linechart></Linechart>
      <Areachart></Areachart>
      <Barchart></Barchart>
      <Piechart></Piechart>
    </div>
  );
};

export default Dashboard;
