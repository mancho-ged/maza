// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import completed1 from '../../images/completed-unit/010001_00000.jpg';
import completed2 from '../../images/completed-unit/010002_00000.jpg';
import completed3 from '../../images/completed-unit/010003_00000.jpg';
import completed4 from '../../images/completed-unit/010004_00000.jpg';
import completed5 from '../../images/completed-unit/010005_00000.jpg';


// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const CompletedUnitsThumbsSlider = () => {  
  return (
    <Swiper
      id="appartments-slider"
      direction="vertical"
      spaceBetween={60}
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
            <img src={completed1} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
            <img src={completed2} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
            <img src={completed3} alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
            <img src={completed4} alt="Slide 4" />
      </SwiperSlide>
      <SwiperSlide>
            <img src={completed5} alt="Slide 5" />
      </SwiperSlide>
      
    </Swiper>
  );
};

export default CompletedUnitsThumbsSlider;
