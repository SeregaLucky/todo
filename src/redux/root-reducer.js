import { combineReducers } from "redux";

import todoReducer from "./todo/todo-reducer";

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
