import { Container, Navbar, Nav } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaBookOpen } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <Navbar as="footer" className="footer py-4 mt-5" expand="lg">
      <Container>
        <div className="footer-content w-100">
          {/* Brand and social links */}
          <div className="footer-brand mb-4 mb-lg-0">
            <Navbar.Brand href="/" className="d-flex align-items-center">
              <FaBookOpen className="me-2" size={28} color="#3498db" />
              <span className="brand-name">QuickBooks</span>
            </Navbar.Brand>
            <div className="social-links mt-3">
              <a href="#facebook" aria-label="Facebook"><FaFacebook className="mx-2" size={20} /></a>
              <a href="#twitter" aria-label="Twitter"><FaTwitter className="mx-2" size={20} /></a>
              <a href="#instagram" aria-label="Instagram"><FaInstagram className="mx-2" size={20} /></a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="footer-nav">
            <Nav className="flex-column">
              <Nav.Link href="/" className="footer-link">Home</Nav.Link>
              <Nav.Link href="/browse" className="footer-link">Browse Books</Nav.Link>
              <Nav.Link href="/profile" className="footer-link">My Profile</Nav.Link>
              <Nav.Link href="/about" className="footer-link">About Us</Nav.Link>
            </Nav>
          </div>

          {/* Legal links */}
          <div className="footer-legal">
            <Nav className="flex-column">
              <Nav.Link href="#privacy" className="footer-link">Privacy Policy</Nav.Link>
              <Nav.Link href="#terms" className="footer-link">Terms of Service</Nav.Link>
              <Nav.Link href="#contact" className="footer-link">Contact Us</Nav.Link>
            </Nav>
          </div>

          {/* Newsletter signup */}
          <div className="footer-newsletter">
            <h5>Stay Updated</h5>
            <form className="mt-3">
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your email" 
                  aria-label="Email" 
                />
                <button className="btn btn-primary" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright w-100 text-center mt-4 pt-3 border-top">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} QuickBooks Library. All rights reserved.
          </p>
        </div>
      </Container>
    </Navbar>
  );
}

export default Footer;