import React from 'react';
import Header from '../Header';
import RightSideBar from '../RightSideBar';

const Layout = function (props) {
  return (
    <div>
      <Header />
      {props.children}
      <RightSideBar />
    </div>
  );
};

export default Layout;
