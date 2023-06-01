import React from 'react';
import { Typography } from '@mui/material';

export default function TitleElement({ children }) {
  return (
    <Typography
      variant="h6"
      component="h6"
      sx={{
        fontSize: 18,
        color: '#616161',
      }}
    >
      {children}
    </Typography>
  );
}
