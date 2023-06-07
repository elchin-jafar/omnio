import { useEffect, useState } from 'react';
import ReportTable from '../../../components/Analytics/ActivityReport/ReportTable';
import AnalyticsHeader from '../../../components/Analytics/AnalyticsHeader';
import ChartContainer from '../../../components/Analytics/ChartContainer';

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
      <ReportTable filterDateRange={filterDateRange} data={data?.tableData} />
      <ChartContainer
        title="Completed chats"
        barChart
        filterDateRange={filterDateRange}
        data={data?.barChartData}
      />
    </>
  );
}

export default ActivityReport;
