import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import SideBar from "../components/side/SideBar";
import { BgOverLay } from "./bgOverlay";
const MainLayout = () => {
  const heightNavBar = "60px"; // nên sửa tên biến

  return (
    <div className="h-full flex flex-col relative  text-white">
      {/* Gradient nền chính */}
      <BgOverLay />
      <nav
        style={{ height: heightNavBar }}
        className="fixed top-0 left-0 w-full flex items-center justify-center  z-50"
      >
        <Nav />
      </nav>
      <div className="flex">
        <aside
          style={{
            top: "0px",
            paddingTop: heightNavBar,
            height: `calc(100vh)`,
          }}
          className="w-1/12 min-w-60 flex flex-col items-center sticky bg-black"
        >
          <SideBar />
        </aside>
        <main
          style={{
            top: "0px",
            paddingTop: heightNavBar,
          }}
          className="w-5/6  p-4 text-white relative"
        >
          <Outlet />
          <div className="h-[3000px]"></div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
