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
  const auth = sessionStorage.getItem('auth');
  if (!auth) {
    return redirect('/');
  }
  return null;
};
