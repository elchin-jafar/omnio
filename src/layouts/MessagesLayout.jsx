import { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { ChatsContainer } from '../components/Mbox/StyledComponents';

export default function MessagesLayout() {
  useEffect(() => {
    const isLogin = localStorage.getItem('auth');
    if (!isLogin) return <Navigate to="/Login" />;
  }, []);
  return (
    <ChatsContainer>
      <Outlet />
    </ChatsContainer>
  );
}
