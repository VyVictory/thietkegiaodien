// src/AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/nainLayout";
import Home from "../pages/Home";
import Discover from "../pages/Discover";
import Libary from "../pages/Libary";
import PlayList from "../pages/PlayList";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* Add more routes if needed */}
          <Route path="discover" element={<Discover />} />
          <Route path="libary" element={<Libary />} />
          <Route path="playlist" element={<PlayList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
