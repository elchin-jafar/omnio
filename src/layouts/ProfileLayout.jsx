import { Outlet, Navigate } from 'react-router-dom';
import Navbar from '../components/Profile/Navbar';
import { CustomFlexbox } from '../components/Profile/StyledComponents';
import { useSelector } from 'react-redux';

export default function ProfileLayout() {
  const login = useSelector((state) => state.login);

  if (!login.isLogin) return <Navigate to="/login" />;
  return (
    <CustomFlexbox>
      <Navbar />
      <Outlet />
    </CustomFlexbox>
  );
}
