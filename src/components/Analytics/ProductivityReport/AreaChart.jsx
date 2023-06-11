import { Chart } from 'react-google-charts';

function AreaChart({ data, color }) {
  const evaluatedChartData = [['date', 'time'], ...data];
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={evaluatedChartData}
      options={{
        legend: 'none',
        colors: [color],
        vAxis: {
          format: 'string',
          ticks: [
            { v: 100, f: '1m 10s' },
            { v: 200, f: '4m 23s' },
            { v: 300, f: '6m 36s' },
            { v: 400, f: '8m 28s' },
            { v: 500, f: '10m 5s' },
            { v: 600, f: '12m 15s' },
          ],
        },
      }}
    />
  );
}

export default AreaChart;
