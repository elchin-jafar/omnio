import { Outlet, redirect } from 'react-router-dom';
import { ChatsContainer } from '../components/Mbox/StyledComponents';

export default function MessagesLayout() {
  return (
    <ChatsContainer>
      <Outlet />
    </ChatsContainer>
  );
}

export const loader = () => {
  const sesstionAuth = sessionStorage.getItem('auth');
  const localAuth = localStorage.getItem('auth');
  if (!sesstionAuth && !localAuth) return redirect('/');
  return null;
};
