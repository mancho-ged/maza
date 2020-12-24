// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import facade1 from '../../images/facade/01_00000.jpg';
import facade2 from '../../images/facade/02_00000.jpg';
import facade3 from '../../images/facade/03_00000.jpg';
import facade4 from '../../images/facade/04_00000.jpg';
import facade5 from '../../images/facade/05_00000.jpg';
import facade6 from '../../images/facade/06_00000.jpg';
import facade7 from '../../images/facade/07_00000.jpg';


// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const FacadeSlider = () => {
  const slides = [];
  for (let i = 0; i < 5; i++) {
      let name = "facade" + i;
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <img
          src={ {name} }
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }
  return (
    <Swiper
      id="facade-slider"
      spaceBetween={50}
      slidesPerView={1}
      navigation = {false}
      pagination={false}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
      speed={500}
      autoplay
      loop
      allowTouchMove = {false}
    >
      <SwiperSlide>
            <img src={facade1} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
            <img src={facade2} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
            <img src={facade3} alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
            <img src={facade4} alt="Slide 4" />
      </SwiperSlide>
      <SwiperSlide>
            <img src={facade5} alt="Slide 5" />
      </SwiperSlide>
      <SwiperSlide>
            <img src={facade6} alt="Slide 6" />
      </SwiperSlide>
      <SwiperSlide>
            <img src={facade7} alt="Slide 7" />
      </SwiperSlide>
    </Swiper>
  );
};

export default FacadeSlider;
