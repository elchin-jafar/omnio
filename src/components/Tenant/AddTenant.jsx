import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addTenant } from '../../app/store';

const AddTenant = ({ open, setOpen }) => {
  const [nameValue, setNameValue] = useState('');
  const [licenseValue, setLicenseValue] = useState('');
  const [testingValue, setTestingValue] = useState('');
  const [loginValue, setLoginValue] = useState('');

  const dispatch = useDispatch();

  const tenantArray = useSelector((state) => {
    return state.tenant.tenants;
  });

  const handleAddTenant = () => {
    if (nameValue && licenseValue && testingValue && loginValue) {
      dispatch(
        addTenant({
          name: nameValue,
          license: licenseValue,
          testing: testingValue,
          login: loginValue,
        })
      );
      setOpen(false);
    }
    return;
  };

  return (
    <Box
      component="form"
      sx={{
        border: '1px solid #616161',
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        padding: '20px',
        height: '400px',
        borderRadius: '8px',
        position: 'fixed',
        inset: '40',
        background: 'white',
      }}
      noValidate
      autoComplete="off"
    >
      <>
        <Typography variant="h6" component="h2">
          Add,Edit Tenant
        </Typography>
      </>

      <div
        style={{
          display: 'grid',
          gap: '30px 40px',
          gridTemplateColumns: 'auto auto',
        }}
      >
        <TextField
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          id="name"
          label="Name"
          variant="outlined"
        />
        <TextField
          value={licenseValue}
          onChange={(e) => setLicenseValue(e.target.value)}
          id="license"
          label="License"
          variant="outlined"
        />
        <TextField
          value={testingValue}
          onChange={(e) => setTestingValue(e.target.value)}
          id="testing"
          label="Testing"
          variant="outlined"
        />
        <TextField
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
          id="login"
          label="Last Login Time"
          variant="outlined"
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
        <Button
          sx={{ background: '#EEEEEE', color: '#000' }}
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
        <Button variant="contained" color="success" onClick={handleAddTenant}>
          Add
        </Button>
      </div>
    </Box>
  );
};

export default AddTenant;
