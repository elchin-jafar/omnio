import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

function BarChart({ filterDateRange, data }) {
  const [filteredData, setFilteredData] = useState(defaultData());

  useEffect(() => {
    if (data) {
      if (filterDateRange === 'today') {
        setFilteredData([...defaultData(), ...data.today]);
      }
      if (filterDateRange === 'past-week') {
        setFilteredData([...defaultData(), ...data['past-week']]);
      }
      if (filterDateRange === 'past-4-weeks') {
        setFilteredData([...defaultData(), ...data['past-4-weeks']]);
      }
      if (filterDateRange === 'all') {
        setFilteredData([...defaultData(), ...data.all]);
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
    isStacked: true,
    colors: ['#7B94CC', '#63B0E3', '#70D77C'],
    legend: { position: 'bottom' },
  };

  return (
    <Chart
      chartType="BarChart"
      data={filteredData}
      width="100%"
      height="600px"
      options={options}
    />
  );
}

export default BarChart;
