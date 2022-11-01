import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink } from 'react-router-dom';
import '../assets/main.css'

function NavBarPoke() {
  const setActiveClass = ({ isActive }) => (isActive ? "active nav-link" : "nav-link");
  return (
      <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <NavLink className={ setActiveClass} to="/">Home</NavLink>
          <NavLink className={setActiveClass}   to="/pokemones">Pokemones</NavLink>
        </Nav>
      </Container>
      </Navbar>
  );
}

export default NavBarPoke;