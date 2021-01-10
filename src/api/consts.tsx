/// media query
export const media = {
  CardForm: `(max-width: 500px)`,
  Menu: `(max-width: 700px)`,
  MenuModile: `(min-width: 700px)`,
  FormGroup: `(max-width: 1000px)`,
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
  token: String;
}

interface PropsModule {
  modalText: String;
}

interface PropsUsers {
  name: String;
  lastname: String;
  aboutyou: String;
  date: Date;
  gender: String;
  city: String;
}

export interface PropsState {
  profile: PropsProfile;
  modal: PropsModule;
}

export const WIDTH_CONTENT = "70%";

// ссылки на страницы
export const links = [
  {
    title: "add/edit",
    link: "/",
  },
  {
    title: "user",
    link: "/user",
  },
  {
    title: "view",
    link: "/view",
  },
];
