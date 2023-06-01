import React, { useState } from 'react';

import Tenant from '../../components/Tenant/TenantTable';
import AddTenant from '../../components/Tenant/AddTenant';

import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../../app/store';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import { Container, Typography } from '@mui/material';
import { Button } from '@mui/material';

import classNames from 'classnames';

const Tenants = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => {
    return state.tenant.searchTerm;
  });

  const handleInputChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  const classes = classNames({
    position: 'fixed',
    inset: '0',
    opacity: '80',
    background: 'gray',
  });

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          marginBottom: '20px',
          // position: 'fixed',
          // inset: '0',
          // opacity: '80',
        }}
      >
        <Typography variant="h6" component="h2">
          Tenant
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '15px' }}>
          <>
            <SearchIcon sx={{ color: 'action.active', mr: 1 }} />
            <TextField
              value={searchTerm}
              onChange={handleInputChange}
              id="input-with-sx"
              label="Search"
              variant="standard"
            />
          </>
          <>
            <Button
              sx={{ backgroundColor: '#574B90', color: '#fff' }}
              onClick={() => {
                setOpen(true);
              }}
            >
              Add Tenant
            </Button>
          </>
        </Box>
      </Box>

      {open ? <AddTenant open={open} setOpen={setOpen} /> : <Tenant />}
    </Container>
  );
};

export default Tenants;
