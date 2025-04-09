import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import SideBar from "../components/side/SideBar";

const MainLayout = () => {
  const hightNavBar = "60px";
  return (
    <div className="h-screen flex flex-col bg-[#020202] text-white">
      <nav className={`h-[${hightNavBar}] fixed top-0 bg-[#020202] left-0 w-full flex items-center justify-center  text-white shadow-md z-50`} >
        <Nav />
      </nav>
      <div className={`flex mt-[${hightNavBar}]`}>
        <aside className={`w-1/6 bg-gray-200 flex flex-col items-center sticky top-[${hightNavBar}] h-[calc(100vh-${hightNavBar})]`} >
          <SideBar />
        </aside>
        <main className="w-5/6 bg-[#020202] p-4 text-white relative">
          <Outlet />
          <div className="h-[3000px]"></div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;