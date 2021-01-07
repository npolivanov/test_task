import React, { useEffect } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Main from "pages/Main";
import Page from "pages/Page";
import Authorization from "pages/Authorization";
import { checkToken } from "api/helpFunction";
import "./index.css";

interface Props {
  history: any;
}

function App(props: Props) {
  // useEffect(() => {
  //   /*
  //     проверяем наличие токена, т.к. нет сервера, просто смотрим его существование
  //   */
  //   let isToken = checkToken(localStorage.getItem("token"));
  //   if (isToken === true) {
  //     props.history.push("/");
  //   } else {
  //     props.history.push("/auth");
  //   }
  // }, []);

  return (
    <Switch>
      <Route path="/auth" component={Authorization} />
      <Route path="/" component={Main} />
    </Switch>
  );
}

export default withRouter(App);
