import { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Navbar from '../components/Profile/Navbar';
import { CustomFlexbox } from '../components/Profile/StyledComponents';

export default function ProfileLayout() {
  useEffect(() => {
    const isLogin = localStorage.getItem('auth');
    if (isLogin === 'false') {
      <Navigate to="/Login" />;
    }
  }, []);
  return (
    <CustomFlexbox>
      <Navbar />
      <Outlet />
    </CustomFlexbox>
  );
}
