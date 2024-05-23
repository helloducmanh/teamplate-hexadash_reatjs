import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const AxiosView = lazy(() => import('../../container/crud/axios/Index'));

function AxiosRoute() {
  console.log('Component loading');
  return (
    <Routes>
      <Route path="crud/*" element={<AxiosView />} />
    </Routes>
  );
}

export default AxiosRoute;
