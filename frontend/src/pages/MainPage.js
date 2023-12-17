import "./MainPage.css"
import React from 'react';
import UserList from "../Component/UserList";
import FilterSelection from "../Component/FilterSelection";
import SearchBar from "../Component/SearchBar";
import Test from '../Test';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainPage = () => {
  return (
<div>
      <SearchBar></SearchBar>
    <div className='main-box'>
      <div className=''>
        <FilterSelection></FilterSelection>
     </div>
      <div className=''>
        <UserList></UserList>

     </div>
  </div>
        <ToastContainer />
      {/* <Teamcreation></Teamcreation> */}
</div>
  );
};

export default MainPage;