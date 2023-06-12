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
      const response = await fetcher(productivityReportData, 500);
      setData(response);
      setLoading(false);
    }
    getData();
  }, [filterDateRange]);

  function handleSelectChange(data) {
    setFilterDateRange(data);
  }

  const { avgTimes, chartDataResponse, chartDataResolution } = data;
  return (
    <>
      <AnalyticsHeader
        title="Productivity report"
        onChange={handleSelectChange}
      />
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <AverageTime
          filterDateRange={filterDateRange}
          responseType
          withArea
          data={avgTimes}
          loading={loading}
        />
        <AverageTime
          filterDateRange={filterDateRange}
          completeType
          withArea
          data={avgTimes}
          loading={loading}
        />
      </Box>
      <ChartContainer
        title="Avg response time"
        data={chartDataResponse}
        areaChart
        color="#29B6F6"
        filterDateRange={filterDateRange}
        loading={loading}
      />
      <ChartContainer
        title="Avg resolution time"
        data={chartDataResolution}
        areaChart
        color="#66BB6A"
        filterDateRange={filterDateRange}
        loading={loading}
      />
    </>
  );
}

export default ProductivityReport;
