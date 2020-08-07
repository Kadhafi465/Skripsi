import React from "react";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";
import Navigation from "../Components/Navigation";

export default () => {
  return (
    <>
      <Navigation />

      <div
        style={{
          width: 250,
          height: 50,
          borderRadius: 10,
          backgroundColor: "lightblue",
          marginTop: 50,
          marginLeft: 580,
        }}
      >
        <h1 style={{ fontSize: 20, textAlign: "center", textJustify: "center" }}>Kelola User</h1>
      </div>
      <div
        style={{
          width: 250,
          height: 50,
          borderRadius: 10,
          backgroundColor: "lightblue",
          marginTop: 20,
          marginLeft: 580,
        }}
      >
        <h1 style={{ fontSize: 20, textAlign: "center", textJustify: "center" }}>Kelola Jadwal</h1>
      </div>
      <div
        style={{
          width: 250,
          height: 50,
          borderRadius: 10,
          backgroundColor: "lightblue",
          marginTop: 20,
          marginLeft: 580,
        }}
      >
        <h1 style={{ fontSize: 20, textAlign: "center", textJustify: "center" }}>
          Kelola Pembayaran
        </h1>
      </div>
      <div
        style={{
          width: 250,
          height: 50,
          borderRadius: 10,
          backgroundColor: "lightblue",
          marginTop: 20,
          marginLeft: 580,
        }}
      >
        <h1 style={{ fontSize: 20, textAlign: "center", textJustify: "center" }}>Laporan</h1>
      </div>
      <div
        style={{
          width: 250,
          height: 50,
          borderRadius: 10,
          backgroundColor: "lightgreen",
          marginTop: 20,
          marginLeft: 580,
        }}
      >
        <h1 style={{ fontSize: 20, textAlign: "center", textJustify: "center" }}>Logout</h1>
      </div>
    </>
  );
};
