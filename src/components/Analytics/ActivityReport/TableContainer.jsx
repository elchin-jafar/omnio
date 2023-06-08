import { Skeleton, Box } from '@mui/material';
import EmptyTable from './EmptyTable';
import ReportTable from './ReportTable';

function TablePlaceHolder() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Box sx={{ display: 'flex', gap: '40px' }}>
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
      </Box>
      <Box sx={{ display: 'flex', gap: '40px' }}>
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
      </Box>
      <Box sx={{ display: 'flex', gap: '40px' }}>
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
      </Box>
      <Box sx={{ display: 'flex', gap: '40px' }}>
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
      </Box>
      <Box sx={{ display: 'flex', gap: '40px' }}>
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
        <Skeleton variant="rounded" height={30} width={220} animation="wave" />
      </Box>
    </Box>
  );
}

function TableContainer(props) {
  const { filterDateRange, data, loading } = props;
  return (
    <Box
      sx={{
        padding: '32px',
        border: '1px solid #E0E0E0',
        borderRadius: '8px',
        marginTop: '20px',
      }}
    >
      {loading && <TablePlaceHolder />}
      {!loading && !data && <EmptyTable />}
      {!loading && data && (
        <ReportTable filterDateRange={filterDateRange} data={data} />
      )}
    </Box>
  );
}

export default TableContainer;
