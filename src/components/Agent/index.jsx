import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import Wrapper from '../DashboardWrapper';
import TitleElement from '../TitleElement';
import EmptyChartElement from '../EmptyChartElement';
import EmptyAgent from '../../assets/svgs/emptyAgent';
import ContentLoader from 'react-content-loader';

export default function Agent({ loading, agents }) {
  if (loading) {
    return (
      <Wrapper
        width={'28%'}
        wrapperStyles={{
          maxHeight: '365px',
          overflow: 'hidden',
          overflowY: 'auto',
        }}
      >
        <TitleElement>Agent</TitleElement>
        <ContentLoader primaryColor="#d9d9d9" secondaryColor="#ecebeb">
          <rect x="103" y="12" rx="3" ry="3" width="123" height="7" />
          <rect x="102" y="152" rx="3" ry="3" width="171" height="6" />
          <circle cx="44" cy="42" r="38" />
          <circle cx="44" cy="147" r="38" />
          <circle cx="44" cy="251" r="38" />
          <rect x="105" y="117" rx="3" ry="3" width="123" height="7" />
          <rect x="104" y="222" rx="3" ry="3" width="123" height="7" />
          <rect x="105" y="48" rx="3" ry="3" width="171" height="6" />
          <rect x="104" y="257" rx="3" ry="3" width="171" height="6" />
        </ContentLoader>
      </Wrapper>
    );
  }
  const agentContent = agents?.map((agent) => {
    return (
      <Box
        sx={{
          display: 'flex',
          marginTop: '1rem',
        }}
      >
        <Box>
          <Avatar alt={agent.name} src="" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '1rem',
          }}
        >
          <Typography
            variant="span"
            component="span"
            sx={{
              color: '#424242',
              fontSize: '16px',
            }}
          >
            {agent.name}
          </Typography>
          <Typography
            variant="span"
            component="span"
            sx={{ color: '#9E9E9E', fontSize: '14px' }}
          >
            {agent.chats} chats
          </Typography>
        </Box>
      </Box>
    );
  });

  const allDataEmpty = !agents?.length;

  if (allDataEmpty) {
    return (
      <EmptyChartElement
        subTitle={'There is no agents in the system'}
        title={'Agents'}
        wrapperStyles={{
          border: '1px solid #E0E0E0',
          marginLeft: '1.5rem',
        }}
      >
        <EmptyAgent />
      </EmptyChartElement>
    );
  }

  return (
    <Wrapper
      width={'28%'}
      wrapperStyles={{
        maxHeight: '365px',
        overflow: 'hidden',
        overflowY: 'auto',
      }}
    >
      <TitleElement>Agent</TitleElement>
      <Box>{agentContent}</Box>
    </Wrapper>
  );
}
