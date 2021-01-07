import React from "react";
import Wrapper from "../wrapper/wrapper";
import styled from "styled-components";
import TypicalAppartmentItem from "../typical-appartment-item";
import bina1 from "../../images/binebi/BINA-65-1.jpg";

const TypicalAppartmentsStyle = styled.div`
  background-color: #dedede;
  h2 {
    margin-top: 88px;
  }
  min-height: 100vh;
`;

export default class TypicalAppartments extends React.Component {
  render() {
    let binebi = [
      {
        project: 1,
        name: "ტიპიური პროექტი 1",
        floors: [
          "I",
          "II",
          "III",
          "IV",
          "V",
          "VI",
          "VII",
          "VIII",
          "IX",
          "X",
          "XI",
        ],
        sold: [
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
        ],
        area: "95,75",
        images: [bina1]
      },
      {
        project: 2,
        name: "ტიპიური პროექტი 2",
        floors: [
          "I",
          "II",
          "III",
          "IV",
          "V",
          "VI",
          "VII",
          "VIII",
          "IX",
          "X",
          "XI",
        ],
        sold: [
          true,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
        ],
        area: "95,75",
        images: [bina1]
      },
    ];
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
