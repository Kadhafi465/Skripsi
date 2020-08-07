import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Brand,
  Link,
  Form,
  Button,
  FormControl,
  Table,
} from "react-bootstrap";
import Navigation from "../Components/Navigation";

export default () => {
  return (
    <div className="App">
      <Navigation />
      <div>
        <h1 style={{ textAlign: "center", marginTop: 25 }}>Kelola Pembayaran</h1>
        <Container>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>No</th>
                <th>Id_Customer</th>
                <th>Customer</th>
                <th>Tanggal</th>
                <th>Jam</th>
                <th>Foto Bukti</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>001</td>
                <td>Dhafi</td>
                <td>22-08-2020</td>
                <td>08:00-09:00</td>
                <td>img ...</td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td>002</td>
                <td>Dhafi</td>
                <td>22-08-2020</td>
                <td>10:00-11:00</td>
                <td>img ...</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
};
