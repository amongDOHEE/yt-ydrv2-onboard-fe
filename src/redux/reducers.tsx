import {combineReducers} from 'redux';
import {searchId, searchTitle} from './search';

const rootReducer = combineReducers({
  input: searchTitle,
  channelId: searchId,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
