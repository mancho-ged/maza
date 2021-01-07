import React from 'react'
import styled from "styled-components";

import Wrapper from "../wrapper/wrapper";
import CompletedUnitsSliderLg from '../completed-units-slider-lg';
import CompletedUnitsThumbsSlider from '../completed-units-thumbs-slider/completed-units-thumbs-slider';

const CompletedUnitsStyled = styled.div`
  background-color: #dedede ;
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
              <h5>ქ.თბილისი,დიდ დიღომი, მირიან მეფის ქუჩა 11<sup>დ</sup></h5>
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
