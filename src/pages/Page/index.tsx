import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { actions as actionsModal } from "reducer/modal";
import { PropsState } from "api/consts";

interface Props {
  modalText: String;
  showModal: (modalText: String) => void;
}

function Page(props: Props) {
  return (
    <Div>
      {/* <Button onClick={click} variant="contained">
        no
      </Button> */}
    </Div>
  );
}

const Div = styled.div``;

const mapStateToProps = (state: PropsState) => {
  return {
    modalText: state.modal.modalText,
  };
};

const action = {
  showModal: actionsModal.showModal,
};

export default connect(mapStateToProps, action)(Page);
