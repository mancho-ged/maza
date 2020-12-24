import React from "react";
import Wrapper from "../wrapper/wrapper";
import styled from "styled-components";
import logo1 from "../../images/partners/beloandcompany.jpg";
import logo2 from "../../images/partners/arcon.png";
import logo3 from "../../images/partners/rustavi-metalurgy.png";
import logo4 from "../../images/partners/heidelberg.png";

const PartnerCompaniesStyled = styled.div`
  background-color: #fff;
  img {
    width: 200px;
  }
`;

export default function PartnerCompanies() {
  return (
    <PartnerCompaniesStyled id="partner-companies">
      <Wrapper>
        <div className="container">
        <div className="col-md-12 text-center">
              <h2>პარტნიორი კომპანიები</h2>
              <span className="border"></span>
            </div>
          <div className="d-flex flex-wrap justify-content-between align-items-center">
          <a href="https://www.beloandcompany.ge/" target="_blank" rel="noopener noreferrer">
            <img src={logo1} className="mr-3" alt="..." />
          </a>
          <a
            href="http://www.arcon.ge/ge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo2} className="mr-3" alt="..." />
          </a>

          <a
            href="http://www.rmp.ge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo3} className="mr-3" alt="..." />
          </a>

          <a
            href="https://www.heidelbergcement.ge/ka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo4} className="mr-3" alt="..." />
          </a>

          </div>
        </div>
      </Wrapper>
    </PartnerCompaniesStyled>
  );
}
