import React from "react";

const initialState = {
  blogs: [],
  singleBlogpost: {},
  isAdded: false,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_DATA":
      return {
        ...state,
        blogs: payload,
      };
    case "GET_BYID":
      return {
        ...state,
        singleBlogpost: payload,
      };
    case "ADD_POST_SUCCESS":
      return {
        ...state,
        isAdded: true,
      };
    case "ADD_POST_FAILURE":
      return {
        ...state,
        isAdded: false,
      };
    default:
      return state;
  }
};

export { reducer };
