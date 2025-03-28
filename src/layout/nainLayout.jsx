import React from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "../pages/nav/Nav";

const MainLayout = () => {
  return (
    <div className="body">
      <Nav />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
