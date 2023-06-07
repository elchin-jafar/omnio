import { Box, Skeleton, Typography } from '@mui/material';
import EmptyStatistics from '../../assets/EmptyStatistics.svg';
import ColumnChart from './Overview/ColumnChart';
import BarChart from './ActivityReport/BarChart';

function ChartContainer(props) {
  const { title, columnChart, barChart, filterDateRange, loading, data } =
    props;
  return (
    <>
      <Box
        sx={{
          padding: '32px',
          border: '1px solid #E0E0E0',
          borderRadius: '8px',
          marginTop: '20px',
        }}
      >
        <Typography
          sx={{ marginBottom: '39px', fontSize: '18px', fontWeight: '500' }}
        >
          {title}
        </Typography>
        {loading && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Skeleton variant="rounded" height={40} animation="wave" />
            <Skeleton variant="rounded" height={40} animation="wave" />
            <Skeleton variant="rounded" height={40} animation="wave" />
            <Skeleton variant="rounded" height={40} animation="wave" />
            <Skeleton variant="rounded" height={40} animation="wave" />
          </Box>
        )}
        {!loading && !data && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: '80px',
                height: '80px',
                backgroundColor: '#EEE3F4',
                border: '2px solid hsl(270, 30%, 90%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
              }}
            >
              <img src={EmptyStatistics} alt="statistics" />
            </Box>
            <Typography
              sx={{
                color: '#574B90',
                fontSize: '14px',
                fontWeight: 400,
                marginTop: '12px',
              }}
            >
              There is no data to show
            </Typography>
          </Box>
        )}
        {!loading && data && columnChart && (
          <ColumnChart filterDateRange={filterDateRange} data={data} />
        )}
        {!loading && data && barChart && (
          <BarChart filterDateRange={filterDateRange} data={data} />
        )}
      </Box>
    </>
  );
}

export default ChartContainer;
