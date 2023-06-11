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
  const sesstionAuth = sessionStorage.getItem('auth');
  const localAuth = localStorage.getItem('auth');
  if (!sesstionAuth && !localAuth) return redirect('/');
  return null;
};
