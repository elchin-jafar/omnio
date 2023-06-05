import { useState } from 'react';
import { Box } from '@mui/material';

import AverageTime from '../../../components/Analytics/Overview/AverageTime';
import AnalyticsHeader from '../../../components/Analytics/AnalyticsHeader';
import ChartContainer from '../../../components/Analytics/Overview/ChartContainer';
import ChartComponent from '../../../components/Analytics/Overview/ChartComponent';

import { receivedChatsData } from './chartData';

function Overview() {
  const [filterDateRange, setFilterDateRange] = useState('today');
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

  function handleSelectChange(data) {
    setFilterDateRange(data);
  }
  return (
    <>
      <AnalyticsHeader title="overview" onChange={handleSelectChange} />
      <ChartComponent filterDateRange={filterDateRange} />

      <Box sx={{ display: 'flex', gap: '20px' }}>
        <AverageTime responseType />
        <AverageTime completeType />
      </Box>
      <ChartContainer receivedType />
      <ChartContainer completedType />
    </>
  );
}

export default Overview;
