import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      expand="lg" 
      className="py-3 px-4 shadow-sm" 
      style={{ backgroundColor: '#f8f9fa' }}
      expanded={expanded}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="me-5 fw-bold fs-4" style={{ color: '#2C3E50' }}>
          QuickBooks
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
          className="border-0"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav 
            className="ms-auto align-items-center" 
            style={{ 
              gap: '3rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '500'
            }}
          >
            <Nav.Link 
              as={Link} 
              to="/" 
              className="px-2 text-dark position-relative nav-link-custom"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/profile" 
              className="px-2 text-dark position-relative nav-link-custom"
              onClick={() => setExpanded(false)}
            >
              Profile
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/browse" 
              className="px-2 text-dark position-relative nav-link-custom"
              onClick={() => setExpanded(false)}
            >
              Browse
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/about" 
              className="px-2 text-dark position-relative nav-link-custom"
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/login" 
              className="px-3 py-2 rounded-3 ms-lg-4 text-white"
              style={{ 
                backgroundColor: '#3498DB',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2980B9'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#3498DB'}
              onClick={() => setExpanded(false)}
            >
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style>
        {`
          .nav-link-custom:after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #3498DB;
            visibility: hidden;
            transition: all 0.3s ease-in-out;
          }
          
          .nav-link-custom:hover:after {
            visibility: visible;
            width: 100%;
          }
          
          .navbar-toggler:focus {
            box-shadow: none;
          }
          
          @media (max-width: 992px) {
            .navbar-nav {
              gap: 1.5rem !important;
              padding: 1rem 0;
            }
          }
        `}
      </style>
    </Navbar>
  );
}

export default Navigation;