import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar1.css'
function Navbar1() {

  return (
    <Navbar bg="dark" variant='dark' expand="lg" className='sticky'>
      <Container className='navSize'>
        <Navbar.Brand className='hide-logo'><span className='the'>The</span> <b style={{ fontSize: 'xx-large' }}>Siren</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto size">
            <Link className='left-margin' to="/">Home</Link>
            <Link className='left-margin' to="/Bollywood">Bollywood</Link>
            <Link className='left-margin' to="/Technology">Technology</Link>
            <Link className='left-margin' to="/Hollywood">Hollywood</Link>
            <Link className='left-margin' to="/Fitness">Fitness</Link>
            <Link className='left-margin' to="/Food">Food</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Navbar1;