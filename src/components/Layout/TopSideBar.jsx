import React from 'react';
import { Grid, ListItem, IconButton } from '@mui/material';
import omnioLogo from '../../assets/omnioLogo.svg';
import UserAvatar from './UserAvatar';

export default function TopSideBar({ navigationList }) {
  // There is two part: Chat and Profil components
  return (
    <Grid
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        borderBottom: '1px solid',
        borderBottomColor: 'primary.darken3',
      }}
    >
      <ListItem sx={{ padding: 0, margin: '2rem 0 1.5rem 0' }}>
        <IconButton
          sx={{
            color: 'white',
            margin: 'auto',
            ':hover': {
              backgroundColor: 'primary.main',
            },
            '& img': {
              width: '52px',
            }
          }}
        >
          <img src={omnioLogo} alt="omnio logo" />
        </IconButton>
      </ListItem>

      <ListItem sx={{ marginBottom: '1rem' }}>
        <UserAvatar />
      </ListItem>
    </Grid>
  );
}
