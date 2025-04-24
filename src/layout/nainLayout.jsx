import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import SideBar from "../components/side/SideBar";
const MainLayout = () => {
  const heightNavBar = "60px"; // nên sửa tên biến

  return (
    <div className="flex flex-col bg-[#020202] text-white">
      <nav
        style={{ height: heightNavBar }}
        className="fixed top-0 left-0 w-full flex items-center justify-center text-white shadow-md z-50"
      >
        <Nav />
      </nav>
      <div style={{ marginTop: heightNavBar }} className="flex">
        <aside
          style={{ top: heightNavBar, height: `calc(100vh - ${heightNavBar})` }}
          className="  flex flex-col items-center sticky border-r-[1px] border-[#222222]"
        >
          <SideBar />
        </aside>
        <main className="bg-[#020202] text-white flex flex-col items-center w-full max-w-7xl mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
