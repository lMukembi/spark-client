import { TOPUP_FAIL, TOPUP_SUCCESS } from "../constants/topup";

const initialState = {
  loading: true,
  topupData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOPUP_SUCCESS:
      return { ...state, loading: false, topupData: action.payload };
    case TOPUP_FAIL:
      return { ...state, loading: false, topupData: action.payload };
    default:
      return state;
  }
};
