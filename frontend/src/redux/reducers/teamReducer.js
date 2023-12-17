// teamReducer.js

const initialState = {
    teams: [],
  };
  
  const teamReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_TEAM':
        return {
          ...state,
          teams: [...state.teams, action.payload],
        };
      case 'DELETE_TEAM':
        return {
          ...state,
          teams: state.teams.filter((team) => team.id !== action.payload),
        };
      case 'UPDATE_TEAM':
        return {
          ...state,
          teams: state.teams.map((team) =>
            team.id === action.payload.id ? { ...team, ...action.payload } : team
          ),
        };
      // Add other cases for additional team-related actions.
  
      default:
        return state;
    }
  };
  
  export default teamReducer;
  