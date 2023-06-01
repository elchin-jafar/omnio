import { Grid } from '@mui/material';

import BottomSideBar from './BottomSideBar';
import TopSideBar from './TopSideBar';

import { sideBarWidth } from '../../utils/constants';

export default function Sidebar({ sidebarData }) {
  return (
    <Grid
      item
      sx={{
        width: sideBarWidth,
        backgroundColor: 'primary.main',
      }}
    >
      <TopSideBar navigationList={sidebarData} />
      <BottomSideBar navigationList={sidebarData} />
    </Grid>
  );
}
