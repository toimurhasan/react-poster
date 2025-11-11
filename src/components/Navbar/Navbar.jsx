import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="flex gap-2 text-xl">
          <MdOutlineMessage className="text-4xl " />
          React Poster
        </a>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <a
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          <IoIosAddCircle className="pt-1 text-2xl" />
          New Post
        </a>
      </div>
    </div>
  );
};
