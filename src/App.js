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
        </Container>
      </Navbar>

      <InputCounter />

    </>
  );
}


export default App;