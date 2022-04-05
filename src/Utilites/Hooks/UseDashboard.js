import { useEffect, useState } from "react";

const UseDashboard = () => {
  const [dashboardData, setdashboardData] = useState([]);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setdashboardData(data));
  }, []);

  return [dashboardData, setdashboardData];
};
export default UseDashboard;
