// pages/sections/dashboard/overview.tsx
import React from "react";
import PageInfo from "@/components/PageInfo";

const Stuff: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl">Dashboard Stuff</h1>
        <p>This is the stuff section of the dashboard.</p>
      </div>
      <PageInfo content={["x", "y", "z"]} />
    </div>
  );
};

export default Stuff;
