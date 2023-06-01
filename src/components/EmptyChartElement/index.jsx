import React from 'react';
import { Box, Typography } from '@mui/material';
import TitleElement from '../TitleElement';

export default function EmptyChartElement({
  children,
  title,
  subTitle,
  wrapperStyles = {},
}) {
  return (
    <Box
      item
      xs={3}
      sx={{
        borderRadius: 8,
        height: 312,
        width: '32%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '1.8rem',
        paddingTop: '1.5rem',
        paddingLeft: '2rem',
        ...wrapperStyles,
      }}
    >
      {title ? <TitleElement>{title}</TitleElement> : null}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          flexDirection: 'column',
        }}
      >
        {children}

        <Typography
          variant="span"
          component="span"
          sx={{
            color: '#574B90',
          }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
}
