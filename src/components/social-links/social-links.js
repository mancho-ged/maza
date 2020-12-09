import React from "react";
import facebookIcon from "../../images/icons/facebook-large.png";
import styled from "styled-components";

const SocialLinksStyled = styled.div`
  margin-top: 50px;
  a:hover{opacity: 0.6}
`;

export default function SocialLinks() {
  return (
    <SocialLinksStyled className="social-links col-md-12 text-center">
      <a href="http://facebook.com" target="_blank">
        <img src={facebookIcon} alt="facebook" width="36" height="36" />
      </a>
    </SocialLinksStyled>
  );
}
