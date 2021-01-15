import React from "react";
import Wrapper from "../wrapper/wrapper";
import styled from "styled-components";
import TypicalAppartmentItem from "../typical-appartment-item";

import MazaService from '../../services/maza-service';

const TypicalAppartmentsStyle = styled.div`
  background-color: #dedede;
  h2 {
    margin-top: 88px;
  }
  min-height: 100vh;
`;

export default class TypicalAppartments extends React.Component {
  render() {
    let binebi = MazaService.binebi;
    let appartments = binebi.map((app) => {
      return <TypicalAppartmentItem {...app} key={app.project} />;
    });

    return (
      <TypicalAppartmentsStyle id="typical-appartments">
        <Wrapper>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>ტიპიური ბინები</h2>
              </div>

              <div
                id="portfolio-grid"
                className="projectlist clearfix col-md-12"
              >
                {appartments}
              </div>
            </div>
          </div>
        </Wrapper>
      </TypicalAppartmentsStyle>
    );
  }
}
