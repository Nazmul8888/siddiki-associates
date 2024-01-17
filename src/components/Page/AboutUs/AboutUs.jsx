import img2 from '../../../assets/image/about_thumbnail_673cfa.png'
import Container from '../../Hooks/Container';



const AboutUs = () => {
    return (
        <div >
        <Container>
       
         <div >
            <div className=' flex justify-evenly  items-center '>
                <div>
                    <img className=' w-96' src={img2} alt="" />
                </div>
                <div>
                <h1 className=' text-4xl font-bold text-white '>About Us</h1>
                <br />
                <p className=' text-white italic'><span className=' text-red-500 italic'>Welcome</span>, <br />
            In 2012, Established by Advocate, N A Siddiki has hard work & honestly as a Law Chamber named Siddiki & Assocviates <br /> in Dhaka, Bangladesh. Over the years, our chamber has amassed a strong legal reputation as services like litigation,<br /> Documentations with Tax in house or in court. Our team is highly skilled & dedicated including Corporate, Civil & also Criminal defence <br />lawyers. So think & trust to us positively.
</p>
                </div>
            </div>
        </div>
        </Container>
        </div>
      
    );
};

export default AboutUs;