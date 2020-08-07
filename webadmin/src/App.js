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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/customer">
          <Customer />
        </Route>
        <Route path="/jadwal">
          <Jadwal />
        </Route>
        <Route path="/pembayaran">
          <Pembayaran />
        </Route>
        <Route path="/laporan">
          <Laporan />
        </Route>
      </Switch>

      {/* <Login /> */}
    </>
  );
}

export default App;
