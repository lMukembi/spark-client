import axios from "axios";
import { WITHDRAW_SUCCESS } from "../constants/withdraw";

const picashAPI = "http://localhost:8000";

export const withdraw = (formData) => async (dispatch) => {
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
      `${picashAPI}/api/withdraw`,
      formData,
      config
    );

    dispatch({ type: WITHDRAW_SUCCESS, payload: data });

    if (data) {
      alert("Sent successfully.");
      window.location.reload(false);
    }
  } catch (error) {
    console.log(error);
    if (error) {
      alert("Could not send successfully.");
    }
  }
};
