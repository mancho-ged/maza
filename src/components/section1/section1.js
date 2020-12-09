import React from "react";
import styled from "styled-components";

import Wrapper from "../wrapper/wrapper";
import buildingImage from "../../images/korpusi-main.jpg";
import buildingBackgroundImage from "../../images/building-translucent.png";

const Section1Styled = styled.div`
  background-color: #fff;
  background-image: url(${buildingBackgroundImage});
  background-attachment: fixed;
  background-size: cover;
  height: 657px;

  div.container {
    min-height: 657px;
  }
  .building-image-wrapper {
    position: absolute;
    z-index: 0;
    top: 0;
    img {
      margin-top: 76px;
      max-height: calc(657px - 76px);
      width: auto;
      max-width: 100%;
    }
  }
  .container-building {
    z-index: 1;
    position: absolute;
    top:0;
  }
`;

export default function Section1() {
  return (
    <Section1Styled id="section1">
      <Wrapper>
        <div className="building-image-wrapper">
          <img src={buildingImage} alt="current building" />
          <div className="container-building container">
          {/* <h1>Section 1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            blanditiis adipisci eaque animi repellat atque assumenda corporis
            quidem nostrum ea, nulla qui cupiditate suscipit, quisquam voluptas
            mollitia ex iusto voluptates.
          </p> */}
        </div>
        
        </div>

        
      </Wrapper>
    </Section1Styled>
  );
}
