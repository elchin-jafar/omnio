import React from 'react';
import { Grid, List, ListItem, IconButton, Box } from '@mui/material';
import Submenu from './Submenu';

import { Link } from 'react-router-dom';

function MenuItem({ children, link, title, icon }) {
  return (
    <ListItem>
      <IconButton
        sx={{
          color: 'white',
          margin: 'auto',
          transition: '.2s ease',
          borderRadius: '4px',
          ':hover': {
            backgroundColor: 'primary.lighten5',
            color: 'primary.main',
          },
        }}
      >
        {icon}
      </IconButton>
    </ListItem>
  );
}

export default function BottomSideBar({ navigationList, theme }) {
  // Navigation element lists:
  return (
    <Grid
      sx={{
        height: 'calc((100vh * 2) / 3)', //????????
        '& .MuiList-padding': {
          padding: '0',
        },
      }}
    >
      <List>
        {navigationList.map((item) => (
          <Box
            key={item.title}
            sx={{
              ':hover > div': {
                display: item.children.length === 0 ? 'none' : 'block',
              },
            }}>
            <Link to={item.link} >
              <MenuItem {...item} />
            </Link>
            {item.children && (
              <Submenu list={item.children} title={item.title} />
            )}
          </Box>
        ))}
      </List>
    </Grid>
  );
}