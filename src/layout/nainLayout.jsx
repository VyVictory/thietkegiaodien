import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../pages/nav/Nav';
import SideBar from '../pages/side/SideBar';

const MainLayout = () => {
  return (
    // <div>
    //   <Nav />
    //   <main className='main '>
    //     <Outlet />
    //   </main>
    // </div>
    <div className='bg-[#030303] text-white'>
      <Nav />
      <div className="grid grid-cols-6 grid-rows-5 gap-2 h-screen ">
        <div className=" row-span-5 "><SideBar /></div>
        <main className=" col-span-5 row-span-5">
          <Outlet />
        </main>
      </div>
    </div>

  );
};

export default MainLayout;