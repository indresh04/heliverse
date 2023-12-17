import "./UserList.css"
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserList } from '../redux/actions/userActions';
import {setpagecount} from '../redux/actions/pagecountAction'
import {incPage, decPage} from "../redux/actions/pagerAction";
import UserCard from './UserCard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.userList);
  const totalpagecount = useSelector((state) => state.pagecount);
  const filters = useSelector((state) => state.filters);
  const pageNo = useSelector((state) => state.pager.page);
  const [pageNumber, setPageNumber] = useState(1);
  const totalusers = totalpagecount.totalPageCount;
  const [selectedUsers, setSelectedUsers] = useState([]);
  const totalPages = Math.ceil((totalpagecount.totalPageCount)/20);
  const nextOption= ()=>{
    if( pageNo < totalPages )
    {dispatch(incPage())}
    
  }
  useEffect(() => {
    const fetchUserList = async ()=>{
      try{
        const filtersQueryString = Object.entries(filters)
        
        .map(([key, value]) => `${key}=${value}`)
        .join('&');

        const countResponse = await fetch(`http://localhost:8080/api/users?pagecount=true&page=${pageNo}&${filtersQueryString}`);
            const countData = await countResponse.json();
            dispatch(setpagecount(countData))
      
      
            const response = await fetch(
        `http://localhost:8080/api/users?page=${pageNo}&${filtersQueryString}`); 
        const data = await response.json();
        dispatch(setUserList(data));
      }
      catch(error){
        console.error('Error fetching user data:', error);
      }
    }
    fetchUserList();

  }, [pageNumber, filters, dispatch, pageNo ]);
  console.log()

  const handleUserSelect = (user) => {
    // Check if the user is available and has a unique domain
    console.log(user)
    if (user.available && isUniqueDomain(user.domain)) {
      // Toggle the selection status of the user
      setSelectedUsers((prevSelectedUsers) => {
        const isUserSelected = prevSelectedUsers.some((selectedUser) => selectedUser.id === user.id);
  
        if (isUserSelected) {
          // Deselect the user if already selected
          return prevSelectedUsers.filter((selectedUser) => selectedUser.id !== user.id);
        } else {
         
      
          return [...prevSelectedUsers, user];
        }
      });
    } else {
      toast.error("User cannot be selected. Check availability and domain uniqueness.", {
        position: 'top-right',
        autoClose: 2000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.log("User cannot be selected. Check availability and domain uniqueness.");
    }
  };
  
  const isUniqueDomain = (newDomain) => {
    return !selectedUsers.some((selectedUser) => selectedUser.domain === newDomain);
  };

  const handleCreateTeam = () => {
    // Logic to create a team with selectedUsers
    console.log('Creating team with selected users:', selectedUsers);
  };


  return (
    <div>
    {selectedUsers.length > 0 && (
        <div className="selected-users">
          <h2>Selected Users</h2>
          <ul>
            {selectedUsers.map((user) => (
              <li key={user.id}>{user.first_name}</li>
            ))}
          </ul>
          <button onClick={handleCreateTeam}>Create Team</button>
        </div>
      )}
    <div className="cards">
    {userList.length > 1 || totalusers  ? <h1>List of Users</h1> : <h1>No users found</h1>}    
    {userList && userList.length > 0 && userList.map((user) => (
          <UserCard 
          key={user.id} 
          user={user}
          onSelect={() => handleUserSelect(user)}
          isSelected={selectedUsers.includes(user)}
           />
        ))}
    </div>
    { totalusers > 20 ?

    <div className="pager">
      <button onClick={() => dispatch(decPage())}>Prev</button>
        <span> Page {pageNo} of {totalPages} </span>
        <button onClick={nextOption}>Next</button>
    </div> : <h1></h1>}
    </div>
  );
};

export default UserList;

