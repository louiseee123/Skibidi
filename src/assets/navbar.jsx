import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Image from 'react-bootstrap/Image'
import EcoTech from '../components/EcoTech Logo.png'
import {Link} from 'react-router-dom'


function Navigation () {
  return (
    <Navbar expand="lg" relative="top" className="p-3">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Image src = {EcoTech} alt = "EcoTech" className='img-fluid' style = {{width:"70px" , height: "auto", right: "100px", position: "relative"}}/>
          <Nav className="me-auto" expand= 'lg' style={{gap:"255px", fontFamily: 'Inter, sans-serif', fontSize: '17px', color: "black"}}>
            <Link to='/' style={{color:"black"}}>Home</Link>
            <Link to ='/about' style={{color:"black"}}>About Us</Link>
            <Link to ='/contact' style={{color:"black"}}>Contact</Link>
            <Link to ='/services' style={{color:"black"}}>Services</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation
