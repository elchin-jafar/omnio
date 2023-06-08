import { Box, Skeleton } from '@mui/material';

function ChartSkeleton() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Skeleton variant="rounded" height={40} animation="wave" />
      <Skeleton variant="rounded" height={40} animation="wave" />
      <Skeleton variant="rounded" height={40} animation="wave" />
      <Skeleton variant="rounded" height={40} animation="wave" />
      <Skeleton variant="rounded" height={40} animation="wave" />
    </Box>
  );
}

export default ChartSkeleton;
