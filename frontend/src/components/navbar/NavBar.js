import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import LoginService from '../../services/LoginService';

const NavBar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(localStorage.getItem('user'));
  });

  const handleLogout = () => {
    LoginService.logout(user).then((response) => {
      setUser(null);
      window.location.replace('/login');
    });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink className="navbar-brand" to="">
          Scientific Paper Publisher
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user && (
              <NavLink className="nav-link" to="create">
                Create
              </NavLink>
            )}
            {user && (
              <NavLink className="nav-link" to="mypapers">
                My Papers
              </NavLink>
            )}
            {user && (
              <NavLink className="nav-link" to="publications">
                Publications
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
        {user && (
          <Button variant="success" type="submit" onClick={handleLogout}>
            Log out
          </Button>
        )}
        {!user && (
          <Button variant="success" className="mx-1" onClick={() => navigate('/login')}>
            Log in
          </Button>
        )}
        {!user && (
          <Button variant="outline-success" onClick={() => navigate('/registration')}>
            Register
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
