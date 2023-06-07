import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';

function createData(
  name,
  role,
  chats,
  completedChats,
  longTermChats,
  avgResponseTime,
  avgCompleteTime
) {
  return {
    name,
    role,
    chats,
    completedChats,
    longTermChats,
    avgResponseTime,
    avgCompleteTime,
  };
}

const rows = [
  createData('Teddy Flood', 'Agent', 210, 205, 50, '5m 36s', '1h 45m 20s'),
  createData(
    'Dolores Abernathy',
    'Agent',
    215,
    200,
    160,
    '6m 10s',
    '2h 10m 4s'
  ),
  createData('Bernard Lowe', 'Supervisor', 180, 170, 30, '10m 22s', '1h 10s'),
  createData('Maeve Millay', 'Agent', 180, 170, 100, '7m 3s', '2h 36m'),
  createData('Hector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Vector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Gector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Mector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Zector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Qector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Aector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Sector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Pector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Uector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Tector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Rector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Wector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Bector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Nector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Mector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Cector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Xector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Dector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Fector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Jector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Kector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Lector Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Kektor Escaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Hector Esxaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Hector Esbaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Hector Esqaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Hector Eslaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Hector Eswaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Hector Essaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Hector Esoaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Hector Espaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Hector Esuaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
  createData('Hector Esiaton', 'Agent', 150, 155, 50, '5m 36s', '1h 45m 20s'),
];

function ReportTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
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
          {!rows && (
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
