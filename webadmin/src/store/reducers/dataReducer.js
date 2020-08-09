const initialState = {
  files: [],
};

function dataReducer(state = initialState, action) {
  if (action.type === "GETDATA") {
    return { ...state, files: action.payload };
  }
  return state;
}

export default dataReducer;
