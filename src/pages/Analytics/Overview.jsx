import { Box } from '@mui/material';
import { Chart } from 'react-google-charts';

import AverageTime from '../../components/Analytics/Overview/AverageTime';

import AnalyticsHeader from '../../components/Analytics/AnalyticsHeader';

import ChartContainer from '../../components/Analytics/Overview/ChartContainer';

function Overview() {
  return (
    <>
      <AnalyticsHeader title="overview" />

      <Box sx={{ display: 'flex', gap: '20px' }}>
        <AverageTime responseType />
        <AverageTime completeType />
      </Box>
      <ChartContainer receivedType />
      <ChartContainer completedType />
      <Chart />
    </>
  );
}

export default Overview;
