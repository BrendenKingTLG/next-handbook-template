import React from "react";
import { RiMenuFold2Fill } from "react-icons/ri";

const index = () => {
  return (
    <div className="navbar bg-secondary">
      <div className="navbar-start">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-square btn-ghost drawer-button lg:hidden"
        >
          <RiMenuFold2Fill fill="white" size={25} />
        </label>
      </div>
      <div className="navbar-center">
        <a className="text-xl text-neutral-50 font-bold">Handbook</a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default index;
