import React from "react";
import styled from "styled-components";
import Contact from "../contact";

const FooterStyled = styled.footer`
  min-height: 35vh;
  background-color: #142570;
  margin-top:20px;
`;

export default function Footer() {
  return (
    <FooterStyled id="footer">
      <footer className="container">
        <Contact />
      </footer>
    </FooterStyled>
  );
}
