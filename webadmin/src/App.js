import React from "react";
import { Home, Jadwal, Pembayaran, Laporan, Customer, Login } from "./Pages";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
// import store from "./store";
// import { Provider } from "react-redux";

function App() {
  const { isLogin } = useSelector((state) => state.userReducer);
  return (
    <>
      <Router>
        {isLogin ? (
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
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        ) : (
          <>
            <Redirect to="/login?redirect=true" />
            {/* <Route exact path="/login"> */}
              <Login />
            {/* </Route> */}
          </>
        )}
      </Router>
    </>
  );
}

export default App;
