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
    minWidth: 650,
  },
});
const ManageService = () => {
  const classes = useStyles();
  const [manageServices, setManageServices] = useState([]);
  useEffect(() => {
    fetch('https://polar-dawn-10437.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setManageServices(data))
  }, [])

  const deleteService = (name) => {
    fetch(`https://polar-dawn-10437.herokuapp.com/delete/${name}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        if (result) {
          alert('services deleted successfully')
        }
      })
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Services</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Picture</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {manageServices.map((services) => (
              <TableRow key={services._id}>
                <TableCell component="th" scope="row">
                  {services.name}
                </TableCell>
                <TableCell align="center">{services.description}</TableCell>
                <TableCell align="center">${services.price}</TableCell>
                <TableCell align="center">{services.image}</TableCell>
                <TableCell onClick={() => deleteService(services.name)} align="center"><button style={{ backgroundColor: 'lightsalmon', border: 'none', color: 'navy' }}>Delete</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageService;