import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

function Header() {
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Baba Futsal</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#profile">Profile</Nav.Link>
          <Nav.Link href="#user">Kelola User</Nav.Link>
          <Nav.Link href="#jadwal">Kelola Jadwal</Nav.Link>
          <Nav.Link href="#pembayaran">Kelola Pembayaran</Nav.Link>
          <Nav.Link href="#laporan">Laporan</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    )
}

export default Header;