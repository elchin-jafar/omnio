import { useEffect, useState } from 'react';
import AnalyticsHeader from '../../../components/Analytics/AnalyticsHeader';
import ChartContainer from '../../../components/Analytics/ChartContainer';
import TableContainer from '../../../components/Analytics/ActivityReport/TableContainer';

import { reportData } from './activity-report';
import { fetcher } from '../../../utils/functions';

function ActivityReport() {
  const [filterDateRange, setFilterDateRange] = useState('today');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  function handleSelectChange(data) {
    setFilterDateRange(data);
  }

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await fetcher(reportData);
      setData(response);
      setLoading(false);
    }
    getData();
  }, [filterDateRange]);

  return (
    <>
      <AnalyticsHeader title="Activity report" onChange={handleSelectChange} />
      <TableContainer
        filterDateRange={filterDateRange}
        data={data?.tableData}
        loading={loading}
      />
      <ChartContainer
        title="Completed chats"
        barChart
        filterDateRange={filterDateRange}
        data={data?.barChartData}
        loading={loading}
      />
    </>
  );
}

export default ActivityReport;
