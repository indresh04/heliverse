// src/redux/actions/filterActions.js
export const setDomainFilter = (domain) => ({
    type: 'SET_DOMAIN_FILTER',
    payload: domain,
  });
  
  export const setGenderFilter = (gender) => ({
    type: 'SET_GENDER_FILTER',
    payload: gender,
  });
  
  export const setAvailabilityFilter = (availability) => ({
    type: 'SET_AVAILABILITY_FILTER',
    payload: availability,
  });
  