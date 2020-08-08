const initialState = {
  isLogin: localStorage.getItem("token") ? true : false,
};

function userReducer(state = initialState, action) {
  if (action.type === "SETLOGIN") {
    return { ...state, isLogin: action.payload.isLogin };
  }
  return state;
}
export default userReducer;
