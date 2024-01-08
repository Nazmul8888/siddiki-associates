import img2 from '../../../assets/image/about_thumbnail_673cfa.png'
import Container from '../../Hooks/Container';

const AboutUs = () => {
    return (
       
         <div className='bg-[#7D0A0A]'>
            <div className=' flex justify-evenly  items-center ml-40'>
                <div>
                    <img className=' w-96' src={img2} alt="" />
                </div>
                <div>
                <h1 className=' text-4xl font-bold text-white '>About Us</h1>
                <br />
                <p className=' text-white'>Established in 1995 by Senior Advocate, Barrister Md. Bodruddoza, Kazi Law Chamber has swiftly <br /> emerged as one of the top law firms in Dhaka, Bangladesh. Over the years, our chamber has <br /> garnered a strong reputation as a premier full-service law firm for its exceptional legal counselling, <br /> documentation and representation services in and out of the Courtroom. Our team of highly skilled <br /> and dedicated lawyers, including company lawyers, corporate lawyers, civil lawyers, and criminal <br /> defence lawyers, are renowned for their unwavering determination, hard work, and consistent delivery <br />of the best legal aid to businesses and individuals within and beyond the borders <br /> of Bangladesh.</p>
                </div>
            </div>
        </div>
      
    );
};

export default AboutUs;