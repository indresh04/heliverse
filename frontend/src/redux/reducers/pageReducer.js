const initialState = {
    page: 1,
  };
  
  const pageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'incPage':
        return {
          ...state,
          
          page: state.page + 1,
        };
        case 'decPage':
        return {
          ...state,
          page: state.page >1 ? state.page -1 : 1,
        };
        case 'resetPage':
        return {
          ...state,
          page: 1,
        };
      default:
        return state;
    }
  };
  
  export default pageReducer