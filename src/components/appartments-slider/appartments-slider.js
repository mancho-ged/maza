// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import bina65_1 from '../../images/binebi/BINA-65-1.jpg';
import bina65_2 from '../../images/binebi/BINA-65-2.jpg';
import bina66_1 from '../../images/binebi/BINA-66-1.jpg';
import bina66_2 from '../../images/binebi/BINA-66-2.jpg';
import bina67_1 from '../../images/binebi/BINA-67-1.jpg';
import bina67_2 from '../../images/binebi/BINA-67-2.jpg';
import bina68_1 from '../../images/binebi/BINA-68-1.jpg';
import bina68_2 from '../../images/binebi/BINA-68-2.jpg';


// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const AppartmentsSlider = () => {
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
      id="appartments-slider"
      direction="vertical"
      spaceBetween={30}
      slidesPerView={2}
    //   navigation
    //   pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      speed={500}
      autoplay = {{disableOnInteraction:false}}
      allowTouchMove = {false}
      
      loop
    >
      <SwiperSlide>
            <img src={bina65_1} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
            <img src={bina65_2} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
            <img src={bina66_1} alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
            <img src={bina66_2} alt="Slide 4" />
      </SwiperSlide>
      <SwiperSlide>
            <img src={bina67_1} alt="Slide 5" />
      </SwiperSlide>
      <SwiperSlide>
            <img src={bina67_2} alt="Slide 6" />
      </SwiperSlide>
      <SwiperSlide>
            <img src={bina68_1} alt="Slide 7" />
      </SwiperSlide>
      <SwiperSlide>
            <img src={bina68_2} alt="Slide 7" />
      </SwiperSlide>
    </Swiper>
  );
};

export default AppartmentsSlider;
