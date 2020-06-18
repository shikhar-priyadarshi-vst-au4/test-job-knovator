import { types } from "./feed.types";

const initState = {
  accounts: [],
  user: "",
  loginStatus: false,
  message: "",
};

export const feedReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.store:
      return { ...state, accounts: [...state.accounts, payload] };
    case types.login:
      let find = state.accounts.find(
        (v) => v.email === payload.email && v.password === payload.password
      );
      console.log("find", find);
      return !!find
        ? {
            ...state,
            user: find,
            loginStatus: true,
            message: "You're logged in",
          }
        : {
            ...state,
            user: "",
            loginStatus: false,
            message: "Wrong creditenials",
          };
    case types.create:
    //  let index = accounts.indexOf();
    default:
      return state;
  }
};
