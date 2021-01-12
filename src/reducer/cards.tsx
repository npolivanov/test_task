import { PropsCards } from "api/consts";

interface Action {
  type: String;
  payload: any;
}

const initialState = {
  cards: [],
};

export const types = {
  SET_CARDS: "SET_CARDS",
};

export const actions = {
  setCards: (cards: Array<PropsCards>) => ({
    type: types.SET_CARDS,
    payload: cards,
  }),
};

const reducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case types.SET_CARDS:
      return {
        ...state,
        cards: payload,
      };
    default:
      return state;
  }
};
export default reducer;
