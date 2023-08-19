import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Outlet,NavLink } from 'react-router-dom';
import { Cart } from '../CartWidget/Cart.jsx';
import "./navbar.css";




export const Navbarr = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <img className='img' src="https://static.vecteezy.com/system/resources/previews/008/659/193/non_2x/eps10-white-monitor-or-pc-icon-in-simple-flat-trendy-modern-style-isolated-on-black-background-free-vector.jpg" />

          <NavLink className={"navbar-title"} to="/">SuePC</NavLink>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className={"navbar_items"} to={"/category/notebooks"}>Notebooks</NavLink>
              <NavLink className={"navbar_items"} to={"/category/computadoras"}>Computadoras</NavLink>
              <NavLink className={"navbar_items"} to={"/category/tablets"}>Tablets</NavLink>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Contacto</Nav.Link>
            </Nav>
            <Cart />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>

  )
}