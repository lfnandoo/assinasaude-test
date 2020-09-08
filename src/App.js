import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CreateHandbook from "./components/CreateHandbook";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/criar" component={CreateHandbook} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
