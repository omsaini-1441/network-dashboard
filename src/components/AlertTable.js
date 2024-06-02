import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AlertTable = ({ alerts }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Timestamp</TableCell>
            <TableCell>Source IP</TableCell>
            <TableCell>Destination IP</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Severity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alerts.map((alert, index) => (
            <TableRow key={index}>
              <TableCell>{alert.timestamp}</TableCell>
              <TableCell>{alert.src_ip}</TableCell>
              <TableCell>{alert.dest_ip}</TableCell>
              <TableCell>{alert.alert.category}</TableCell>
              <TableCell>{alert.alert.severity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AlertTable;
