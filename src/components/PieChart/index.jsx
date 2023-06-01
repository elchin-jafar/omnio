import React from 'react';
import { Box } from '@mui/material';
import { Chart } from 'react-google-charts';
import PieChartData from './PieChartData';
import TitleElement from './../TitleElement';
import EmptyChart from '../../assets/svgs/emptyChart';
import EmptyChartElement from '../EmptyChartElement';
import Wrapper from '../DashboardWrapper';
import ContentLoader from 'react-content-loader';

const { facebookProps, emailProps, whatsAppProps } = PieChartData;

function ChartInfoBlock({
  loading,
  inQueueCount,
  activeCount,
  completedCount,
  title,
  inQueueColor,
  activeColor,
  completedColor,
}) {
  const allDataEmpty = !inQueueCount && !activeCount && !completedCount;

  if (loading) {
    return (
      <Wrapper item xs={3} width={'32%'} height="310px">
        <TitleElement>{title}</TitleElement>
        <ContentLoader viewBox="0 0 310 310">
          <circle cx="130" cy="130" r="105" />
        </ContentLoader>
      </Wrapper>
    );
  }

  if (allDataEmpty) {
    return (
      <EmptyChartElement
        title={title}
        subTitle={'There is no data to show'}
        wrapperStyles={{
          border: '1px solid #E0E0E0',
        }}
      >
        <EmptyChart />
      </EmptyChartElement>
    );
  }

  return (
    <Wrapper item xs={3} width={'32%'}>
      <TitleElement>{title}</TitleElement>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Chart
          chartType="PieChart"
          width="98%"
          height="250px"
          data={[
            ['Social Media', 'Statistics'],
            ['in queue', inQueueCount],
            ['active', activeCount],
            ['completed', completedCount],
          ]}
          options={{
            pieHole: 0.5,
            colors: [`${completedColor}`, `${activeColor}`, `${inQueueColor}`],
          }}
        />
      </Box>
    </Wrapper>
  );
}
// }

export default function ChartFn({ loading, fb, email, whatsApp }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
      container
    >
      <ChartInfoBlock
        loading={loading}
        inQueueCount={fb?.inQueu}
        activeCount={fb?.inActive}
        completedCount={fb?.inCompleted}
        title={facebookProps.title}
        inQueueColor={facebookProps.inQueueColor}
        activeColor={facebookProps.activeColor}
        completedColor={facebookProps.completedColor}
      />
      <ChartInfoBlock
        loading={loading}
        inQueueCount={email?.inQueu}
        activeCount={email?.inActive}
        completedCount={email?.inCompleted}
        title={emailProps.title}
        inQueueColor={emailProps.inQueueColor}
        activeColor={emailProps.activeColor}
        completedColor={emailProps.completedColor}
      />
      <ChartInfoBlock
        loading={loading}
        inQueueCount={whatsApp?.inQueu}
        activeCount={whatsApp?.inActive}
        completedCount={whatsApp?.inCompleted}
        title={whatsAppProps.title}
        inQueueColor={whatsAppProps.inQueueColor}
        activeColor={whatsAppProps.activeColor}
        completedColor={whatsAppProps.completedColor}
      />
    </Box>
  );
}
