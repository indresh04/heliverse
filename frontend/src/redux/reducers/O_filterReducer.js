// src/redux/reducers/filterReducer.js
const initialState = {
    domain: '',
    gender: '',
    availability: '',
  };
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DOMAIN_FILTER':
        return { ...state, domain: action.payload };
      case 'SET_GENDER_FILTER':
        return { ...state, gender: action.payload };
      case 'SET_AVAILABILITY_FILTER':
        return { ...state, availability: action.payload };
      default:
        return state;
    }
  };
  
  export default filterReducer;
  