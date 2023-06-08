import Chart from 'react-google-charts';
import AnalyticsHeader from '../../../components/Analytics/AnalyticsHeader';
import ChartContainer from '../../../components/Analytics/ChartContainer';
import AverageTime from '../../../components/Analytics/Overview/AverageTime';
import { Box } from '@mui/material';

function ProductivityReport() {
  const data = [
    [
      'date',
      'time',
      //   { sourceColumn: 0, role: 'interval', type: 'number', calc: 'stringify' },
    ],
    ['Jul 9', 1000],
    ['Jul 10', 2000],
    ['Jul 11', 500],
    ['Jul 12', 3000],
    ['Jul 13', 1500],
    ['Jul 14', 1200],
  ];
  return (
    <>
      <AnalyticsHeader title="Productivity report" onChange={() => null} />
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <AverageTime responseType data="25m 49s" loading={false} />
        <AverageTime completeType data="3h 41m 12s" loading={false} />
      </Box>
      <ChartContainer />
      <Chart
        chartType="AreaChart"
        width="100%"
        height="400px"
        data={data}
        options={{
          legend: 'none',
        }}
      />
    </>
  );
}

export default ProductivityReport;
