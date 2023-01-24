import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function TopNavBar() {

  let navigate = useNavigate();
  function handleClick() {
    
    navigate("/main");
  }

  function clickLogOut() {
    let text = "Are you sure you want to log out?";
    if (window.confirm(text)) {
      window.localStorage.setItem("USER_TOKEN","");
      window.localStorage.setItem("LAST_APPLICATION","");
      navigate("/login");
    }
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            src="/E++-logos_transparent_square.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="epp logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleClick}>Home</Nav.Link>
            <NavDropdown title="Miscellaneous" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://drive.google.com/drive/folders/16VwM1YjW53XOtcHAYXdp8shglOiEr1YY?usp=share_link">How to Use Erasmus++</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/mfkucuk/CS-319">Project GitHub Repository</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://erasmuspp.mynotice.io/">
                FAQ
              </NavDropdown.Item>
            </NavDropdown>
            <div style={{ display: "flex" }}>
              <Button onClick={clickLogOut} style={{ width: "7rem", marginLeft: "62rem" }} variant="danger">Log Out</Button>{' '}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;