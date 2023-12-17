// teamActions.js

export const createTeam = (teamData) => {
    return {
      type: 'CREATE_TEAM',
      payload: teamData,
    };
  };
export const deleteTeam = (teamId) => {
  return {
    type: 'DELETE_TEAM',
    payload: teamId,
  };
};

export const updateTeam = (teamData) => {
  return {
    type: 'UPDATE_TEAM',
    payload: teamData,
  };
};