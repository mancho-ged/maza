import React, { Component } from "react";

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
    let classes = "project mix category_1 mix_all flip-container";
    if (this.state.isToggleOn) {
      classes += " hover";
    }
    return (<li className={classes} onTouchStart={this.handleTouch}>
        <a href="#!projects/project1.html">
          <div className="flipper">
            <div className="front">
              <img
                src="images/thumbnails/Gegma_001_thumb.jpg"
                alt="thumbnail"
              />
              <div className="projectinfo">
                <div className="meta">
                  <h4>ტიპიური პროექტი 1</h4>
                </div>
              </div>
            </div>
            <div className="back">
              <div className="agwera">
                <h6>
                  95,75 მ<sup>2</sup>
                </h6>
              </div>
            </div>
          </div>
        </a>
      </li>);
  }
}
