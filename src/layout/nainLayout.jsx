import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import SideBar from "../components/side/SideBar";
const MainLayout = () => {
  const heightNavBar = "60px"; // nên sửa tên biến

  return (
    <div className="h-screen flex flex-col relative  text-white">
      <nav
        style={{ height: heightNavBar }}
        className="fixed top-0 left-0 w-full flex items-center justify-center text-white shadow-md z-50"
      >
        <Nav />
      </nav>
      <div style={{ marginTop: heightNavBar }} className="flex">
        <aside
          style={{ top: heightNavBar, height: `calc(100vh - ${heightNavBar})` }}
          className="w-1/6 flex flex-col items-center sticky"
        >
          <SideBar />
        </aside>
        <main className="w-5/6  p-4 text-white relative">
          <Outlet />
          <div className="h-[3000px]"></div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
