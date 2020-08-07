import React from 'react';
import {Container, Navbar, Nav, Brand, Link, Form, Button, FormControl, Table} from 'react-bootstrap'
import Navigation from "../Components/Navigation";

export default () => {
    return(
        <div className="App">
      <Navigation />
      <div>
    <h1 style={{textAlign: 'center', marginTop: 25}}>Kelola Jadwal</h1>
    <Container>
    <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>No</th>
      <th>Tanggal</th>
      <th>Jam</th>
      <th>Customer</th>
      <th>Lapangan</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>22-08-2020</td>
      <td>08:00-09:00</td>
      <td>Jak</td>
      <td>1</td>
    </tr>
    <tr>
    <td>2</td>
      <td>22-08-2020</td>
      <td>08:00-09:00</td>
      <td>Rass</td>
      <td>1</td>
    </tr>
  </tbody>
</Table>
    </Container>
  </div>


    </div>

    )
}
