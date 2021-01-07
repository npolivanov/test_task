interface Action {
  type: String;
  payload: String;
}

const initialState = {
  login: localStorage.getItem("login") || "",
  token: localStorage.getItem("token") || "",
};

export const types = {
  SET_LOGIN: "SET_LOGIN",
  SET_TOKEN: "SET_TOKEN",
};

export const actions = {
  setLogin: (login: String) => ({
    type: types.SET_LOGIN,
    payload: login,
  }),
  setToken: (token: String) => ({
    type: types.SET_TOKEN,
    payload: token,
  }),
};

const reducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case types.SET_LOGIN:
      return {
        ...state,
        login: payload,
      };
    case types.SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    default:
      return state;
  }
};
export default reducer;
