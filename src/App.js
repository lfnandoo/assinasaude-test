import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CreateHandbook from "./components/CreateHandbook";

function App() {
  const [postData, setPostData] = React.useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home postData={postData} />
        </Route>
        <Route exact path="/criar">
          <CreateHandbook postData={postData} setPostData={setPostData} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
