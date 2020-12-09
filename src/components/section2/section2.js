import React from "react";
import styled from "styled-components";

import Wrapper from "../wrapper/wrapper";

const Section2Styled = styled.div`
  background-color: #fff;
`;

export default function Section2() {
  return (
    <Section2Styled id="section2">
      <Wrapper>
        <h2>ჩვენ შესახებ</h2>
        <span className="border"></span>
        <p className="sub-heading">
          კომპანია "მაზა დეველოპმენტი" დაარსდა 2013 წელს, მისი მიზანია შექმნას
          პროექტები . ჩვენი კომპანიის ძირითადი პრინციპებია:
        </p>
        <ul>
          <li>პროფენიონალიზმი</li>
          <li>პატიოსნება</li>
          <li>პუნქტუალურობა</li>
          <li>მშენებლობის მაღალი ხარისხი</li>
          <li>გარემოზე ზრუნვა</li>
          <li>მაქსიმალური კომფორტი</li>
          <li>უსაფრთხოება</li>
        </ul>
      </Wrapper>
    </Section2Styled>
  );
}
