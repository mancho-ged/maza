import React from "react";
import Wrapper from "../wrapper/wrapper";
import styled from "styled-components";

const PartnerCompaniesStyled = styled.div`
  background-color: gray;
`;

export default function PartnerCompanies() {
  return (
    <PartnerCompaniesStyled id="partner-companies">
    <Wrapper>
    <div>
      <ul class="list-unstyled">
        <li class="media border-default">
          <div class="media-img">
            <img
              src="/Files/showimage?id=733834ae-e25d-41a7-be59-7167a31c5dbe"
              alt="აზიის განვითარების ბანკი "
            />
          </div>
          <div class="media-body">
            <a href="https://www.adb.org/" target="_blank" rel="noopener">
              აზიის განვითარების ბანკი{" "}
            </a>
          </div>
        </li>
        <li class="media border-default">
          <div class="media-img">
            <img
              src="/Files/showimage?id=f361ab30-f97b-44da-9b92-a2b1267fb0c1"
              alt="აზიის განვითარების ბანკის ინსტიტუტი"
            />
          </div>
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
          <div class="media-img">
            <img
              src="/Files/showimage?id=1cf933e1-3466-409e-b589-d913098871c6"
              alt="ფინანსური გაძლიერების ცენტრი"
            />
          </div>
          <div class="media-body">
            <a href="https://www.cef-see.org/" target="_blank" rel="noopener">
              ფინანსური გაძლიერების ცენტრი{" "}
            </a>
          </div>
        </li>
        <li class="media border-default">
          <div class="media-img">
            <img
              src="/Files/showimage?id=5661553d-eed1-456c-8c46-e507c59b519e"
              alt="საერთაშორისო სავალუტო ფონდი"
            />
          </div>
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
          <div class="media-img">
            <img
              src="/Files/showimage?id=a3e9a69d-89cf-45ce-818e-b6958b67d73f"
              alt="გერმანიის საერთაშირისო თანამშრომლობის საზოგადოება"
            />
          </div>
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
          <div class="media-img">
            <img
              src="/Files/showimage?id=47ccf836-4ebd-4c8c-81e9-3f37378bc03f"
              alt="საერთაშორისო სავალუტო ფონდი"
            />
          </div>
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
