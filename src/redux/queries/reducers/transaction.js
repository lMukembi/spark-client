import {
  TRANSACTION_FAIL,
  TRANSACTION_SUCCESS,
} from "../constants/transaction";

const initialState = {
  loading: true,
  transactionData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTION_SUCCESS:
      return { ...state, loading: false, transactionData: action.payload };
    case TRANSACTION_FAIL:
      return { ...state, loading: false, transactionData: action.payload };
    default:
      return state;
  }
};
