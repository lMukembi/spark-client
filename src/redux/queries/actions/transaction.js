import axios from "axios";
import { TRANSACTION_SUCCESS } from "../constants/transaction";

const picashAPI = "http://localhost:8000";

export const withdraw = (id) => async (dispatch) => {
  const data = localStorage.getItem("userAccount");
  const token = JSON.parse(data);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token.data}`,
    //   "Access-Control-Allow-Origin": "https://www.jorjer.com",
  };
  const config = {
    headers: headers,
  };

  try {
    const { data } = await axios.post(
      `${picashAPI}/api/transactions${id}`,
      config
    );

    dispatch({ type: TRANSACTION_SUCCESS, payload: data });

    if (data) {
      alert("Fetched transactions successfully.");
      window.location.reload(false);
    }
  } catch (error) {
    console.log(error);
    if (error) {
      alert("Could not find transactions.");
    }
  }
};
