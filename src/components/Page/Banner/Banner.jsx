

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import img1 from '../../../assets/banner/banner -1 .png'
import img2 from '../../../assets/banner/banner -2 .png'
import img3 from '../../../assets/banner/banner -3.jpg'
import img4 from '../../../assets/banner/banner -4.jpg'
import Container from '../../Hooks/Container';

const Banner = () => {
    return (
        <div className='bg-[#7D0A0A] '>
       <Container>
         <div>
           <div>
           <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img className=' ml-14' src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className=' ml-14' src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className=' ml-14'src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img className=' ml-14' src={img4} alt="" /></SwiperSlide>
        
      </Swiper>
           </div>
        </div>
        </Container>
        </div>
       
    );
};

export default Banner;