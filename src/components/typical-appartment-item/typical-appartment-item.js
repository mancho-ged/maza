import React, { Component } from "react";
import styled from "styled-components";

import SwiperCore, {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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
    const { name, area, floors, images, project, sold } = this.props;
    // const floor = floors.map((floor) => {
    //   return <h4 className="badge badge-primary mr-1">{floor}</h4>;
    // });
    const floor = [];
    for(let i = 0; i < floors.length; i++){
      if(sold[i]){
        floor.push(<h4 className="badge badge-primary mr-1 sold">{floors[i]}</h4>);
      } else {
        floor.push(<h4 className="badge badge-primary mr-1">{floors[i]}</h4>);
      }
      
    }

    const TypicalAppartmentsItemStyle = styled.div`
      margin: 15px 0px;
      border: 1px solid #d8dad6;
      padding: 15px 15px 0px 15px;
      border-radius: 10px;
      box-shadow: 0 3px 0 rgba(14, 41, 77, 0.1);
      margin-bottom: 20px;
      background: #fff;
      .badge {
        font-size: 13px;
        padding: 7px 3px 4px 6px;
        letter-spacing: 3px;
        &.sold{
          opacity: .8;
          background: #dedede;
        }
      }
      
      img {
        max-width: 100%;
        height: auto;
      }
      h4{
        margin-top:15px;
      }
      h6{
        font-size: 72px;
        margin-top:25px;
      }
    `;

    return (
      <TypicalAppartmentsItemStyle className="typical-appartments-item">
        <div className="row">
          <div className={classes} onTouchStart={this.handleTouch}>
            <TypicalAppartmentsItemSlider images={images} project={project} />
          </div>
          <div className="col-sm-5">
            <div className="projectinfo">
              <h4>{name}</h4>
              {floor}
              <h6>
                {area} მ<sup>2</sup>
              </h6>
            </div>
          </div>
        </div>
      </TypicalAppartmentsItemStyle>
    );
  }
}

const TypicalAppartmentsItemSlider = ({ images, project }) => {
  console.log(images);
  return (
    <Swiper
      id={`appartments-slider-${project}`}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      //   pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      speed={500}
      autoplay={{ disableOnInteraction: false }}
      loop
    >
      <SwiperSlide>
        <img src={images[0]} alt="Slide 1" key={0} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images[0]} alt="Slide 1" key={1} />
      </SwiperSlide>
    </Swiper>
  );
};
