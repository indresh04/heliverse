// src/redux/reducers/userReducer.js
import { SET_PAGE_COUNT } from '../actions/pagecountAction';
const initialState = {
  totalPageCount: 0,
  };
  
  const pagecountReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PAGE_COUNT':
        return {
          ...state,
          totalPageCount: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default pagecountReducer;