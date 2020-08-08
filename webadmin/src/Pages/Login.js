import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from '../store/actions/userAction';
import "../App.css";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  function onChangeUsername(event) {
    setUsername(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let data = {
      username,
      password,
    };
    dispatch(setLogin(data));
    history.push("/");
  }
  return (
    <div className="gambarbg">
      <h2 className="title">Baba Futsal</h2>
      <div className="boxlogin">
        <h3 className="logintitle">Login</h3>
        <div>
          <Form inline onSubmit={handleSubmit}>
            <FormControl
              className="logininput"
              onChange={onChangeUsername}
              type="text"
              placeholder="username"
            />
            <FormControl
              className="logininput"
              onChange={onChangePassword}
              type="text"
              placeholder="password"
            />
            <Button variant="primary" size="sm" type="submit" block className="loginbtn">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
