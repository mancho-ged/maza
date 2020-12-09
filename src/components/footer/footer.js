import React from "react";
import styled from "styled-components";
import Wrapper from "../wrapper/wrapper";
import Contact from "../contact";
import SocialLinks from "../social-links";

const FooterStyled = styled.footer`
  height: 50vh;
  background-color: #142570;
  margin-top:20px;
`;

export default function Footer() {
  return (
    <FooterStyled id="footer">
      <footer className="container">
        <Contact />
        <SocialLinks />
      </footer>
    </FooterStyled>
  );
}
