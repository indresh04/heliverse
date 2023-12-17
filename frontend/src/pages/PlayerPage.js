import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate   } from 'react-router-dom';
import UserDetail from '../Component/UserDetail';
import { useParams } from 'react-router-dom';
import UpdateUser from '../Component/UpdateUser';


const PlayerPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/users/${id}`);
        const userData = await res.json();
        console.log(userData)
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/users/${id}`);
      console.log('User deleted successfully');
      navigate(`/`); 

    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleUpdate = () => {
    // Implement the logic for updating the user details here
    console.log('Update button clicked');
  };
  return (
    <div className='container mt-5'>
      <div className="">
        {user ? <UserDetail user= {user}/> : <p>Loading...</p>}
      </div>
      <div className="mt-4">
            <Link to={`/${id}/update`} className="btn btn-primary me-2">
              Update
            </Link>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>

    </div>
  );
};

export default PlayerPage;
