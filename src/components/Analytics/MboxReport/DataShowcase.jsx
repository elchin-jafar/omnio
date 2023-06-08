import { Box, Skeleton, Typography } from '@mui/material';
function DataShowcase({ title, value = 0, loading }) {
  return (
    <Box
      sx={{
        padding: '32px',
        border: '1px solid #E0E0E0',
        borderRadius: '8px',
        marginTop: '20px',
        flexBasis: '32.2%',
        minWidth: '160px',
      }}
    >
      <Typography
        gutterBottom
        sx={{
          fontSize: '20px',
          fontWeight: 500,
          lineHeight: '24px',
          color: '#424242',
        }}
      >
        {title}
      </Typography>
      {loading ? (
        <Skeleton variant="rounded" animation="wave" height={40} />
      ) : (
        <Typography
          gutterBottom
          sx={{
            color: '#574B90',
            fontSize: '34px',
            fontWeight: 500,
            lineHeight: '41px',
          }}
        >
          {value}
        </Typography>
      )}
    </Box>
  );
}

export default DataShowcase;
