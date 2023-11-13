import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import InputCounter from './counter';

const style = {
  color: 'white'
}

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Arif Hussain</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">

            <Nav style={style} className="mr-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#action1" active>Home</Nav.Link>
              <Nav.Link href="#action2">About Us</Nav.Link>
              <NavDropdown title="Projects" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">P1</NavDropdown.Item>
                <NavDropdown.Item href="#action4">P2</NavDropdown.Item>
                <NavDropdown.Item href="#action5">P3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Contact </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <InputCounter />

    </>
  );
}


export default App;