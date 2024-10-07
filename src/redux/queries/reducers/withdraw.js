import { WITHDRAW_FAIL, WITHDRAW_SUCCESS } from "../constants/withdraw";

  
  const initialState = {
    loading: true,
    withdrawData: null,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case WITHDRAW_SUCCESS:
        return { ...state, loading: false, withdrawData: action.payload };
      case WITHDRAW_FAIL:
        return { ...state, loading: false, withdrawData: action.payload };
      default:
        return state;
    }
  };