import React, { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const AnalyticsLayout = () => {
  const isLogin = localStorage.getItem('auth');
  if (isLogin === 'false') return <Navigate to="/Login" />;
  return (
    <div style={{ padding: '24px' }}>
      <Outlet />
    </div>
  );
};

export default AnalyticsLayout;
