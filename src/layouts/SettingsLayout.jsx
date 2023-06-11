import React from 'react';
import { Outlet, redirect } from 'react-router-dom';

const SettingsLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default SettingsLayout;

export const loader = () => {
  const sesstionAuth = sessionStorage.getItem('auth');
  const localAuth = localStorage.getItem('auth');
  if (!sesstionAuth && !localAuth) return redirect('/');
  return null;
};
