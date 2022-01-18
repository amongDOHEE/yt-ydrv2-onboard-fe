import { combineReducers } from "redux";
import { searchTitle } from "./search";

const rootReducer = combineReducers({
  input: searchTitle,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;