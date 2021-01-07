interface Action {
  type: String;
  payload: String;
}

const initialState = {
  modalText: "ok",
};

export const types = {
  SHOW_MODAL: "SHOW_MODAL",
  HIDE_MODAL: "HIDE_MODAL",
};

export const actions = {
  showModal: (modalText: String) => ({
    type: types.SHOW_MODAL,
    payload: modalText,
  }),
  hideModal: (modalText: String) => ({
    type: types.SHOW_MODAL,
    payload: modalText,
  }),
};

const reducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case types.SHOW_MODAL:
      return {
        modalText: payload,
      };
    case types.HIDE_MODAL:
      return {
        modalText: "",
      };
    default:
      return state;
  }
};
export default reducer;
