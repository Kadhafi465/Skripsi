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
        <h1 style={{ textAlign: "center", marginTop: 25 }}>User</h1>
      </div>
      <Container>
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>No. HP</th>
              <th>Tanggal Lahir</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <Button variant="primary">Hapus</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <Button variant="primary">Hapus</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <Button variant="primary">Hapus</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
