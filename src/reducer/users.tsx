import { PropsUsers } from "api/consts";

interface Action {
  type: String;
  payload: PropsUsers | number;
}

const initialState: any = {
  users: [],
};

export const types = {
  SET_USER: "SET_USER",
  DELETE_USER: "DELETE_USER",
};

export const actions = {
  setUser: (user: PropsUsers) => ({
    type: types.SET_USER,
    payload: user,
  }),
  deleteUser: (id: number) => ({
    type: types.DELETE_USER,
    payload: id,
  }),
};

const reducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case types.SET_USER:
      let newState = { ...state };
      newState.users.push(payload);
      return {
        ...newState,
      };
    // case types.DELETE_USER:
    //   let newState = {...state};
    //   Object.keys(newState.users).
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};
export default reducer;
