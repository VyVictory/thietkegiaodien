import React, { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import SideBar from "../components/side/SideBar";
import { BgOverLay } from "./bgOverlay";
import { OutSite } from "./OutSite";
import { ViewList } from "@mui/icons-material";
import { useLayout } from "../context/LayoutProvider";

const MainLayout = () => {
  const NAVBAR_HEIGHT = "60px";
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const { isPlay, modal } = useLayout();
  // Đóng sidebar khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Nếu click bên ngoài sidebar, đóng sidebar
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <>
      <div className="h-full flex flex-col relative text-white">
        <BgOverLay />

        {/* Navbar */}
        <nav
          style={{ height: NAVBAR_HEIGHT }}
          className="fixed top-0 left-0 w-full flex items-center justify-between z-50 "
        >
          {/* Hamburger toggle chỉ hiển thị mobile */}
          <button
            className="block xl:hidden text-gray-400 hover:text-white fixed left-4"
            onClick={(e) => {
              e.stopPropagation(); // Ngăn event này chạm tới document
              setSidebarOpen((prev) => !prev);
            }}
          >
            <ViewList className="w-6 h-6" />
          </button>

          <Nav />
        </nav>

        <div className="flex">
          {/* Sidebar */}
          <aside
            ref={sidebarRef}
            style={{
              top: 0,
              paddingTop: NAVBAR_HEIGHT,
              height: "100vh",
            }}
            className={`
              fixed 
              z-40
              bg-black 
              border-r border-[#404040]
              w-60
              transition-all duration-300
              ${sidebarOpen ? "left-0" : "-left-full"}
              xl:left-0 xl:sticky
            `}
          >
            <SideBar />
          </aside>

          {/* Main content */}
          <main
            style={{ paddingTop: NAVBAR_HEIGHT }}
            className="flex-1 p-4 relative max-w-6xl mx-auto overflow-y-auto"
          >
            <Outlet />
            {isPlay && <div className="h-20"></div>}
          </main>
        </div>
      </div>

      <OutSite />
    </>
  );
};

export default MainLayout;
