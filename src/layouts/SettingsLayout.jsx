import React, { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const SettingsLayout = () => {
  useEffect(() => {
    const isLogin = localStorage.getItem('auth');
    if (!isLogin) return <Navigate to="/Login" />;
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default SettingsLayout;
