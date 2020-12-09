import React from "react";
import styled from "styled-components";

import Wrapper from "../wrapper/wrapper";
import FacadeSlider from "../facade-slider";
import AppartmentsSlider from "../appartments-slider"

const Section3Styled = styled.div`
  background-color: #f6f6f6;
  h1{
    margin-top:88px;
  }
`;

export default function Section3() {
  return (
    <Section3Styled id="section3">
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>მიმდინარე პროექტი</h1>
              <span class="border"></span>
            </div>

            <div className="col-md-8">
              <FacadeSlider />
            </div>
            <div className="col-md-4" style={{height:"500px"}}>
              <AppartmentsSlider />
            </div>
          </div>
        </div>
      </Wrapper>
    </Section3Styled>
  );
}
