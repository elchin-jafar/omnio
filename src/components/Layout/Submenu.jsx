import { Box, Typography, ListItem, List } from '@mui/material';
import { Link } from 'react-router-dom';

function MenuItem({ title, link }) {
  return (
    <ListItem
      disableGutters
      sx={{
        ':hover ': {
          backgroundColor: 'primary.lighten5',
          color: 'primary.main',
          cursor: 'pointer',
        },
        transition: '.2s ease',
        padding: '12px 8px',
        borderRadius: '4px',
      }}
    >
      {title}
    </ListItem>
  );
}
export default function Submenu({ list, title }) {
  // Navigation element list hover olan zaman açılan submenu
  // Nested listi olmayan navigation elementleri ucun bu submenu işə düşmür
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 84,
        zIndex: 10,
        height: '100vh',
        backgroundColor: 'primary.main',
        border: '1px solid',
        borderColor: 'primary.darken2',
        width: '212px',
        display: 'none',
        padding: '20px 14px',
        color: 'white',
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 500 }}>
        {title}
      </Typography>
      <List sx={{
        '& a': {
          textDecoration: 'none',
          color: 'inherit'
        },
      }}>
        {list?.map((listItem) => (
          <Link key={listItem.title} to={listItem.link} >
            <MenuItem {...listItem} />
          </Link>
        ))}
      </List>
    </Box >
  );
}
