import React from "react";
import Wrapper from "../wrapper/wrapper";
import styled from "styled-components";

const PartnerCompaniesStyled = styled.div`
  background-color: #fff;
`;

export default function PartnerCompanies() {
  return (
    <PartnerCompaniesStyled id="partner-companies">
    <Wrapper>
    <div>
      <ul class="list-unstyled">
        <li class="media border-default">
          <div class="media-body">
            <a href="https://www.adb.org/" target="_blank" rel="noopener">
              აზიის განვითარების ბანკი{" "}
            </a>
          </div>
        </li>
        <li class="media border-default">
          <div class="media-body">
            <a
              href="https://www.adb.org/adbi/main"
              target="_blank"
              rel="noopener"
            >
              აზიის განვითარების ბანკის ინსტიტუტი{" "}
            </a>
          </div>
        </li>
        
        <li class="media border-default">
          <div class="media-body">
            <a href="https://www.cef-see.org/" target="_blank" rel="noopener">
              ფინანსური გაძლიერების ცენტრი{" "}
            </a>
          </div>
        </li>
        <li class="media border-default">
          <div class="media-body">
            <a
              href="https://www.imf.org/external/index.htm"
              target="_blank"
              rel="noopener"
            >
              საერთაშორისო სავალუტო ფონდი{" "}
            </a>
          </div>
        </li>
        <li class="media border-default">
          <div class="media-body">
            <a
              href="https://www.giz.de/en/html/index.html"
              target="_blank"
              rel="noopener"
            >
              გერმანიის საერთაშირისო თანამშრომლობის საზოგადოება{" "}
            </a>
          </div>
        </li>
        <li class="media border-default">
          <div class="media-body">
            <a
              href="https://www.imf.org/external/index.htm"
              target="_blank"
              rel="noopener"
            >
              საერთაშორისო სავალუტო ფონდი{" "}
            </a>
          </div>
        </li>
       
       
      </ul>
    </div>
    
    </Wrapper>
    </PartnerCompaniesStyled>
  );
}
