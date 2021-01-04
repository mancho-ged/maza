import React from "react";
import telephoneIcon from "../../images/icons/telephone.png";
import locationIcon from "../../images/icons/location.png";
import facebookIcon from "../../images/icons/facebook-large.png";
import styled from 'styled-components';

const ContactStyled = styled.div`
  padding-top: 88px;
  a{
      color:#fff;
      &:hover{
          text-decoration:none;
      }
  }
  div{
    padding-bottom: 41px;
  }
  div:hover{
      opacity:.6;
  }
`;

export default function Contact() {
  return (
    <ContactStyled className="contact row">
      <div className="col-md-4 d-flex justify-content-start align-items-center flex-column">
        <img src={telephoneIcon} alt="telephone" width="20" height="20" />
        <br />
        <a href="tel:+995579570000">(+995) 579-57-00-00</a>
      </div>
      <div className="col-md-4 d-flex justify-content-start align-items-center flex-column">

        <a href="http://facebook.com" target="_blank">
        <img src={facebookIcon} alt="facebook" width="36" height="36" />
      </a>
      </div>
      <div className="col-md-4 d-flex justify-content-start align-items-center flex-column">
        <img src={locationIcon} alt="location" width="20" height="20" />
        <br />
        <a href="https://goo.gl/maps/cTlM0" target="_blank">
          ქ.თბილისი,დიდ დიღომი
          <br />
          მირიან მეფის ქუჩა 11<sup>დ</sup>
        </a>
      </div>
    </ContactStyled>
  );
}
