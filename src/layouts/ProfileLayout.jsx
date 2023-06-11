import { Outlet, redirect } from 'react-router-dom';
import Navbar from '../components/Profile/Navbar';
import { CustomFlexbox } from '../components/Profile/StyledComponents';

export default function ProfileLayout() {
  return (
    <CustomFlexbox>
      <Navbar />
      <Outlet />
    </CustomFlexbox>
  );
}

export const loader = () => {
  const sesstionAuth = sessionStorage.getItem('auth');
  const localAuth = localStorage.getItem('auth');
  if (!sesstionAuth && !localAuth) return redirect('/');
  return null;
};
