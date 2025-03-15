import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nav from './Nav';

const MainLayout = () => {
  return (
    <div>
        <Nav/>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;