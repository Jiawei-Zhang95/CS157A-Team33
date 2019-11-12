import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./LogIn/login";
import Home from "./Home/Home";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/home" component={Home} exact />
    </Switch>
  </BrowserRouter>
);

export default App;
