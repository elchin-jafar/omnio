import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

function ChartComponent({ filterDateRange, data }) {
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
    return [
      [
        'date',
        'Facebook',
        {
          sourceColumn: 0,
          role: 'annotation',
          type: 'number',
          calc: 'stringify',
        },
        'Email',
        {
          sourceColumn: 0,
          role: 'annotation',
          type: 'string',
          calc: 'stringify',
        },
        'Whatsapp',
        {
          sourceColumn: 0,
          role: 'annotation',
          type: 'number',
          calc: 'stringify',
        },
      ],
    ];
  }

  const options = {
    bar: { groupWidth: '30%' },
    isStacked: true,
    colors: ['#7B94CC', '#63B0E3', '#70D77C'],
  };
  return (
    <Chart
      chartType="ColumnChart"
      data={filteredData}
      options={options}
      height="400px"
    />
  );
}

export default ChartComponent;
