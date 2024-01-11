import './photo.css'
import img from '../../../assets/our Team/wood-clipart-wood-beam-7 (1).png'

import img1 from '../../../assets/gallery/chamber1_75e5d5.jpg'
import img2 from '../../../assets/gallery/conference-&-seminars_c888d3.jpg'
import img3 from '../../../assets/gallery/lnj-team_452c03.jpg'
import img4 from '../../../assets/gallery/other_442fe9.jpg'
import Container from '../../Hooks/Container'
const Photo = () => {
    return (
        <Container>
        <div>
        <div className=' flex justify-evenly lg:w-1/2 relative ml-96'>
           <img className=' items-center' src={img} alt="" />
           <h1 className=" pho  ">Photo Gallery</h1>
        </div>

        <div className=' flex justify-evenly '>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
        </div>
        </Container>
    );
};

export default Photo;