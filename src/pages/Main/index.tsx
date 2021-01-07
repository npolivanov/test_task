import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { actions as actionsModal } from "reducer/modal";
import { checkToken } from "api/helpFunction";
import { withRouter } from "react-router-dom";

interface Props {
  modalText: String;
  showModal: (modalText: String) => void;
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
      <Button onClick={() => console.log(1)} variant="contained">
        ok
      </Button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    modalText: state.modal.modalText,
  };
};

const action = {
  showModal: actionsModal.showModal,
};

export default withRouter(connect(mapStateToProps, action)(Main));
