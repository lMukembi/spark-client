import axios from "axios";
import { TOPUP_SUCCESS } from "../constants/topup";

const picashAPI = "http://localhost:8000";

export const deposit = (inputs) => async (dispatch) => {
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
    const { data } = await axios.post(`${picashAPI}/api/topup`, inputs, config);

    dispatch({ type: TOPUP_SUCCESS, payload: data });

    if (data) {
      alert("Desposited initiated successfully.");
    }
  } catch (error) {
    console.log(error);
    if (error) {
      alert("Could not deposit successfully.");
    }
  }
};
