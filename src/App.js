import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import InputCounter from './counter';
import Hooks from './Hooks';

import { Route, Routes, Link} from 'react-router-dom';

import Lab1 from './Components/Lab';
import Lab2 from './Components/Lab2';


function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className='text-white'>
        <Container>
          <Navbar.Brand href="#home">Arif Hussain</Navbar.Brand>
        </Container>
        <h1> <Link to='/Lab1' style={{textDecoration:'none', color:'white'}} >Lab1</Link>  </h1>
        <h1> Lab2 </h1>
      </Navbar>


    <Routes>


      <Route path='/Lab1' element={<Lab1/>} />
      <Route path='/Lab2' element={<Lab2/>} />


    </Routes>







      {/* <InputCounter /> */}

      {/* <Hooks /> */}






    </>
  );
}


export default App;