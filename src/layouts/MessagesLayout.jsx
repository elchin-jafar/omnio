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
  const auth = sessionStorage.getItem('auth');
  if (!auth) {
    return redirect('/');
  }
  return null;
};
