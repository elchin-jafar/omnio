import React, { useState } from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';

import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useEffect } from 'react';

const UpdatePassword = ({ edit, setEdit }) => {
  const [newPassword, setNewPassword] = useState('');
  const [reEnteredNewpassword, setReEnteredNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showReEnteredPassword, setShowReEnteredPassword] = useState(false);

  const [password, setPassword] = useState(() => {
    const saved = localStorage.getItem('password');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });

  useEffect(() => {
    localStorage.setItem('password', JSON.stringify(password));
  }, [password]);

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };
  const handlereEnteredNewpasswordChange = (event) => {
    setReEnteredNewPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevVal) => !prevVal);
  };
  const handleClickShowNewPassword = () => {
    setShowNewPassword((prevVal) => !prevVal);
  };
  const handleClickShowReEnteredPassword = () => {
    setShowReEnteredPassword((prevVal) => !prevVal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newPassword.length || !reEnteredNewpassword.length) {
      alert('Please fill all fields');
      return;
    }
    if (newPassword.length < 6 || reEnteredNewpassword.length < 6) {
      alert('Password is too short');
      return;
    }
    if (newPassword !== reEnteredNewpassword) {
      alert('Check your Password');
      return;
    }
    setPassword(newPassword);
    setNewPassword('');
    setReEnteredNewPassword('');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '34px',
        }}
      >
        <FormControl>
          <TextField
            sx={{ width: '310px', marginTop: '20px' }}
            id="outlined-required"
            label="Current password"
            type={showPassword ? 'text' : 'password'}
            onChange={handleSubmit}
            value={password}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>

        <div>
          <FormControl sx={{ width: '310px' }} variant="outlined">
            <InputLabel htmlFor="new-password">New password</InputLabel>
            <OutlinedInput
              id="new-password"
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={handleNewPasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowNewPassword}
                    edge="end"
                  >
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="New password"
            />
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ width: '310px' }} variant="outlined">
            <InputLabel htmlFor="retype-new-password">
              Re-type New password
            </InputLabel>
            <OutlinedInput
              id="retype-new-password"
              type={showReEnteredPassword ? 'text' : 'password'}
              value={reEnteredNewpassword}
              onChange={handlereEnteredNewpasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowReEnteredPassword}
                    edge="end"
                  >
                    {showReEnteredPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Re-type New password"
            />
          </FormControl>
        </div>
        <div style={{ display: 'flex', gap: '20px', paddingBottom: '20px' }}>
          <Button
            disableElevation
            color="success"
            variant="contained"
            id="saveEdit"
            onClick={handleSubmit}
            type="submit"
          >
            Save
          </Button>
          <Button
            disableElevation
            color="error"
            variant="contained"
            onClick={() => {
              setEdit(false);
            }}
          >
            Cancel
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default UpdatePassword;
