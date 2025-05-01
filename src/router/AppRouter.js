// src/AppRouter.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "../layout/nainLayout";
import Home from "../pages/Home";
import Discover from "../pages/discover/Discover";
import Libary from "../pages/Libary";
import PlayList from "../pages/PlayList";
import Listen from "../pages/Listen";
import DetailSinger from "../pages/DetailSinger";
import LayoutAdmin from "../pages/admin/LayoutAdmin";
import Dashboard from "../pages/admin/Dashboard";
import SongManager from "../pages/admin/SongManager";
import AlbumManager from "../pages/admin/AlbumManager";
import ArtistManager from "../pages/admin/ArtistManager";
import CategoryManager from "../pages/admin/CategoryManager";
import Login from "../pages/Login";
import Register from "../pages/Register";


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
          <Route path="playlist/:id" element={<PlayList />} />
          <Route path="listen/:id" element={<Listen />} />
          <Route path="singer/:id" element={<DetailSinger />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="songmanager" element={<SongManager />} />
          <Route path="albummanager" element={<AlbumManager />} />
          <Route path="artistmanager" element={<ArtistManager />} />
          <Route path="categorymanager" element={<CategoryManager />} />
          {/* Add more routes if needed */}
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
