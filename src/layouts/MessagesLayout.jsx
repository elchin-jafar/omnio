import { Outlet, Navigate } from 'react-router-dom';
import { ChatsContainer } from '../components/Mbox/StyledComponents';
import { useSelector } from 'react-redux';

export default function MessagesLayout() {
  const login = useSelector((state) => state.login);

  if (!login.isLogin) return <Navigate to="/login" />;
  return (
    <ChatsContainer>
      <Outlet />
    </ChatsContainer>
  );
}
