import React from "react";
import { Nav, Navbar, Form, Button, FormControl, Image, Table, Container } from "react-bootstrap";
import Navigation from "../Components/Navigation";
import lapangan from "../asets/lapangan.png";

export default () => {
  return (
    <>
      <Navigation />

      <Container>
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <h3 style={{ fontWeight: "bold" }}>Daftar Harga</h3>
          <p style={{ fontWeight: "bold" }}>Senin - Jum'at</p>
          <Table bordered>
            <thead>
              <tr>
                <th>Jam</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jam 08:00 - 16:00</td>
                <td>Rp. 130.000 / jam</td>
              </tr>
              <tr>
                <td>Jam 17:00 - 23:00</td>
                <td>Rp. 180.000 / jam</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <p style={{ fontWeight: "bold" }}>Sabtu - Minggu</p>
          <Table bordered>
            <thead>
              <tr>
                <th>Jam</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jam 08:00 - 16:00</td>
                <td>Rp. 150.000 / jam</td>
              </tr>
              <tr>
                <td>Jam 17:00 - 23:00</td>
                <td>Rp. 200.000 / jam</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div style={{ marginLeft: 20, textAlign: "center", marginTop: 40 }}>
          <h3>Visi Misi Perusahaan</h3>
          <p style={{ fontWeight: "bold" }}>Visi</p>
          <p>
            Menjadikan Baba Futsal sebagai sarana mengembangkan antusias pecinta olahraga sepakbola
            futsal dan menjadi wadah
          </p>
          <p>
            dalam meningkatkan kreativitas para pecinta futsal dari kalangan anak-anak hingga
            dewasa.
          </p>
          <p style={{ fontWeight: "bold" }}>Misi</p>
          <p>Mempererat persatuan dan kesatuan para pecinta futsal secara umum</p>
          <p>
            Mengembangkan bakat para anak-anak hingga remaja di lingkungan sekitar wilayah Baba
            Futsal
          </p>
          <p>
            Mengikuti perkembangan zaman dari segi kualitas dan kuantitas dalam pengembangan
            fasilitas futsal,
          </p>
          <p style={{ marginTop: -15 }}>
            sehingga para konsumen atau pelanggan dapat lebih menikmati fasilitas futsal lebih baik.{" "}
          </p>
        </div>
        <div style={{ textAlign: "center", marginBottom: 20, marginTop: 40 }}>
          <h3>Galeri</h3>
          <Image style={{ height: 200 }} src={lapangan} />
          <Image style={{ height: 200, marginLeft: 10 }} src={lapangan} />
          <Image style={{ height: 200, marginLeft: 10 }} src={lapangan} />
        </div>
      </Container>
    </>
  );
};
