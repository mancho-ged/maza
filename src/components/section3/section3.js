import React from "react";
import styled from "styled-components";

import Wrapper from "../wrapper/wrapper";
import FacadeSlider from "../facade-slider";
import AppartmentsSlider from "../appartments-slider"

const Section3Styled = styled.div`
  background-color: gray;
`;

export default function Section3() {
  return (
    <Section3Styled id="section3">
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>მიმდინარე პროექტი</h1>
            </div>

            <div className="col-md-8">
              <FacadeSlider />
            </div>
            <div className="col-md-4" style={{height:"548px"}}>
              <AppartmentsSlider />
            </div>
          </div>
        </div>
      </Wrapper>
    </Section3Styled>
  );
}
