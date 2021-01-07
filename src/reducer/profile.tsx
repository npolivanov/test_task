interface Action {
  type: String;
  payload: String;
}

const initialState = {
  login: localStorage.getItem("login") || "",
};

export const types = {
  SET_LOGIN: "SET_LOGIN",
};

export const actions = {
  setLogin: (login: String) => ({
    type: types.SET_LOGIN,
    payload: login,
  }),
};

const reducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case types.SET_LOGIN:
      return {
        ...state,
        login: payload,
      };
    default:
      return state;
  }
};
export default reducer;
