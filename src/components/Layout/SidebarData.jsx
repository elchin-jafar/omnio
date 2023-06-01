import ChatIcon from '@mui/icons-material/Chat';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import QuestionAnswerSharpIcon from '@mui/icons-material/QuestionAnswerSharp';
import Groups2SharpIcon from '@mui/icons-material/Groups2Sharp';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import LegendToggleRoundedIcon from '@mui/icons-material/LegendToggleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HelpCenterRoundedIcon from '@mui/icons-material/HelpCenterRounded';
import Dashboard from '../../pages/Dashboard';
//List elementler haqqinda olan umumi melumat eks etdirir:title,linki və s.
//SidebarData
/**
 SidebarData.title- sidebarda olan list elementlerin adı
 children - list elementinin child elementleridir f.e Setting səhifəsinin child elementi users,tenant
 children olan list elementlerin linki null olacaq cunki her children ozunun linki olacaq
 Content- list elementinin child olmarsa,list elemente klikledikde sehifeye yonelderse contenti burada render ede bilerik
 */

export const sidebarData = [
  {
    title: 'Home',
    icon: <HomeSharpIcon />,
    link: '/dashboard',
    children: [],
    content: null,
    element: <Dashboard />,
  },
  {
    title: 'Messages',
    icon: <QuestionAnswerSharpIcon />,
    link: '/messages/active',
    children: [],
    content: 'Messages',
  },
  {
    title: 'Community',
    icon: <Groups2SharpIcon />,
    link: '/community',
    children: [],
    content: null,
  },
  {
    title: 'Channels',
    icon: <GridViewSharpIcon />,
    link: '/channels',
    children: [],
    content: null,
  },
  {
    title: 'Statics',
    icon: <LegendToggleRoundedIcon />,
    link: '/statics',
    children: [
      {
        title: 'Overview',
        link: '/statics/overview',
      },
      {
        title: 'Activity Reports',
        link: '/statics/activity',
      },
      {
        title: 'Mbox report',
        link: '/statics/mbox',
      },
      {
        title: 'Productivity report',
        link: '/statics/productivity',
      },
    ],
    content: null,
  },
  {
    title: 'Setting',
    icon: <SettingsRoundedIcon />,
    link: '/settings',
    children: [
      {
        title: 'User',
        link: '/settings/user',
      },
      {
        title: 'Role',
        link: '/settings/role',
      },
      {
        title: 'Tenants',
        link: '/settings/tenants',
      },
    ],
    content: null,
  },
  {
    title: 'Help',
    icon: <HelpCenterRoundedIcon />,
    link: '/help',
    children: [],
    content: null,
  },
];
