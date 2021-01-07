import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { actions as actionsModal } from "reducer/modal";

interface Props {
  modalText: String;
  showModal: (modalText: String) => void;
}

function Page(props: Props) {
  const click = () => {};
  return (
    <Div>
      <Button onClick={click} variant="contained">
        no
      </Button>
    </Div>
  );
}

const Div = styled.div``;

const mapStateToProps = (state: any) => {
  return {
    modalText: state.modal.modalText,
  };
};

const action = {
  showModal: actionsModal.showModal,
};

export default connect(mapStateToProps, action)(Page);
