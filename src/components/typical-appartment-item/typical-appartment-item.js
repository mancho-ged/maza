import React, { Component } from "react";
import styled from "styled-components";
import bina1 from '../../images/binebi/BINA-65-1.jpg';

export default class TypicalAppartmentItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleTouch = this.handleTouch.bind(this);
  }

  handleTouch() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    let classes = "project mix category_1 mix_all flip-container col-sm-7";
    if (this.state.isToggleOn) {
      classes += " hover";
    }
    const floors = this.props.floors.map((floor) => {
      return <h4 className="badge badge-primary mr-1">{floor}</h4>;
    });

    const TypicalAppartmentsItemStyle = styled.div`
    margin: 15px 0px;
    .badge{
      font-size: 12px;
      padding: 5px 6px 2px;
    }
    img{
      max-width:100%;
      height:auto;
    }
    `;
    return (
      <TypicalAppartmentsItemStyle>
        <div className="row">
          <div className={classes} onTouchStart={this.handleTouch}>
            <img src={ bina1 } alt="thumbnail" />
            
          </div>
          <div className="col-sm-5">
            <div className="projectinfo">
            <h4>{this.props.name}</h4>
              {floors}
              <h6>
                {this.props.area} მ<sup>2</sup>
              </h6>
            </div>
          </div>
        </div>
      </TypicalAppartmentsItemStyle>
    );
  }
}
