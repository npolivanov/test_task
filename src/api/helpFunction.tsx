import { tokenLength } from "api/consts";

export const checkToken = (token: String | null) => {
  if (token !== null && token.length === tokenLength) {
    return true;
  }
  return false;
};
