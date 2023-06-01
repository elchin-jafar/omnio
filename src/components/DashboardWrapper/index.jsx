import React from 'react';
import { Box } from '@mui/system';

export default function Wrapper({ children, width, height, wrapperStyles }) {
  return (
    <Box
      sx={{
        width: width,
        height: height || 'auto',
        border: '1px solid #E0E0E0',
        borderRadius: 8,
        paddingTop: '1.5rem',
        paddingLeft: '2rem',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '1.8rem',
        ...wrapperStyles,
      }}
    >
      {children}
    </Box>
  );
}
