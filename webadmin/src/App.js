import React from "react";
import {
  Container,
  Image,
  Navbar,
  Nav,
  Brand,
  Link,
  Form,
  Button,
  FormControl,
  Table,
} from "react-bootstrap";
import { Home, Jadwal, Pembayaran, Laporan, Customer, Login } from "./Pages";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Customer />
      {/* <Jadwal /> */}
      {/* <Pembayaran /> */}
      {/* <Laporan /> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
