import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../store/actions/dataAction";
import { Container, Button, Table } from "react-bootstrap";

import Navigation from "../Components/Navigation";

export default () => {
  const dispatch = useDispatch();

  const files = useSelector((state) => state.dataReducer.files);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

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
              <th>Nama</th>
              <th>Alamat</th>
              <th>No. HP</th>
              <th>Tanggal Lahir</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, idx) => {
              return (
                <tr>
                  <td>{file.id}</td>
                  <td>{file.nama}</td>
                  <td>{file.email}</td>
                  <td>{file.alamat}</td>
                  <td>{file.telepon}</td>
                  <td>{file.ttl}</td>
                  <td>
                    <Button variant="primary">Hapus</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
