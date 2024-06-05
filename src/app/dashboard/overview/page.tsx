// pages/sections/dashboard/overview.tsx
import React from "react";

const PageInfo: React.FC = () => {
  return (
    <div className="overflow-x-auto h-96">
      <table className="table table-pin-rows">
        <thead>
          <tr>
            <th className="text-xl">Page Content</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ant-Man</td>
          </tr>
          <tr>
            <td>Aquaman</td>
          </tr>
          <tr>
            <td>Asterix</td>
          </tr>
          <tr>
            <td>The Atom</td>
          </tr>
          <tr>
            <td>The Avengers</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Stuff: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl">Dashboard Stuff</h1>
        <p>This is the stuff section of the dashboard.</p>
      </div>
      <PageInfo />
    </div>
  );
};

export default Stuff;
