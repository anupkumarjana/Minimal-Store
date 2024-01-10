import React, { useState } from "react";
import logo from "./img/newlogo2.png";
import { BsCart3 } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  function handleClose() {
    setIsOpen(false);
  }
  return (
    <nav className="w-full border-b">
      <div className="py-4 flex justify-between items-center px-4 lg:px-40">
        <a href="/">
          <img className="w-20 cursor-pointer" src={logo} alt="logo" />
        </a>

        <ul className="lg:flex justify-between gap-10 hidden items-center text-lg">
          <li className="cursor-pointer hover:text-red-700">Categories</li>
          <li className="cursor-pointer hover:text-red-700">Products</li>
          <li className="cursor-pointer hover:text-red-700 lg:block hidden">
            {<BsCart3 />}
          </li>
        </ul>
        <div className="lg:hidden flex gap-10 text-2xl font-bold">
          {" "}
          <button className="cursor-pointer hover:text-red-700">
            {<BsCart3 />}
          </button>
          <button
            className="cursor-pointer hover:text-red-700"
            onClick={handleClick}
          >
            <IoMdMenu />
          </button>
        </div>

        {isOpen && (
          <div className="w-full top-0 h-screen bg-white absolute px-4 overflow-x-hidden lg:hidden">
            <div className="pt-10 float-right">
              <button className="text-2xl font-bold" onClick={handleClose}>
                <IoMdClose />
              </button>
            </div>

            <ul className="flex flex-col text-center justify-center items-center mt-20 gap-4 text-slate-950">
              <li className="cursor-pointer hover:text-red-700 border rounded px-20 py-4 text-lg hover:-translate-y-2 w-[60%] transition-all ease-in-out duration-200">
                Categories
              </li>
              <li className="cursor-pointer hover:text-red-700 border rounded px-20 py-4 text-lg hover:-translate-y-2 w-[60%] transition-all ease-in-out duration-200">
                Products
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
