import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AnalyticsLayout = () => {
  const login = useSelector((state) => state.login);

  if (!login.isLogin) return <Navigate to="/login" />;
  return (
    <div style={{ padding: '24px' }}>
      <Outlet />
    </div>
  );
};

export default AnalyticsLayout;
