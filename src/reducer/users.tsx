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

const category = sessionStorage.getItem("category");

const initialState: any = {
  users: getUser(),
  category: category == null ? null : parseInt(category), // id категории, чтобы всегда выводить новую
};

export const types = {
  SET_USER: "SET_USER",
  DELETE_USER: "DELETE_USER",
  EDIT_USER: "EDIT_USER",
  SELECT_CATEGORY: "SELECT_CATEGORY",
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
  selectCategory: (category: number) => ({
    type: types.SELECT_CATEGORY,
    payload: category,
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
    case types.SELECT_CATEGORY:
      sessionStorage.setItem("category", JSON.stringify(payload));
      return {
        ...state,
        category: payload,
      };

    default:
      return state;
  }
};
export default reducer;
