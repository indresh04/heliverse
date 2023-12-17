// UpdateUser.js
import { useParams, useNavigate   } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateUser = () => {
    const navigate = useNavigate (); 
    console.log(navigate)
    const { id } = useParams();
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    avatar: '',
    domain: '',
    available: false,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/users/${id}`);
        setUser(response.data);

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
        console.log('User before update:', user);
      await axios.put(`http://localhost:8080/api/users/${id}`, user); 
      console.log('User updated successfully');
        navigate(`/${id}`); 
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Update User</h2>
      <form>
        {/* Input fields for user details */}
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
            value={user.first_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">
           Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            value={user.last_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label form-control">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
            
  <label htmlFor="gender" className="form-label">
    Gender
  </label>
  <select
    className="form-select"
    id="gender"
    name="gender"
    value={user.gender}
    onChange={handleInputChange}
  >
    <option value="">Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Agender">Agender</option>
    <option value="Bigender">Bigender</option>
    <option value="Genderfluid">Genderfluid</option>
    <option value="Genderqueer">Genderqueer</option>
    <option value="Non-binary">Non-binary</option>
    <option value="Polygender">Polygender</option>
  </select>
</div>
        <div className="mb-3">
        <label htmlFor="avatar" className="form-label">
            Avatar
          </label>
          <input
            type="text"
            className="form-control"
            id="avatar"
            name="avatar"
            value={user.avatar}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="mb-3">
        <label htmlFor="domain" className="form-label">
    Domain
  </label>
  <select
    className="form-select"
    id="domain"
    name="domain"
    value={user.domain}
    onChange={handleInputChange}
  >
    <option value="Business Development">Business Development</option>
        <option value="Finance">Finance</option>
        <option value="IT">IT</option>
        <option value="Management">Management</option>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
        <option value="UI Designing">UI designing</option>
  </select>
</div>
<div className="mb-3">
<label htmlFor="available" className="form-label">
    available
  </label>
  <select
    className="form-select"
    id="available"
    name="available"
    value={user.available}
    onChange={handleInputChange}
  >
    <option value="true">Available</option>
        <option value="false">unavailable</option>
  </select>
</div>
<div className='container mt-5'>
<button
          type="button"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
</div>

       
      </form>
    </div>
  );
};

export default UpdateUser;
