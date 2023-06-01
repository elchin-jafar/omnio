import React from 'react';
import { Chart } from 'react-google-charts';
import TitleElement from '../TitleElement';
import EmptyBarChart from '../../assets/svgs/emptyBarChart';
import EmptyChartElement from '../EmptyChartElement';
import Wrapper from '../DashboardWrapper';
import ContentLoader from 'react-content-loader';

const options = {
  legend: { position: 'none' },
};

function ChartBar({ loading, fb, email, whatsApp }) {
  const allDataEmpty = !fb?.inActive && !email?.inActive && !whatsApp?.inActive;

  if (loading) {
    return (
      <ContentLoader
        viewBox="0 0 400 160"
        height={160}
        width={400}
        backgroundColor="transparent"
      >
        <circle cx="150" cy="86" r="8" />
        <circle cx="194" cy="86" r="8" />
        <circle cx="238" cy="86" r="8" />
      </ContentLoader>
    );
  }

  if (allDataEmpty) {
    return (
      <EmptyChartElement
        subTitle={'There is no data to show'}
        wrapperStyles={{
          margin: 'auto',
        }}
      >
        <EmptyBarChart />
      </EmptyChartElement>
    );
  }
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="230px"
      options={options}
      data={[
        ['Social Media', 'Total messages', { role: 'style' }],
        ['Facebook', fb?.inActive, '#7B94CC'],
        ['Email', email?.inActive, '#63B0E3'],
        ['Whatsapp', whatsApp?.inActive, '#70D77C'],
      ]}
    />
  );
}

export default function Mbox({ loading, fb, email, whatsApp }) {
  return (
    <Wrapper width={'70%'}>
      <TitleElement>Mbox</TitleElement>
      <ChartBar loading={loading} fb={fb} email={email} whatsApp={whatsApp} />
    </Wrapper>
  );
}
