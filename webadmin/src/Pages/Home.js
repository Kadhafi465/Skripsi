import React from 'react'
import {Nav, Navbar, Form, Button, FormControl} from 'react-bootstrap'

export default () => {
    return(
        <div className="App">
      <div style={{height: 70, marginTop: 20,textAlign: 'center'}}>
      <h1>Baba Futsal</h1>
      </div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#features">Profile</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <div style={{width: 250, height: 50,borderRadius: 10, backgroundColor: 'lightblue',marginTop: 50, marginLeft: 580}}>
    <h1 style={{fontSize: 20, textAlign: 'center', textJustify: 'center'}}>Kelola User</h1>
  </div>
  <div style={{width: 250, height: 50,borderRadius: 10, backgroundColor: 'lightblue',marginTop: 20, marginLeft: 580}}>
    <h1 style={{fontSize: 20, textAlign: 'center', textJustify: 'center'}}>Kelola Jadwal</h1>
  </div>
  <div style={{width: 250, height: 50,borderRadius: 10, backgroundColor: 'lightblue',marginTop: 20, marginLeft: 580}}>
    <h1 style={{fontSize: 20, textAlign: 'center', textJustify: 'center'}}>Kelola Pembayaran</h1>
  </div>
  <div style={{width: 250, height: 50,borderRadius: 10, backgroundColor: 'lightblue',marginTop: 20, marginLeft: 580}}>
    <h1 style={{fontSize: 20, textAlign: 'center', textJustify: 'center'}}>Laporan</h1>
  </div>
  <div style={{width: 250, height: 50,borderRadius: 10, backgroundColor: 'lightgreen' ,marginTop: 20, marginLeft: 580}}>
    <h1 style={{fontSize: 20, textAlign: 'center', textJustify: 'center'}}>Logout</h1>
  </div>
    </div>

    )
}
