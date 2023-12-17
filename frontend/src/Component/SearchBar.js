// src/components/SearchBar.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserList } from '../redux/actions/userActions';


const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchFilteredUsers = async () => {
      try {

        const url = `http://localhost:8080/api/username?name=${searchQuery}`;
        
        const response = await fetch(url);
        const data = await response.json();
        dispatch(setUserList(data));
      } catch (error) {
        console.error('Error fetching filtered user data:', error);
      }
    };

    fetchFilteredUsers();
  }, [searchQuery, dispatch]);

  return (
    <div className='form-control mt-3 ml-2 col-sm-4' >
      <input
        type="text"
        placeholder="Search by First Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <a href='/create_new_user'>
      <span > <b><a> Create new user</a></b></span>
      </a>
    </div>
  );
};

export default SearchBar;
