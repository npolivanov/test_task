import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Main from "pages/Main";
import Page from "pages/Page";
import Authorization from "pages/Authorization";
import "./index.css";

function App() {
  return (
    <Switch>
      <Route path="/main" component={Main} />
      <Route path="/auth" component={Authorization} />
      <Route path="/" component={Page} />
    </Switch>
  );
}

export default App;
