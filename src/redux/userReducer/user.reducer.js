import { types } from "./user.types";

let initState = {
  email: "",
  password: "",
  posts: {
    title: "",
    body: "",
    tags: "",
    active: "",
  },
  createdStatus: false,
};
export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.register:
      return {
        ...state,
        email: payload.email,
        password: payload.password,
        createdStatus: true,
      };
    case types.reset:
      return initState;
    default:
      return state;
  }
};
