import { Outlet, redirect } from 'react-router-dom';
import { ChannelContainer } from '../components/Channel/StyledComponents';

export default function ChannelsLayout() {
  return (
    <ChannelContainer>
      <Outlet />
    </ChannelContainer>
  );
}

export const loader = () => {
  const sesstionAuth = sessionStorage.getItem('auth');
  const localAuth = localStorage.getItem('auth');
  if (!sesstionAuth && !localAuth) return redirect('/');
  return null;
};
