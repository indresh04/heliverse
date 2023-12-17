// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PlayerPage from './pages/PlayerPage';
import UpdateUser from './Component/UpdateUser';
import NewUser from './Component/NewUser';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create_new_user" element={<NewUser />} />
        <Route path="/:id" element={<PlayerPage />} />
        <Route path="/:id/update" element={<UpdateUser />} />
        {/* <Route path="*" element={<MainPage />} /> */}


      </Routes>
    </Router>
  );
};

export default App;
