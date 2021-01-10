interface PropsUsers {
  name: String;
  lastname: String;
  aboutyou: String;
  date: Date;
  gender: String;
  city: String;
}

interface Action {
  type: String;
  payload: PropsUsers | number;
}

// id: 0,
//   name: "",
//   lastname: "",
//   aboutyou: "",
//   date: new Date("2000-05-02"),
//   gender: "",
//   city: ""
const initialState = {
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
      return {
        ...state,
        users: {
          ...state,
          users: [payload, ...state.users],
        },
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
