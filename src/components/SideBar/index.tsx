// components/Sidebar.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

interface ExpandState {
  [key: string]: boolean;
}

const Sidebar: React.FC = ({ content }) => {
  const [expanded, setExpanded] = useState<ExpandState>({});

  const toggleExpand = (item: string) => {
    setExpanded((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col px-10 py-10">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <div className="">{content}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => toggleExpand("dashboard")}
            >
              {expanded["dashboard"] ? <FaChevronDown /> : <FaChevronRight />}

              <Link href="/dashboard">Dashboard</Link>
            </div>
            {expanded["dashboard"] && (
              <ul className="pl-4">
                <li>
                  <Link href="/dashboard/overview">Overview</Link>
                </li>
                <li>
                  <Link href="/dashboard/stuff">Stats</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
