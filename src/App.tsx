import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Main from "pages/Main";
import Page from "pages/Page";

function App() {
  return (
    <Switch>
      <Route path="/" component={Page} />
      <Route path="/main" component={Main} />
    </Switch>
  );
}

export default App;
