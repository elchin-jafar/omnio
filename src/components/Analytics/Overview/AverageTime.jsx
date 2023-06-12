import { Box, Typography, Skeleton } from '@mui/material';

function AverageTime(props) {
  const {
    responseType,
    completeType,
    data,
    loading,
    withArea,
    filterDateRange,
  } = props;

  return (
    <Box
      sx={{
        padding: '32px',
        border: '1px solid #E0E0E0',
        borderRadius: '8px',
        flexBasis: '50%',
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
        {responseType && 'Avg response time'}
        {completeType && 'Avg complete time'}
      </Typography>
      {withArea && data && responseType && (
        <Typography
          gutterBottom
          sx={{
            color: '#574B90',
            fontSize: '34px',
            fontWeight: 500,
            lineHeight: '41px',
          }}
        >
          {loading ? (
            <Skeleton variant="rounded" animation="wave" height={40} />
          ) : (
            data[filterDateRange]?.avgResponse || 0
          )}
        </Typography>
      )}
      {withArea && data && completeType && (
        <Typography
          gutterBottom
          sx={{
            color: '#574B90',
            fontSize: '34px',
            fontWeight: 500,
            lineHeight: '41px',
          }}
        >
          {loading ? (
            <Skeleton variant="rounded" animation="wave" height={40} />
          ) : (
            data[filterDateRange]?.avgComplete || 0
          )}
        </Typography>
      )}
      {!withArea && (
        <Typography
          gutterBottom
          sx={{
            color: '#574B90',
            fontSize: '34px',
            fontWeight: 500,
            lineHeight: '41px',
          }}
        >
          {loading ? (
            <Skeleton variant="rounded" animation="wave" height={40} />
          ) : (
            data || 0
          )}
        </Typography>
      )}
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '17px',
          color: '#424242',
        }}
      >
        {responseType &&
          'Average time it takes your team to respond to the first incoming message in the queue'}
        {completeType &&
          'Average time elapsed from active to completed chats across all conversations'}
      </Typography>
    </Box>
  );
}

export default AverageTime;
