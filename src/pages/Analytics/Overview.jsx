import { Box } from '@mui/material';
import { Chart } from 'react-google-charts';

import AverageTime from '../../components/Analytics/Overview/AverageTime';

import AnalyticsHeader from '../../components/Analytics/AnalyticsHeader';

import ChartContainer from '../../components/Analytics/Overview/ChartContainer';

import { receivedChatsData } from './chartData';

function Overview() {
  console.log(
    'receivedChatsData',
    receivedChatsData.slice(
      receivedChatsData.length - 7 - 7 * 2,
      receivedChatsData.length - 7 * 2
    )
  );
  const data = [
    [
      'date',
      'Facebook',
      {
        sourceColumn: 0,
        role: 'annotation',
        type: 'number',
        calc: 'stringify',
      },
      'Email',
      {
        sourceColumn: 0,
        role: 'annotation',
        type: 'string',
        calc: 'stringify',
        color: '#fff',
      },
      'Whatsapp',
      {
        sourceColumn: 0,
        role: 'annotation',
        type: 'number',
        calc: 'stringify',
      },
    ],
    ['9 May', 40, 40, 20, 20, 60, 60],
    ['10 May', 40, 40, 20, 20, 60, 60],
    ['11 May', 40, 40, 20, 20, 60, 60],
    ['12 May', 40, 40, 20, 20, 60, 60],
    ['13 May', 40, 40, 20, 20, 60, 60],
    ['14 May', 40, 40, 20, 20, 60, 60],
    ['15 May', 40, 40, 20, 20, 60, 60],
  ];
  const options = {
    bar: { groupWidth: '30%' },
    isStacked: true,
    colors: ['#7B94CC', '#63B0E3', '#70D77C'],
  };
  return (
    <>
      <AnalyticsHeader title="overview" />

      <Box sx={{ display: 'flex', gap: '20px' }}>
        <AverageTime responseType />
        <AverageTime completeType />
      </Box>
      <ChartContainer receivedType />
      <ChartContainer completedType />
      <Chart
        chartType="ColumnChart"
        data={data}
        options={options}
        height="400px"
      />
    </>
  );
}

export default Overview;
