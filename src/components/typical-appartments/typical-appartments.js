import React from "react";
import Wrapper from "../wrapper/wrapper";
import styled from "styled-components";
import TypicalAppartmentItem from "../typical-appartment-item";

const TypicalAppartmentsStyle = styled.div`
  background-color: #f6f6f6;
  h2 {
    margin-top: 88px;
  }
  min-height: 100vh;
`;

export default class TypicalAppartments extends React.Component {
  
  render() {
    let binebi = [
      {project: 1, floors: ["I", "II", "III"], sold: [false, false, false]}
    ];
    let appartments = binebi.map(app => {
      return <TypicalAppartmentItem />
    })

    return (
      <TypicalAppartmentsStyle id="typical-appartments">
        <Wrapper>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>ტიპიური ბინები</h2>
                <span className="border"></span>
              </div>

              <ul id="portfolio-grid" className="projectlist clearfix">
                { appartments }
              </ul>
            </div>
          </div>
        </Wrapper>
      </TypicalAppartmentsStyle>
    );
  }
}
