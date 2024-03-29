import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function HomeNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
       <style>
            {`
        .navbar {
          background-color: #2D2C2C;
        }

        .btn-xxl {
          padding: 1rem 1.5rem;
          font-size: 1.5rem;
        }
        `}
      </style>
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='#about'>About Anthony</Nav.Link>
            <Nav.Link href='#projects'>Projects</Nav.Link>
            {/* <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <Stack>
                <Link to='/projects/vemi'>VEMI</Link>
                <Link to='/projects/school'>School</Link>
                <Link to='/projects/swipepitch'>Swipe Pitch</Link>
                <Link to='/projects/personal'>Personal</Link>

              </Stack>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#memes"><FontAwesomeIcon icon={faEnvelope}/></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/anthony-caccese-88078b218/"><FontAwesomeIcon icon={faLinkedin}/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;