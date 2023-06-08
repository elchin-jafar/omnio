import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import AverageTime from '../../../components/Analytics/Overview/AverageTime';
import AnalyticsHeader from '../../../components/Analytics/AnalyticsHeader';
import ChartContainer from '../../../components/Analytics/ChartContainer';

import { overviewData } from './chartData';
import { fetcher } from '../../../utils/functions';

function Overview() {
  const [filterDateRange, setFilterDateRange] = useState('today');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await fetcher(overviewData);
      setData(response);
      setLoading(false);
    }
    getData();
  }, [filterDateRange]);

  function handleSelectChange(data) {
    setFilterDateRange(data);
  }

  const { receivedChatsData, completedChatsData, avgTime } = data;

  return (
    <>
      <AnalyticsHeader title="overview" onChange={handleSelectChange} />
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <AverageTime responseType data={avgTime?.response} loading={loading} />
        <AverageTime completeType data={avgTime?.complete} loading={loading} />
      </Box>
      <ChartContainer
        title="Received chats"
        columnChart
        stacked
        filterDateRange={filterDateRange}
        data={receivedChatsData}
        loading={loading}
      />
      <ChartContainer
        title="Completed chats"
        columnChart
        stacked
        filterDateRange={filterDateRange}
        data={completedChatsData}
        loading={loading}
      />
    </>
  );
}

export default Overview;
