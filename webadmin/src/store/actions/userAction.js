import axios from "axios";

const host = `https://tranquil-stream-24296.herokuapp.com`;
// const host = `http://localhost:3001`;

export const setLogin = (data) => {
  return (dispatch) => {
    return axios({
      method: "post",
      url: `${host}/login`,
      data: data,
    }).then(({ data }) => {
      localStorage.setItem("token", data.token);
      dispatch({
        type: "SETLOGIN",
        payload: { isLogin: true },
      });
    });
  };
};
