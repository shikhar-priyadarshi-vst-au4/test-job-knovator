import { types } from "./feed.types";

export const login = (data) => {
  let { email, password } = data;
  return {
    type: types.login,
    payload: { email, password },
  };
};
export const Store = (data) => {
  return {
    type: types.store,
    payload: data,
  };
};
export const create = () => {};
export const remove = () => {};
export const update = () => {};
export const retrieve = () => {};

//accounts - > [{users : {info, posts, tags, body, title}}]
