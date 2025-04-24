// src/AppRouter.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "../layout/nainLayout";
import Home from "../pages/Home";
import Discover from "../pages/Discover";
import Libary from "../pages/Libary";
import PlayList from "../pages/PlayList";
import Listen from "../pages/Listen";

// Component to control body overflow based on route
const ScrollController = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if current path matches the listen/id pattern
    if (location.pathname.startsWith('/listen/')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [location]);

  return null;
};

const AppRouter = () => {
  return (
    <Router>
      <ScrollController />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* Add more routes if needed */}
          <Route path="discover" element={<Discover />} />
          <Route path="libary" element={<Libary />} />
          <Route path="playlist" element={<PlayList />} />
          <Route path="listen/:id" element={<Listen />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
