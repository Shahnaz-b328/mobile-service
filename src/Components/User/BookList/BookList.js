import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

const BookList = () => {
  const classes = useStyles();
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    fetch('https://polar-dawn-10437.herokuapp.com/order')
      .then(res => res.json())
      .then(data => setBookList(data))
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Service</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookList.map((booking) => (
            <TableRow key={booking._id}>
              <TableCell component="th" scope="row">
                {booking.name}
              </TableCell>
              <TableCell align="center">{booking.description}</TableCell>
              <TableCell align="center">{booking.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookList;