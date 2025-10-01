import React from "react";
import Navigation from "./Navigation";
import Driver from "./Driver";
import Arena from "./Arena";

const Dashboard = () => {
  return (
    <div className="text-slate-300 w-full">
      <Navigation />
      <Driver />
      <Arena />
    </div>
  );
};

export default Dashboard;
