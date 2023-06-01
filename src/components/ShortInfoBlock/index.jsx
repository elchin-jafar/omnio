import { Box, Grid } from '@mui/material';
import ContentLoader from 'react-content-loader';
import shortInfoCardData from './ShortInfoBlockData';

const { readData, queueData, activeData, completedData } = shortInfoCardData;

const ShortInfoCard = ({ loading, count, icon: Icon, title }) => {
  if (loading) {
    return (
      <Box
        sx={{
          flexGrow: 1,
          height: '15vw',
          overflow: 'hidden',
          '& > svg': {
            width: '100%',
            height: '100px',
          },
        }}
      >
        <ContentLoader
          width={450}
          height={400}
          viewBox="0 0 450 400"
          backgroundColor="#f0f0f0"
          foregroundColor="#dedede"
        >
          <rect x="0" y="0" rx="0" ry="0" width="450" height="400" />{' '}
        </ContentLoader>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      sx={{
        height: 125,
        borderRadius: 8,
        background: 'linear-gradient(277.33deg, #4E4487 0%, #978CBA 100%)',
        padding: '2rem',
        color: 'white',
        flexGrow: 1,
        fontSize: 20,
      }}
    >
      <Grid
        display="flex"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {Icon && <Icon fontSize="large" />}
      </Grid>
      <Grid
        sx={{
          marginLeft: '2rem',
        }}
      >
        <Grid
          sx={{
            fontSize: 34,
          }}
        >
          {count}
        </Grid>
        <Grid>{title}</Grid>
      </Grid>
    </Box>
  );
};

export default function ShortInfoBlock({
  loading,
  read,
  queue,
  active,
  complited,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '15px',
      }}
    >
      <ShortInfoCard
        loading={loading}
        count={read}
        title={readData.title}
        icon={readData.icon}
      />
      <ShortInfoCard
        loading={loading}
        count={queue}
        title={queueData.title}
        icon={queueData.icon}
      />
      <ShortInfoCard
        loading={loading}
        count={active}
        title={activeData.title}
        icon={activeData.icon}
      />
      <ShortInfoCard
        loading={loading}
        count={complited}
        title={completedData.title}
        icon={completedData.icon}
      />
    </Box>
  );
}
