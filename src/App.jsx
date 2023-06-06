import Layout from './components/Layout';
import { sidebarData } from './components/Layout/SidebarData';
import {
  Routes,
  Route,
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import ProfileLayout, {
  loader as profileLayoutLoader,
} from './layouts/ProfileLayout';
import SecuritySettings from './pages/Profile/SecuritySettings';
import GeneralSettings from './pages/Profile/GeneralSettings';

import MessagesLayout, {
  loader as messageLayoutLoader,
} from './layouts/MessagesLayout';
import Messages from './pages/Mbox/Messages';
import Dashboard, { loader as dashboardLoader } from './pages/Dashboard';
import CompletedMessages from './pages/Mbox/CompletedMessages';

import ChannelsLayout, {
  loader as channelsLayoutLoader,
} from './layouts/ChannelsLayout';
import ChannelMain from './components/Channel/ChannelMain';
import NoPageFacebook from './pages/Channels/NoPageFacebook';

import SettingsLayout, {
  loader as settingsLoader,
} from './layouts/SettingsLayout';
import Tenants from './pages/Settings/Tenants';
import Login from './pages/Login';
import AnalyticsLayout, {
  loader as analyticsLoader,
} from './layouts/AnalyticsLayout';
import Overview from './pages/Analytics/Overview/Overview';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/login" />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '',
      element: <Layout />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />,
          loader: dashboardLoader,
        },
        {
          path: '/profile',
          element: <ProfileLayout />,
          loader: profileLayoutLoader,
          children: [
            {
              path: '',
              element: <GeneralSettings />,
            },
            {
              path: 'security',
              element: <SecuritySettings />,
            },
          ],
        },
        {
          path: '/messages',
          element: <MessagesLayout />,
          loader: messageLayoutLoader,
          children: [
            {
              path: 'active',
              element: <Messages />,
            },
            {
              path: 'queue',
              element: <Messages />,
            },
            {
              path: 'completed',
              element: <CompletedMessages />,
            },
          ],
        },
        {
          path: '/channels',
          element: <ChannelsLayout />,
          loader: channelsLayoutLoader,
          children: [
            {
              path: '',
              element: <ChannelMain />,
            },
            {
              path: 'nopagefb',
              element: <NoPageFacebook />,
            },
          ],
        },
        {
          path: '/community',
          element: <h1>community</h1>,
        },
        {
          path: '/statics',
          element: <AnalyticsLayout />,
          loader: analyticsLoader,
          children: [
            {
              path: 'overview',
              element: <Overview />,
            },
            {
              path: 'activity',
              element: <h2>activity</h2>,
            },
            {
              path: 'mbox',
              element: <h1>mbox</h1>,
            },
            {
              path: 'productivity',
              element: <h2>productivity</h2>,
            },
          ],
        },
        {
          path: '/settings',
          element: <SettingsLayout />,
          loader: settingsLoader,
          children: [
            {
              path: 'user',
              element: <h1>user</h1>,
            },
            {
              path: 'role',
              element: <h1>role</h1>,
            },
            {
              path: 'tenants',
              element: <Tenants />,
            },
          ],
        },
        {
          path: '/help',
          element: <h2>help</h2>,
        },
        {
          path: '*',
          element: <h2>404</h2>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
