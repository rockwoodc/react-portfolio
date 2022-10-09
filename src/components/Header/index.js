import logo from "../../assets/logos/Logo-white.png";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header({ setPage }) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar sticky="top" />
      <Container className="justify-content-end">
        <Navbar.Brand onClick={() => setPage("about")}>
          <img src={logo} alt="Christian Rockwood's logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setPage("about")}>About</Nav.Link>
            <Nav.Link onClick={() => setPage("projects")}>Projects</Nav.Link>
            <Nav.Link onClick={() => setPage("contact")}>Contact</Nav.Link>
            <Nav.Link className="resume" href="https://drive.google.com/file/d/1KPlmN-6G_qksg0fLXC47Df11Ky5uMEOf/view?usp=sharing"  target="_blank" rel="noreferrer">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
