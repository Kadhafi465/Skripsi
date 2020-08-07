import React from "react";
import { Nav, Navbar, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../asets/logobaba.png";

export default () => {
  return (
    <>
      <div style={{ justifyContent: "center", display: "flex", marginTop: 10, marginBottom: 10 }}>
        <Image src={Logo} />
      </div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand>
          <Link to="/" style={{ color: "white", fontWeight: "bold" }}>
            Baba Futsal
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/customer" style={{ color: "white" }}>
              User
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/jadwal" style={{ color: "white" }}>
              Jadwal
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/pembayaran" style={{ color: "white" }}>
              Pembayaran
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/laporan" style={{ color: "white" }}>
              Laporan
            </Link>
          </Nav.Link>
        </Nav>
        <Button variant="primary">Logout</Button>
      </Navbar>
    </>
  );
};
