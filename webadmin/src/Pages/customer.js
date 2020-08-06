import React from 'react';
import {Container, Navbar, Nav, Brand, Link, Form, Button, FormControl, Table} from 'react-bootstrap'
import Header from '../Components/Header'

export default () => {
    return(
        <div className="App">
     <Header />
  <div>
    <h1 style={{textAlign: 'center', marginTop: 25}}>Kelola User</h1>
  </div>
  <Container>

  <Table striped bordered hover>
  <thead>
    <tr>
      <th>No</th>
      <th>Nama Lengkap</th>
      <th>Alamat</th>
      <th>No. HP</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
  </Container>
    </div>

    )
}