import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


import img1 from '../../../assets/New folder/aviation-law_195ac6.jpg'
import img2 from '../../../assets/New folder/banking_47fa70.jpg'
import img3 from '../../../assets/New folder/commercial_e28b5b.jpg'
import img4 from '../../../assets/New folder/company_4ad982.jpg'
import img5 from '../../../assets/New folder/criminal-law_d862e1.jpg'
import img6 from '../../../assets/New folder/employment_177d9a.jpg'
import img7 from '../../../assets/New folder/family-law_5376c3.jpg'
import img8 from '../../../assets/New folder/pro-bono_3f03b9.jpg'
import img9 from '../../../assets/New folder/tax_68a439.jpg'
import Container from '../../Hooks/Container';





const Practice = () => {
    return (
        <div className='bg-orange-500 py-10'>
        <Container>
            <div>
            <div>
              <h1 className=' text-4xl ml-12 text-white'>Practice Areas</h1>
              <p className=' ml-12 text-white'>Our lawyers bring a wealth of experience and expertise to the table, having handled a wide range of complex legal matters, from <br /> from Corporate and Commercial matters to Civil and Criminal litigation; Arbitration, Admiralty, Banking, Intellectual Property Law, Aviation law, Family <br /> matters, Real Estate, etc. Click on the tabs below for more information.</p>
            </div>
            <br />
            <br />
           
            <Swiper
        slidesPerView={6}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
            <img className='w-[245px]' src={img1} alt="" />
            <h1 className='  text-amber-600 font-bold text-2xl text-center bg-[#F8F4EC]   mr-9'>Aviation Law</h1>
              <br />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-[245px]' src={img2} alt="" />
            <h1 className='  text-amber-600 font-bold text-2xl text-center bg-[#F8F4EC]   mr-9'>Banking & Finance</h1>
            
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-[245px]' src={img3} alt="" />
            <h1 className='  text-amber-600 font-bold text-2xl text-center bg-[#F8F4EC]   mr-9'>Corporate Law</h1>
            
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-[245px]' src={img4} alt="" />
            <h1 className='  text-amber-600 font-bold text-2xl text-center bg-[#F8F4EC]   mr-9'>Commercial Law</h1>
           
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-[245px]' src={img5} alt="" />
            <h1 className='  text-amber-600 font-bold text-2xl text-center bg-[#F8F4EC]   mr-9'>Criminal Law</h1>
            
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-[245px]' src={img6} alt="" />
            <h1 className='  text-amber-600 font-bold text-2xl text-center bg-[#F8F4EC]   mr-9'>Employment Law</h1>
            
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-[245px]' src={img7} alt="" />
            <h1 className='  text-amber-600 font-bold text-2xl text-center bg-[#F8F4EC]   mr-9'>Family Law</h1>
            
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-[245px]' src={img8} alt="" />
            <h1 className='  text-amber-600 font-bold text-2xl text-center bg-[#F8F4EC]   mr-9'>Pro Bonno</h1>
            
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-[245px]' src={img9} alt="" />
            <h1 className='  text-amber-600 font-bold text-2xl text-center bg-[#F8F4EC]   mr-9'>Tax Law</h1>
            
        </SwiperSlide>
        <br />
      </Swiper>
      </div>
        </Container>
        </div>
        
       
    );
};

export default Practice;