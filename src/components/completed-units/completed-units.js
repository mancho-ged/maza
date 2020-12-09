import React from 'react'
import styled from "styled-components";

import Wrapper from "../wrapper/wrapper";
import FacadeSlider from "../facade-slider";
import AppartmentsSlider from "../appartments-slider";

const CompletedUnitsStyled = styled.div`
  background-color: #f5f5f5 ;
  h1{
    margin-top:88px;
  }
`;

export default function CompletedUnits() {
    return (
        <CompletedUnitsStyled id="completed-units">
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>დასრულებული პროექტები</h1>
              <span class="border"></span>
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
    </CompletedUnitsStyled>
    )
}
