/// media query
export const media = {
  CardForm: `(max-width: 500px)`,
};

// login and password
export const auth = {
  login: "test",
  password: "test",
};

// длина токена для его валидации
export const tokenLength = 25;

// тип для reducers
interface PropsProfile {
  login: String;
}

interface PropsModule {
  modalText: String;
}

export interface PropsState {
  profile: PropsProfile;
  modal: PropsModule;
}
