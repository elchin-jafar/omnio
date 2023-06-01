import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SettingsLayout = () => {
  const login = useSelector((state) => state.login);

  if (!login.isLogin) return <Navigate to="/login" />;
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default SettingsLayout;
