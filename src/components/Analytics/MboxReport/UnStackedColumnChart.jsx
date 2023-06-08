import { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

function UnStackedColumnChart({ filterDateRange, data }) {
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
  console.log('filteredData', filteredData);

  function defaultData() {
    return [['date', 'Received', 'Completed']];
  }

  const options = {
    bar: { groupWidth: '30%' },
    colors: ['#29B6F6', '#66BB6A'],
    legend: { position: 'bottom' },
  };
  return (
    <Chart
      chartType="ColumnChart"
      data={filteredData}
      options={options}
      height={500}
      width="100%"
    />
  );
}

export default UnStackedColumnChart;
