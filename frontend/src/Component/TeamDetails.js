// src/components/TeamDetails.js
import React from 'react';
import { useSelector } from 'react-redux';

const TeamDetails = () => {
  const selectedTeam = useSelector((state) => state.team.selectedTeam);

  return (
    <div>
      {/* Display team details based on selectedTeam from Redux store */}
    </div>
  );
};

export default TeamDetails;
