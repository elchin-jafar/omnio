import { Box, Typography } from '@mui/material';
import EmptyStatistics from '../../../assets/EmptyStatistics.svg';

function ChartContainer(props) {
  const { receivedType, completedType } = props;
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
        <Typography sx={{ marginBottom: '39px' }}>
          {receivedType && 'Received chats'}
          {completedType && 'Completed chats'}
        </Typography>
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
      </Box>
    </>
  );
}

export default ChartContainer;
