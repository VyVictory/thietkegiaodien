import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../pages/nav/Nav";
import SideBar from "../pages/side/SideBar";

const MainLayout = () => {
  const hightNavBar = "60px";
  return (
    <>
      <div className="h-screen flex flex-col bg-white text-white">
        <nav
          className={`h-[${hightNavBar}] fixed top-0 bg-black left-0 w-full flex items-center justify-center  text-white shadow-md z-50`}
        >
          <Nav />
        </nav>
        <div className={`flex mt-[${hightNavBar}]`}>
          <aside
            className={`w-1/6 bg-gray-200 flex flex-col items-center sticky top-[${hightNavBar}] h-[calc(100vh-${hightNavBar})]`}
          >
            <div className="p-2 w-full h-full bg-black">
              <SideBar />
            </div>
          </aside>
          <main className="w-5/6 bg-gray-400 p-4">
            <Outlet />
            <div className="h-[3000px]"></div>
          </main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
