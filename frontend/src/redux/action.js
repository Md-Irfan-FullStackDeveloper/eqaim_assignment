import axios from "axios";

const BaseUrl = "http://localhost:8080";

export const getData = () => (dispatch) => {
  return axios
    .get(`${BaseUrl}/blogs`)
    .then((res) => {
      dispatch({ type: "GET_DATA", payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const getPostByID = (blogId) => (dispatch) => {
  return axios
    .get(`${BaseUrl}/${blogId}`)
    .then((res) => {
      dispatch({ type: "GET_BYID", payload: res.data });
    //   console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addBlogpost = (data) => (disptach) => {
  return axios
    .post(`${BaseUrl}/addBlog`, data)
    .then((res) => {
      disptach({ type: "ADD_POST_SUCCESS" });
    })
    .catch((err) => {
      disptach({ type: "ADD_POST_FAILURE" });
    });
};
