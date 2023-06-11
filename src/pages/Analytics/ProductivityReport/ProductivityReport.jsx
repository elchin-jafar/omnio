import { useState, useEffect } from 'react';
import AnalyticsHeader from '../../../components/Analytics/AnalyticsHeader';
import ChartContainer from '../../../components/Analytics/ChartContainer';
import AverageTime from '../../../components/Analytics/Overview/AverageTime';
import { Box } from '@mui/material';
import { productivityReportData } from '../../../pages/Analytics/ProductivityReport/productivity-report-data';
import { fetcher } from '../../../utils/functions';

function ProductivityReport() {
  const [filterDateRange, setFilterDateRange] = useState('today');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await fetcher(productivityReportData);
      setData(response);
      setLoading(false);
    }
    getData();
  }, [filterDateRange]);

  function handleSelectChange(data) {
    setFilterDateRange(data);
  }

  const { avgTimes, chartData } = data;
  return (
    <>
      <AnalyticsHeader
        title="Productivity report"
        onChange={handleSelectChange}
      />
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <AverageTime responseType data="25m 49s" loading={false} />
        <AverageTime completeType data="3h 41m 12s" loading={false} />
      </Box>
      <ChartContainer
        title="Avg response time"
        data={chartData}
        areaChart
        color="#29B6F6"
        loading={loading}
      />
      <ChartContainer
        title="Avg resolution time"
        data={chartData}
        areaChart
        color="#66BB6A"
        loading={loading}
      />
    </>
  );
}

export default ProductivityReport;
