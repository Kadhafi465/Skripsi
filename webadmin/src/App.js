import React from 'react';
import {Container, Navbar, Nav, Brand, Link, Form, Button, FormControl, Table} from 'react-bootstrap'
import Home from './Pages/Home'
import Customer from './Pages/customer'
import Jadwal from './Pages/Jadwal'
import Header from './Components/Header'
import Pembayaran from './Pages/Pembayaran';
import Laporan from './Pages/Laporan';
// import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Customer /> */}
      {/* <Jadwal /> */}
      {/* <Pembayaran /> */}
    {/* <Laporan /> */}
<div style={{height: 60, backgroundColor: 'lightskyblue', marginTop: 20}}>
  <h2>Baba Futsal</h2>
</div>
<div style={{width: 300, height: 250, backgroundColor:'darkgrey', marginTop: 130, marginLeft: 500, borderRadius:20}}>
<h3 style={{textAlign: "center"}}>Login</h3>
</div>
    </div>
  );
}

export default App;
