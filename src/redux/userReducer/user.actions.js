import { types } from "./user.types";

export const register = (data) => {
  let { email, password } = data;
  return {
    type: types.register,
    payload: { email, password },
  };
};

export const reset = () => {
  return {
    type: types.reset,
  };
};
