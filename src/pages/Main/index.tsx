import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { checkToken } from "api/helpFunction";
import { withRouter } from "react-router-dom";
import Header from "components/Header";
import MenuComponent from "components/Menu";

interface Props {
  history: any;
}

const Main = (props: Props) => {
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
    <div>
      <Header />
      <MenuComponent />
    </div>
  );
};

export default withRouter(Main);
