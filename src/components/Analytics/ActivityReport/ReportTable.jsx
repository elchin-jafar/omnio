import { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';

function ReportTable({ filterDateRange, data }) {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    if (data) {
      if (filterDateRange === 'today') {
        setRows(data?.today);
      }
      if (filterDateRange === 'past-week') {
        setRows(data['past-week']);
      }
      if (filterDateRange === 'past-4-weeks') {
        setRows(data['past-4-weeks']);
      }
      if (filterDateRange === 'all') {
        setRows(data.all);
      }
    }
  }, [filterDateRange]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log('event.target.value', event.target.value);
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
          {rows?.length === 0 && (
            //empty row if data does not exist
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
          )}
          {(rowsPerPage > 0
            ? rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          )?.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.role}</TableCell>
              <TableCell align="right">{row.chats}</TableCell>
              <TableCell align="right">{row.completedChats}</TableCell>
              <TableCell align="right">{row.longTermChats}</TableCell>
              <TableCell align="right">{row.avgResponseTime}</TableCell>
              <TableCell align="right">{row.avgCompleteTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ borderBottom: '1px solid #E0E0E0' }}
      />
    </TableContainer>
  );
}

export default ReportTable;
