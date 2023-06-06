import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
// import { receivedChatsData } from '../../../pages/Analytics/Overview/chartData';
import { Skeleton } from '@mui/material';

function ReceivedChartComponent({ filterDateRange, data }) {
  const [filteredData, setFilteredData] = useState(defaultData());
  // console.log('filterDateRange', filterDateRange);
  console.log('data cyka', data);
  console.log('cyka state', filteredData);

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
          type: 'string',
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
          type: 'string',
          calc: 'stringify',
        },
      ],
    ];
  }
  //   const data = [
  //     [
  //       'date',
  //       'Facebook',
  //       {
  //         sourceColumn: 0,
  //         role: 'annotation',
  //         type: 'number',
  //         calc: 'stringify',
  //       },
  //       'Email',
  //       {
  //         sourceColumn: 0,
  //         role: 'annotation',
  //         type: 'string',
  //         calc: 'stringify',
  //         color: '#fff',
  //       },
  //       'Whatsapp',
  //       {
  //         sourceColumn: 0,
  //         role: 'annotation',
  //         type: 'number',
  //         calc: 'stringify',
  //       },
  //     ],
  //     ['9 May', 40, 40, 20, 20, 60, 60],
  //     ['10 May', 40, 40, 20, 20, 60, 60],
  //     ['11 May', 40, 40, 20, 20, 60, 60],
  //     ['12 May', 40, 40, 20, 20, 60, 60],
  //     ['13 May', 40, 40, 20, 20, 60, 60],
  //     ['14 May', 40, 40, 20, 20, 60, 60],
  //     ['15 May', 40, 40, 20, 20, 60, 60],
  //   ];
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

export default ReceivedChartComponent;