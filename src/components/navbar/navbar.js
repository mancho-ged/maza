import React from "react";
import styled from "styled-components";

import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

import logo from "../../images/logo-new.png";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarStyled = styled.div`
  font-size: 1em;
  position: fixed;
  width: 100%;
  z-index: 100;
  .header {
    
    border-bottom: 2px solid #f0f0f0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    margin: 0;
    font-family: "nino";
    color: #030303;
    background: rgba(248, 249, 250, 0.95)!important;
    * {
      cursor: pointer;
    };
    a {
      display: flex;
      align-items: center;
      border-bottom: 1px solid transparent;
      border-top: 1px solid transparent;
    }
    .logo {
      padding: 15px 0;
    }
    .active.link-active {
      border-bottom: 1px solid white;
      color: #0354bd;
    }
    border-top: 1px solid #0361d8;
  }
  @media screen and (max-width: 992px){
    .navbar-nav{
      a{
        justify-content: center;
      }
    }
  }
`;

function scrollToTop() {
  scroll.scrollToTop();
}

export default function TopNavbar() {
  return (
    <NavbarStyled>
      <Navbar
        expand="lg"
        className="header"
        role="navigation"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="/home" className="logo">
            <div>
              <span id="top" onClick={scrollToTop}>
                <img src={logo} height="45" alt="Maza developement logo" />
              </span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ml-auto ">
              <Nav.Link
                eventKey="1"
                as={Link}
                to="section1"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="link-active"
                className="d-none d-lg-flex"
              >
                მთავარი
              </Nav.Link>
              <Nav.Link
                eventKey="2"
                as={Link}
                to="section2"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="link-active"
              >
                ჩვენ შესახებ
              </Nav.Link>
              <Nav.Link
                eventKey="3"
                as={Link}
                to="typical-appartments"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="link-active"
              >
                ტიპიური ბინები
              </Nav.Link>
              <Nav.Link
                eventKey="4"
                as={Link}
                to="section3"
                activeClass="link-active"
                spy={true}
                smooth={true}
                duration={1000}
              >
                მიმდინარე პროექტი
              </Nav.Link>
              <Nav.Link
                eventKey="5"
                as={Link}
                to="partner-companies"
                activeClass="link-active"
                spy={true}
                smooth={true}
                duration={1000}
              >
                პარტნიორი კომპანიები
              </Nav.Link>
              <Nav.Link
                eventKey="6"
                as={Link}
                to="completed-units"
                activeClass="link-active"
                spy={true}
                smooth={true}
                duration={1000}
              >
                დასრულებული პროექტები
              </Nav.Link>
              <Nav.Link
                eventKey="7"
                as={Link}
                to="footer"
                activeClass="link-active"
                spy={true}
                smooth={true}
                duration={1000}
              >
                კონტაქტი
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div className="scrolling-buttons">
        <Wrapper>
          <OnScreenScrolling />
        </Wrapper>
      </div> */}
    </NavbarStyled>
  );
}
