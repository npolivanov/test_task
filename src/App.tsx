import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "pages/Main";
import Authorization from "pages/Authorization";
import Result from "pages/Result";
import User from "pages/User";
import history from "api/history";
import { checkToken } from "api/helpFunction";
import { withRouter } from "react-router-dom";
import "./index.css";

function App(props: any) {
  useEffect(() => {
    /*
      проверяем наличие токена, т.к. нет сервера, просто смотрим его существование
    */
    let isToken = checkToken(localStorage.getItem("token"));
    if (isToken === false) {
      props.history.push("/auth");
    }
  }, []);

  return (
    <Switch>
      <Route history={history} path="/auth" component={Authorization} />
      <Route history={history} path="/user/:id" component={User} />
      <Route history={history} path="/result/:api" component={Result} />
      <Route history={history} path="/" component={Main} />
    </Switch>
  );
}

export default withRouter(App);
