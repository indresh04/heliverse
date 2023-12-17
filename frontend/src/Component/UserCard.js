import "./UserCard.css"
import React from 'react';

const UserCard = ({ user, onSelect, isSelected }) => {
  return (
    // <a href={`/${user._id}`} style={{textDecoration:"none"}}>
    <div className={`user-card ${isSelected ? 'selected' : ''}`}>
      <img src={user.avatar} alt={user.name} />
      <br></br>
        <p>{user.gender}</p>
        <h2>{user.first_name}</h2>
        <h2>{user.last_name}</h2>
        {user.available ? <span style={{backgroundColor:"green"}}><br></br> </span> :<span style={{backgroundColor:"red"}}><br></br></span>}
      {/* <button onClick={() => onViewDetails(user._id)}>View User Details</button> */}
      <button onClick={onSelect}>Select in Team</button>

    </div>
    // </a>
  );
};

export default UserCard;
