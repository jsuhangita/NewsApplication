import { combineReducers } from 'redux';
import  appSetup  from './appSetup.reducer';
import spinner from "./spinner.reducer";
import searchNews from "./SearchNews.reducer";

const appReducers = combineReducers({
  // app reducer variable
  appSetup,
  spinner,
  searchResult:searchNews,
});
export default function rootReducer(state, action) {
  return appReducers(state, action);
}
