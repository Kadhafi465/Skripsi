import React from "react";
import { Container, Table } from "react-bootstrap";
import Navigation from "../Components/Navigation";

export default () => {
  return (
    <div className="App">
      <Navigation />
      <div>
        <h1 style={{ textAlign: "center", marginTop: 25 }}>Laporan</h1>
        <Container>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>No</th>
                <th>id_sewa</th>
                <th>Id_Customer</th>
                <th>Customer</th>
                <th>Tanggal</th>
                <th>Jam</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>001</td>
                <td>001</td>
                <td>Dhafi</td>
                <td>22-08-2020</td>
                <td>08:00-09:00</td>
                <td>Rp. 130.000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>001</td>
                <td>001</td>
                <td>Dhafi</td>
                <td>22-08-2020</td>
                <td>08:00-09:00</td>
                <td>Rp. 130.000</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
};
