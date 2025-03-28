import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nav from '../pages/nav/Nav';

const MainLayout = () => {
  return (
    <div>
        <Nav/>
      <main className='main '> 
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;