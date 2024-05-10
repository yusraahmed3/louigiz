import React from "react";
import Navbar from "./Navbar";
const PageTitles = () => {
  function renderCondition() {
    switch (window.location.pathname) {
      case "/beauty":
        return "Beauty";
      case "/skin":
        return "Skin Care";
      case "/home":
        return "Home Decor";
    }
  }

  return (
    <div>
      <Navbar />
      <div className="w-full bg-[#FAF9F8] py-7 md:py-14">
        <h1 className="text-center font-custom2 text-2xl font-bold tracking-widest text-[#855A3E] md:text-4xl">
          {renderCondition()}
        </h1>
      </div>
    </div>
  );
};

export default PageTitles;