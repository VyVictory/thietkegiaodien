import React, { useEffect, useRef, useState } from "react";
import log from "../../assets/logo.png";
import { Search } from "@mui/icons-material";
import { UserDropDow } from "./UserDropDow";
import { Link } from "react-router-dom";

export default function Nav() {
  const navRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 0) {
        navRef.current.style.backgroundColor = "black";
        navRef.current.style.borderColor = "#404040";
      } else {
        navRef.current.style.backgroundColor = "transparent";
        navRef.current.style.borderColor = "transparent";
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full h-[60px] flex items-center justify-between pr-4 border-b border-transparent z-50 transition-colors duration-300 bg-transparent"
    >
      <div className="flex-shrink-0 text-blue-400 font-bold text-xl">
        <Link to={"/"} className="  flex-row items-center hidden xl:flex">
          <img src={log} alt="Logo" className="h-16 object-contain" />
          Next To Music
        </Link>
      </div>
      <div className="flex-1 px-4 hidden md:flex justify-center">
        <div className="relative w-full max-w-md ">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="
              w-full pl-10 pr-4 py-2
              bg-gray-800 bg-opacity-50
              border border-gray-600
              text-white placeholder-gray-400
              rounded-full
              focus:outline-none focus:ring-1 focus:ring-blue-500
              transition
            "
          />
        </div>
      </div>
      <UserDropDow />
    </nav>
  );
}
