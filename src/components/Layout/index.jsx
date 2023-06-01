import { Grid } from '@mui/material';
import { sidebarData } from './SidebarData';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { sideBarWidth } from '../../utils/constants';

/**
 *
 * @param {children} ReactNode
 * @param {ClassName} String
 *
 * @returns ReactNode
 */
export default function Layout({ children }) {
  return (
    <Grid
      container
      sx={{
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Sidebar sidebarData={sidebarData} />
      <Grid
        item
        sx={{
          width: `calc(100% - ${sideBarWidth}px)`
        }}
      >
        <Outlet />
      </Grid>
    </Grid>
  );
}
