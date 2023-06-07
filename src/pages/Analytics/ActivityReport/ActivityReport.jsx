import ReportTable from '../../../components/Analytics/ActivityReport/ReportTable';
import AnalyticsHeader from '../../../components/Analytics/AnalyticsHeader';
import ChartContainer from '../../../components/Analytics/ChartContainer';

function ActivityReport() {
  const data = [
    ['Dolores', 60, 60, 50, 50, 120, 120],
    ['Bernardl', 40, 40, 20, 20, 60, 60],
    ['Maeve', 40, 40, 20, 20, 60, 60],
    ['Teddy', 40, 40, 20, 20, 60, 60],
    ['Hector', 40, 40, 20, 20, 60, 60],
    ['Peter', 40, 40, 20, 20, 60, 60],
    ['Lawrence', 40, 40, 20, 20, 60, 60],
  ];
  return (
    <>
      <AnalyticsHeader title="Activity report" onChange={() => null} />
      <ReportTable />
      <ChartContainer
        title="Completed chats"
        barChart
        filterDateRange="today"
        data={data}
      />
    </>
  );
}

export default ActivityReport;
