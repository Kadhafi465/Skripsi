import React from "react";
import { Nav, Navbar, Form, Button, FormControl, Image } from "react-bootstrap";
import Navigation from "../Components/Navigation";
import lapangan from '../asets/lapangan.png'

export default () => {
  return (
    <>
      <Navigation />
      <div style={{textAlign: 'center', height: 100, marginLeft: 20, marginTop: 20, marginBottom: 20}}>
        <h3 style={{fontWeight: 'bold'}}>Daftar Harga</h3>
        <p>Senin - Jum'at</p>
        <p>Jam 08:00 - 16:00 : Rp. 130.000 per jam</p>
        <p>Jam 17:00 - 23:00 : Rp. 180.000 per jam</p>
        <p>Sabtu - Minggu</p>
        <p>Jam 08:00 - 16:00 : Rp. 150.000 per jam</p>
        <p>Jam 17:00 - 23:00 : Rp. 200.000 per jam</p>
      </div>
      <div style={{marginTop: 200, marginLeft: 20, textAlign: 'center'}}>
        <h3>Visi Misi Perusahaan</h3>
        <p>Visi</p>
        <p>Menjadikan Baba Futsal sebagai sarana mengembangkan antusias pecinta olahraga sepakbola futsal dan menjadi wadah</p> 
          <p>dalam meningkatkan kreativitas para pecinta futsal dari kalangan anak-anak hingga dewasa.</p>
      <p>Misi</p>
      <p>1. Mempererat persatuan dan kesatuan para pecinta futsal  secara umum.</p>
      <p>2. Mengembangkan bakat para anak-anak hingga remaja di lingkungan sekitar wilayah Baba Futsal</p>
      <p>3. Mengikuti perkembangan zaman dari segi kualitas dan kuantitas dalam pengembangan fasilitas futsal,</p>
        <p>   sehingga para konsumen atau pelanggan dapat lebih menikmati fasilitas futsal lebih baik. </p>
      </div>
      <div style={{marginLeft: 20, textAlign: 'center'}}>
        <h3>Galeri Perusahaan</h3>
        <Image style={{height: 200}} src={lapangan} />  
        <Image style={{height: 200, marginLeft : 10}} src={lapangan} />  
        <Image style={{height: 200, marginLeft: 10}} src={lapangan} />  
      </div>
    </>
  );
};
