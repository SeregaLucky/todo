import { combineReducers } from "redux";

import itemsReducer from "./items/itemsReducer";

const rootReducer = combineReducers({
  itemsReducer: itemsReducer,
});

export default rootReducer;
