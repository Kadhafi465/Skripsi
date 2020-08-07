import React from "react";
import { Nav, Navbar, Button, Image } from "react-bootstrap";
import Logo from "../asets/logobaba.png";

export default () => {
  return (
    <>
      <div style={{ justifyContent: "center", display: "flex", marginTop: 10, marginBottom: 10 }}>
        <Image src={Logo} />
      </div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home"></Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Button variant="primary">Logout</Button>
      </Navbar>
    </>
  );
};
