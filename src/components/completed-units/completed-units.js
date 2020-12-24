import React from 'react'
import styled from "styled-components";

import Wrapper from "../wrapper/wrapper";
import AppartmentsSlider from "../appartments-slider";
import CompletedUnitsSliderLg from '../completed-units-slider-lg';
import CompletedUnitsThumbsSlider from '../completed-units-thumbs-slider/completed-units-thumbs-slider';

const CompletedUnitsStyled = styled.div`
  background-color: #f5f5f5 ;
  h2{
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
              <h2>დასრულებული პროექტი</h2>
              <span className="border"></span>
            </div>

            <div className="col-md-8 large-slider">
              <CompletedUnitsSliderLg />
            </div>
            <div className="col-md-4 d-none d-md-block" style={{height:"572px"}}>
              <CompletedUnitsThumbsSlider />
            </div>
          </div>
        </div>
      </Wrapper>
    </CompletedUnitsStyled>
    )
}
