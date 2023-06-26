import React from 'react';
import { Outlet, redirect } from 'react-router-dom';

const AnalyticsLayout = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Outlet />
    </div>
  );
};

export default AnalyticsLayout;

export const loader = () => {
  const sessionAuth = sessionStorage.getItem('auth');
  const localAuth = localStorage.getItem('auth');
  if (!sessionAuth && !localAuth) return redirect('/');
  return null;
};
