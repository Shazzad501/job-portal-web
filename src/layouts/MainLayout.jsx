import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <section className='w-11/12 mx-auto'>
        <Navbar></Navbar>
      </section>
      {/* main dynamic page */}
      <section className='w-11/12 mx-auto'>
      <Outlet></Outlet>
      </section>
      {/* Footer section */}
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default MainLayout;