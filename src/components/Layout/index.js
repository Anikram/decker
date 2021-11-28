import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import RightSideBar from '../RightSideBar';

const Layout = function (props) {
  return (
    <div>
      <Header />
      <Outlet />
      <RightSideBar />
    </div>
  );
};

export default Layout;
