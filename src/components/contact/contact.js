import React from "react";
import telephoneIcon from "../../images/icons/telephone.png";
import mailIcon from "../../images/icons/mail.png";
import locationIcon from "../../images/icons/location.png";
import styled from 'styled-components';

const ContactStyled = styled.div`
  padding-top: 88px;
  a{
      color:#fff;
      &:hover{
          text-decoration:none;
      }
  }
  div:hover{
      opacity:.6;
  }
`;

export default function Contact() {
  return (
    <ContactStyled className="contact row">
      <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
        <img src={telephoneIcon} alt="telephone" width="20" height="20" />
        <br />
        <a href="tel:+995579570000">(+995) 579-57-00-00</a>
      </div>
      <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
        <img src={mailIcon} alt="mail" width="20" height="20" />
        <br />
        <a id="contact-open" href="#">
          დაგვიკავშირდით
        </a>
      </div>
      <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
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
