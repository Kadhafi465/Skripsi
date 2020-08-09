const host = `https://tranquil-stream-24296.herokuapp.com`;

export function getData() {
  return (dispatch, getState) => {
    fetch(`${host}/customer`)
      // fetch("http://localhost:3001/customer")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GETDATA",
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
