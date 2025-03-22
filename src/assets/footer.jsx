import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./footer.css"

function Footer() {
  return (

    <Navbar className=" footer p-3 text-center fixed-bottom">
      <Container className="d-flex justify-content-between">
        <Navbar.Text className="company">&copy; {new Date().getFullYear()} EcoTech</Navbar.Text>
        <Nav>
          <Nav.Link href="#privacy" className="privacy">Privacy Policy</Nav.Link>
          <Nav.Link href="#terms" className="tos">Terms of Service</Nav.Link>
          <Nav.Link href="#contact" className="contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
