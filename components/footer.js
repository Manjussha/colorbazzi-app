import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bgImage from "@images/resources/footer-bg-shape-1.png";
import footerLogo from "@images/resources/footer-logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div
        className="site-footer-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="footer-upper text-center">
              <div className="footer-logo">
                <img src={footerLogo} alt="Footer Logo" />
              </div>
              <ul className="footer-widget__social">
               
                <li>
                  <a href="https://www.facebook.com/colorbazzii" className="color-1">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/colorbazzi" className="color-3">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  
                  
                  <>
                    <a href="#">Screens</a>
                  </>
                  <li>
                    
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="site-footer__bottom">
        <Container className="text-center">
          <p>
            © copyright {year} by <a href="#">Colorbazzi.app</a>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
