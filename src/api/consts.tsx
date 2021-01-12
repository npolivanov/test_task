/// media query
export const media = {
  CardForm: `(max-width: 500px)`,
  Menu: `(max-width: 700px)`,
  MenuModile: `(min-width: 700px)`,
  FormGroup: `(max-width: 1000px)`,
  AddUser: `(max-width: 740px)`,
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

export interface PropsUsers {
  id?: number;
  name: String;
  lastname: String;
  aboutyou: string | number | readonly string[] | undefined;
  date: Date | null;
  gender: String;
  city: String;
}

export interface PropsCards {
  API: String;
  Auth: String;
  Category: String;
  Cors: String;
  Description: String;
  HTTPS: boolean;
  Link: String;
}

export interface IPropsCards {
  cards: Array<PropsCards>;
}

interface TypeUsers {
  users: Array<PropsUsers>;
  category: number | null;
}

export interface PropsState {
  profile: PropsProfile;
  users: TypeUsers;
  cards: IPropsCards;
}

export const WIDTH_CONTENT = "70%";

// ссылки на страницы
export const links = [
  {
    title: "add/edit",
    link: "/",
  },
];

export const api = [
  "Lorem Picsum",
  "PlaceKitten",
  "ScreenShotLayer",
  "Church Calendar",
  "Czech Namedays Calendar",
  "Hebrew Calendar",
  "LectServe",
  "Namedays Calendar",
  "Breaking Bad",
  "Final Space",
  "Ron Swanson Quotes",
  "STAPI",
  "The Lord of the Rings",
];

export const apiLinks = {
  url: "https://api.publicapis.org",
  Photography: "/entries?category=Photography&auth=null",
  Calendar: "/entries?category=Calendar&auth=null",
  Video: "/entries?category=Video",
};
export const category = [
  {
    name: "Photo",
    link: `${apiLinks.url}${apiLinks.Photography}`,
  },
  {
    name: "Calendar",
    link: `${apiLinks.url}${apiLinks.Calendar}`,
  },
  {
    name: "Video",
    link: `${apiLinks.url}${apiLinks.Video}`,
  },
];
