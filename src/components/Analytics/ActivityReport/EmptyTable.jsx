import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react';

function EmptyTable() {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name Surname</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Chats</TableCell>
            <TableCell align="right">Completed chats</TableCell>
            <TableCell align="right">Long-term chats</TableCell>
            <TableCell align="right">Avg response time</TableCell>
            <TableCell align="right">Avg complete time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="right" sx={{ opacity: '38%' }}>
              There is no data to show
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EmptyTable;
