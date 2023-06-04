import {
  Box,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExcelIcon from '../../assets/ExcelBtn.svg';

function AnalyticsHeader({ title }) {
  const dateRange = [
    {
      value: 'today',
      label: 'Today',
    },
    {
      value: 'past-week',
      label: 'Past week',
    },
    {
      value: 'past-4-weeks',
      label: 'Past 4 weeks',
    },
    {
      value: 'all',
      label: 'All',
    },
  ];
  function handleSelectChange(e) {
    console.log(e.target.value);
  }
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px',
        }}
      >
        <Typography sx={{ fontSize: '24px', textTransform: 'capitalize' }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            select
            onChange={handleSelectChange}
            defaultValue="today"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DateRangeIcon />
                </InputAdornment>
              ),
            }}
            sx={{ minWidth: '12rem' }}
            size="small"
          >
            {dateRange.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Box
            sx={{
              backgroundColor: '#574B90',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '12px',
            }}
          >
            <img src={ExcelIcon} alt="excel icon" />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AnalyticsHeader;
