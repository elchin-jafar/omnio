import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

function AreaChart({ filterDateRange, data, color }) {
  const [filteredData, setFilteredData] = useState(defaultData());

  useEffect(() => {
    if (data) {
      if (filterDateRange === 'today') {
        setFilteredData([
          ...defaultData(),
          ...data.slice(data.length - 7 - 7 * 0, data.length - 7 * 0),
        ]);
      }
      if (filterDateRange === 'past-week') {
        setFilteredData([
          ...defaultData(),
          ...data.slice(data.length - 7 - 7 * 1, data.length - 7 * 1),
        ]);
      }
      if (filterDateRange === 'past-4-weeks') {
        setFilteredData([...defaultData(), ...data.slice(0, data.length)]);
      }
      if (filterDateRange === 'all') {
        setFilteredData([...defaultData(), ...data]);
      }
    }
  }, [filterDateRange]);

  function defaultData() {
    return [['date', 'time']];
  }

  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={filteredData}
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
