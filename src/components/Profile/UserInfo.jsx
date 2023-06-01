import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { CustomIconButton } from '../../components/Profile/StyledComponents';

import { useSelector } from 'react-redux'

export default function UserInfo({ setEditorOpen }) {
  const { user } = useSelector(state => state.user)

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '1.5rem',
        }}
      >
        <Typography variant="h6" component="h2">
          General account settings
        </Typography>
        <CustomIconButton
          aria-label="edit"
          color="primary"
          onClick={() => setEditorOpen(true)}
        >
          <EditIcon color="primary" />
        </CustomIconButton>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '2rem' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Avatar
            src={user.avatar}
            alt={`${user.firstName} ${user.lastName}`}
            sx={{
              width: 100,
              height: 100,
              marginBottom: '0.5rem',
            }}
          />
          <Typography variant="body1">
            {user.firstName + ' ' + user.lastName}
          </Typography>
          <Typography variant="body2" color="primary">
            {user.status}
          </Typography>
        </Box>

        <div>
          <Box
            sx={{
              display: 'grid',
              gap: 1,
              gridTemplateColumns: '1fr 2fr',
            }}
          >
            <Typography variant="body2" component="span" color="#9E9E9E">
              Username
            </Typography>
            <Typography variant="body2">{user.username}</Typography>
            <Typography variant="body2" component="span" color="#9E9E9E">
              Email
            </Typography>
            <Typography variant="body2">{user.email}</Typography>
            <Typography variant="body2" component="span" color="#9E9E9E">
              Job title
            </Typography>
            <Typography variant="body2">{user.job}</Typography>
            <Typography variant="body2" component="span" color="#9E9E9E">
              Tenant name
            </Typography>
            <Typography variant="body2">{user.tenant}</Typography>
          </Box>
        </div>
      </Box>
    </div>
  );
}
