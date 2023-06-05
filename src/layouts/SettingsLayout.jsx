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
  const auth = sessionStorage.getItem('auth');
  if (!auth) {
    return redirect('/');
  }
  return null;
};
