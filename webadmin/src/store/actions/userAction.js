import axios from "axios";
import Swal from "sweetalert2";
import host from "../../hooks/host";

export const setLogin = (data, history) => {
  return (dispatch) => {
    return axios({
      method: "post",
      url: `${host}/login`,
      data: data,
    })
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        dispatch({
          type: "SETLOGIN",
          payload: { isLogin: true },
        });
        Swal.fire({
          icon: "success",
          title: `Welcome ${data.nama}`,
          showConfirmButton: false,
          timer: 1500,
        });
        history.push("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `User atau Password salah`,
        });
        history.push("/login");
      });
  };
};
