// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import filterReducer from './filterReducers';
import pageReducer from "./pageReducer";
import pagecountReducer from './pagecountReducer';
import teamReducer from './teamReducer';


const rootReducer = combineReducers({
  users: userReducer,
  filters: filterReducer,
  pager: pageReducer,
  pagecount : pagecountReducer,
  team: teamReducer,
  
});

export default rootReducer;
