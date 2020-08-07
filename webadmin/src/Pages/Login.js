import React from "react";
import { Form, Button, FormControl, Container, Image } from "react-bootstrap";
import "../App.css";

export default () => {
  return (
    <div className="gambarbg">
      <h2 className="title">Baba Futsal</h2>
      <div className="boxlogin">
        <h3 className="logintitle">Login</h3>
        <div>
          <Form inline>
            <FormControl className="logininput" type="text" placeholder="username" />
            <FormControl className="logininput" type="text" placeholder="password" />
            <Button variant="primary" size="sm" block className="loginbtn">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
