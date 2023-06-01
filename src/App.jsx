import Layout from './components/Layout';
import { sidebarData } from './components/Layout/SidebarData';
import { Routes, Route, Navigate } from 'react-router-dom';

import ProfileLayout from './layouts/ProfileLayout';
import SecuritySettings from './pages/Profile/SecuritySettings';
import GeneralSettings from './pages/Profile/GeneralSettings';

import MessagesLayout from './layouts/MessagesLayout';
import Messages from './pages/Mbox/Messages';
import Dashboard from './pages/Dashboard';
import CompletedMessages from './pages/Mbox/CompletedMessages';

import ChannelsLayout from './layouts/ChannelsLayout';
import ChannelMain from './components/Channel/ChannelMain';
import NoPageFacebook from './pages/Channels/NoPageFacebook';

import SettingsLayout from './layouts/SettingsLayout';
import Tenants from './pages/Settings/Tenants';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfileLayout />}>
          <Route path="" element={<GeneralSettings />} />
          <Route path="security" element={<SecuritySettings />} />
        </Route>
        <Route path="/messages" element={<MessagesLayout />}>
          <Route path="active" element={<Messages />} />
          <Route path="queue" element={<Messages />} />
          <Route path="completed" element={<CompletedMessages />} />
        </Route>
        <Route path="/channels" element={<ChannelsLayout />}>
          <Route path="" element={<ChannelMain />} />
          <Route path="nopagefb" element={<NoPageFacebook />} />
        </Route>
        <Route path="/community" element={<h1>Community</h1>} />
        <Route path="/statics" element={<h1>Statics</h1>}>
          <Route path="overview" element={<h1>...</h1>} />
          <Route path="activity" element={<h1>...</h1>} />
          <Route path="mbox" element={<h1>...</h1>} />
          <Route path="productivity" element={<h1>...</h1>} />
        </Route>
        <Route path="/settings" element={<SettingsLayout />}>
          <Route path="user" element={<h1>...</h1>} />
          <Route path="role" element={<h1>...</h1>} />
          <Route path="tenants" element={<Tenants />} />
        </Route>
        <Route path="/help" element={<h1>Help</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
