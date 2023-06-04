import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus } from '../../app/store';
import { logout } from '../../app/store';
import {
  StyledBadge,
  StyledMenuItem,
  OnlineStatusMenu,
  AvatarWrapper,
} from './StyledComponents';
import { useNavigate } from 'react-router-dom';

export default function UserAvatar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [statusAnchorEl, setStatusAnchorEl] = useState(null);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
    setStatusAnchorEl(null);
  };

  const handleAvatarClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleAvatarClose();
    localStorage.setItem('auth', false);
    navigate('/login');
  };

  const handleStatusClick = (event) => {
    setStatusAnchorEl(event.currentTarget);
    setAnchorEl(null);
  };

  const handleStatusClose = () => {
    setStatusAnchorEl(null);
  };

  const handleStatusChange = (newStatus) => {
    dispatch(changeStatus(newStatus));
    handleStatusClose();
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <AvatarWrapper>
        <Avatar
          src={user.avatar}
          alt={`${user.firstName} ${user.lastName}`}
          onClick={handleAvatarClick}
          sx={{ width: '3.25rem', height: '3.25rem' }}
        />
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
          onClick={handleStatusClick}
          status={user.onlineStatus}
        />
      </AvatarWrapper>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleAvatarClose}
        PaperProps={{ sx: { backgroundColor: 'primary.main' } }}
        sx={{
          top: '-2rem',
          left: '5rem',
          '& .MuiMenuItem-root': {
            fontSize: '1rem',
          },
        }}
      >
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <StyledMenuItem onClick={handleAvatarClose}>Profile</StyledMenuItem>
        </Link>
        <StyledMenuItem onClick={handleLogout}>Log Out</StyledMenuItem>
      </Menu>

      <OnlineStatusMenu
        anchorEl={statusAnchorEl}
        open={Boolean(statusAnchorEl)}
        onClose={handleStatusClose}
        PaperProps={{ sx: { backgroundColor: 'primary.main' } }}
      >
        <StyledMenuItem
          onClick={() => handleStatusChange('online')}
          className="online"
        >
          <span className="dot" />
          Online
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => handleStatusChange('break')}
          className="break"
        >
          <span className="dot" />
          On a break
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => handleStatusChange('offline')}
          className="offline"
        >
          <span className="dot" />
          Offline
        </StyledMenuItem>
      </OnlineStatusMenu>
    </Box>
  );
}
