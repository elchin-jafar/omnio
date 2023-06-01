import React, { useState } from 'react';
import KeyIcon from '@mui/icons-material/Key';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { CustomIconButton } from '../../components/Profile/StyledComponents';
import { Box, Typography } from '@mui/material';
import UpdatePassword from './UpdatePassword';

const UserSecurity = ({ edit, setEdit }) => {
  // const [edit, setEdit] = useState(false);
  return (
    <div
      style={{
        width: '100%',
        height: 'fit-content',
        background: edit ? '#fafafa' : '',
        padding: '0 14px 20px',
        color: '#9E9E9E',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '32px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            paddingTop: '20px',
            paddingLeft: '14px',
          }}
        >
          <KeyIcon sx={{ rotate: '45deg' }} />
          <div>
            <Typography>Change password</Typography>
            <Typography>
              It's a good idea to use a strong password that you're not using
              elsewhere
            </Typography>
          </div>
        </div>
        {edit ? (
          <CustomIconButton
            aria-label="edit"
            color="primary"
            onClick={() => setEdit(false)}
          >
            <CloseIcon color="primary" />
          </CustomIconButton>
        ) : (
          <CustomIconButton
            aria-label="edit"
            color="primary"
            onClick={() => setEdit(true)}
          >
            <EditIcon color="primary" />
          </CustomIconButton>
        )}
      </Box>
      {edit ? <UpdatePassword edit={edit} setEdit={setEdit} /> : null}
    </div>
  );
};

export default UserSecurity;
