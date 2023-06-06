import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import AverageTime from '../../../components/Analytics/Overview/AverageTime';
import AnalyticsHeader from '../../../components/Analytics/AnalyticsHeader';
import ChartContainer from '../../../components/Analytics/Overview/ChartContainer';
// import ChartComponent from '../../../components/Analytics/Overview/ChartComponent';

import { overviewData } from './chartData';
import { fetcher } from '../../../utils/functions';

function Overview() {
  const [filterDateRange, setFilterDateRange] = useState('today');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  function handleSelectChange(data) {
    setFilterDateRange(data);
  }

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await fetcher(overviewData);
      setData(response);
      setLoading(false);
    }
    getData();
  }, [filterDateRange]);
  const { receivedChatsData, completedChatsData, avgTime } = data;
  console.log('avgTime', avgTime);
  console.log('receivedChatsData', receivedChatsData);
  console.log('completedChatsData', completedChatsData);
  return (
    <>
      <AnalyticsHeader title="overview" onChange={handleSelectChange} />
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <AverageTime responseType data={avgTime?.response} loading={loading} />
        <AverageTime completeType data={avgTime?.complete} loading={loading} />
      </Box>
      <ChartContainer
        receivedType
        filterDateRange={filterDateRange}
        data={receivedChatsData}
        loading={loading}
      />
      <ChartContainer
        completedType
        filterDateRange={filterDateRange}
        data={completedChatsData}
        loading={loading}
      />
    </>
  );
}

export default Overview;
