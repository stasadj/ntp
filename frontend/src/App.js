import React, { useState, useEffect } from 'react';

import './App.css';

import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from './components/navbar/NavBar';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import CreateSciPaper from './components/sci-paper/CreateSciPaper';
import SciPaperList from './components/sci-paper/SciPaperList';
import PublicationList from './components/publication/PublicationList';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(localStorage.getItem('user'));
  });

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/*"
          element={
            <div>
              <h1 style={{ marginTop: 70, fontWeight: 400 }}>Welcome!</h1>
              <img src="https://www.theessayassignmenthelp.com/uploads/1597494621636.jpg" />
            </div>
          }
        />
        {!user && <Route path="/login" element={<Login />} />}
        {!user && <Route path="/registration" element={<Registration />} />}
        {user && <Route path="/create" element={<CreateSciPaper />} />}
        {user && <Route path="/mypapers" element={<SciPaperList />} />}
        {user && <Route path="/publications" element={<PublicationList />} />}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
