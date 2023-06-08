import UnStackedColumnChart from './UnStackedColumnChart';
import { Box, Typography } from '@mui/material';
import ChartSkeleton from '../ChartSkeleton';

function UnStackedColumnChartContainer({
  title,
  filterDateRange,
  data,
  loading,
}) {
  return (
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
      {loading && <ChartSkeleton />}
      {!loading && data && (
        <UnStackedColumnChart filterDateRange={filterDateRange} data={data} />
      )}
    </Box>
  );
}

export default UnStackedColumnChartContainer;
