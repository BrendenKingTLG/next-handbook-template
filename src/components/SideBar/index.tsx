// components/Sidebar.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronRight, FaMinus } from "react-icons/fa";
import { paths } from "../../app/constants/paths";
interface ExpandState {
  [key: string]: boolean;
}

interface SidebarProps {
  content: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ content }) => {
  const [expanded, setExpanded] = useState<ExpandState>({});

  const toggleExpand = (item: string) => {
    setExpanded((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col px-10 py-10">
        {/* Page content here */}
        {/* <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
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
          {paths.map((path, index) => {
            const dropdown =
              path.children.length === 0 ? (
                <FaMinus />
              ) : expanded[path.name] ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight />
              );
            return (
              <li key={index}>
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => toggleExpand(path.name)}
                >
                  {dropdown}

                  <Link href={path.path}>{path.name}</Link>
                </div>
                {expanded[path.name] && path.children.length > 0 && (
                  <ul className="pl-4">
                    {path.children.map((child, idx) => (
                      <li key={idx}>
                        <Link href={child.path}>{child.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
