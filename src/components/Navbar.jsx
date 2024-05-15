import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const NavLinks = () => {
  return (
    <>
      <Link
        to="/beauty"
        className={`hover:cursor-pointer ${
          window.location.hash === "#/beauty" && "font-custom"
        }`}
      >
        {" "}
        Beauty
      </Link>
      <Link
        to="/skin"
        className={`hover:cursor-pointer ${
          window.location.hash === "#/skin" && "font-custom"
        }`}
      >
        {" "}
        Skin
      </Link>
      <Link
        to="/home"
        className={`hover:cursor-pointer ${
          window.location.hash === "#/home" && "font-custom"
        }`}
      >
        Home Decor
      </Link>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-[20] mx-auto flex w-full flex-wrap items-center justify-between border-b border-b-[#855A3E] p-8 text-[#855A3E]">
      <Link to="/">
        <h1 className="font-custom2 text-2xl font-bold md:text-4xl 3xl:text-5xl">
        Louigiz.
        </h1>
      </Link>

      <div className="flex w-1/5 justify-end">
        <div className="hidden w-full justify-between font-custom2 text-lg font-bold lg:flex 2xl:text-xl 3xl:text-2xl">
          <NavLinks />
        </div>
        <div className="cursor-pointer text-2xl text-[#855A3E] lg:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
        
      </div>
      {isOpen && (
          <div
            className="flex basis-full flex-col items-end pt-5 font-custom2 text-lg font-bold lg:hidden 2xl:text-xl"
          >
            <NavLinks />
          </div>
        )}
    </nav>
  );
};

export default Navbar;
