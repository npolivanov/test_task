import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "pages/Main";
import Page from "pages/Page";
import Authorization from "pages/Authorization";
import history from "api/history";

import "./index.css";

function App() {
  return (
    <Switch>
      <Route history={history} path="/auth" component={Authorization} />
      <Route history={history} path="/" component={Main} />
    </Switch>
  );
}

export default App;
