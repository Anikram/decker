import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/index';
import Layout from '../Layout';

const Router = function ({}) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Router;
