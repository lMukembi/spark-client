import { combineReducers } from "redux";

import User from "./queries/reducers/user";
import Topup from "./queries/reducers/topup";
import Withdraw from "./queries/reducers/withdraw";
import Transaction from "./queries/reducers/transaction";

const rootReducer = combineReducers({
  User,
  Topup,
  Withdraw,
  Transaction,
});
export default rootReducer;
