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
  const auth = sessionStorage.getItem('auth');
  if (!auth) {
    return redirect('/');
  }
  return null;
};
