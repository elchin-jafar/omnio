import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { fetcher } from '../../../utils/functions';
import { mboxRepData } from './mbox-report-data';
import AnalyticsHeader from '../../../components/Analytics/AnalyticsHeader';
import DataShowcase from '../../../components/Analytics/MboxReport/DataShowcase';
import UnStackedColumnChartContainer from '../../../components/Analytics/MboxReport/UnStackedColumnChartContainer';

function MboxReport() {
  const [filterDateRange, setFilterDateRange] = useState('today');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await fetcher(mboxRepData, 500);
      setData(response);
      setLoading(false);
    }
    getData();
  }, [filterDateRange]);

  function handleSelectChange(data) {
    setFilterDateRange(data);
  }

  const { showcases, chartData } = data;
  console.log(chartData);

  return (
    <>
      <AnalyticsHeader title="Mbox report" onChange={handleSelectChange} />
      <Box sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {showcases?.today.map((showcase) => (
          <DataShowcase
            title={showcase.name}
            value={showcase.value}
            loading={loading}
          />
        ))}
      </Box>
      <UnStackedColumnChartContainer
        title="Chats"
        filterDateRange={filterDateRange}
        data={chartData}
        loading={loading}
      />
    </>
  );
}

export default MboxReport;
