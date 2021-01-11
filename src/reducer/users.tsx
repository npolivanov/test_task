import { PropsUsers } from "api/consts";

interface Action {
  type: String;
  payload: any;
}

const getUser = () => {
  let users = sessionStorage.getItem("users");
  if (users === null) {
    return [];
  } else {
    return JSON.parse(users);
  }
};

const initialState: any = {
  users: getUser(),
};

export const types = {
  SET_USER: "SET_USER",
  DELETE_USER: "DELETE_USER",
  EDIT_USER: "EDIT_USER",
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
  editUser: (user: number) => ({
    type: types.EDIT_USER,
    payload: user,
  }),
};

const reducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case types.SET_USER:
      let newState = { ...state };
      payload.id = newState.users.length;
      newState.users = [...newState.users, payload];
      sessionStorage.setItem("users", JSON.stringify(newState.users));
      return {
        ...newState,
      };
    case types.DELETE_USER:
      let deleteState = { ...state };
      let newUsers = deleteState.users.filter(
        (item: PropsUsers) => item.id !== payload
      );
      sessionStorage.setItem("users", JSON.stringify(newUsers));
      return {
        ...state,
        users: newUsers,
      };
    case types.EDIT_USER:
      let editState = { ...state };
      editState.users.forEach((user: PropsUsers) => {
        if (user.id === payload.id) {
          user.name = payload.name;
          user.lastname = payload.lastname;
          user.city = payload.city;
          user.gender = payload.gender;
          user.date = payload.date;
          user.aboutyou = payload.aboutyou;
        }
      });
      sessionStorage.setItem("users", JSON.stringify(editState.users));
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default reducer;
