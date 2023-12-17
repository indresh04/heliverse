const initialState = {
  domain: [],
  gender: [],
  available: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DOMAIN_FILTER':
      return { ...state, domain: action.payload };
    case 'SET_GENDER_FILTER':
      return { ...state, gender: action.payload };
    case 'SET_AVAILABILITY_FILTER':
      return { ...state, available: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
