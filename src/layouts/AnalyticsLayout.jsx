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
  const auth = sessionStorage.getItem('auth');
  if (!auth) {
    return redirect('/');
  }
  return null;
};
