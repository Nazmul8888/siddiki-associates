
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/banner/banner -1 .png'
import img2 from '../../../assets/banner/banner -2 .png'
import img3 from '../../../assets/banner/banner -3.jpg'
import img4 from '../../../assets/banner/banner -4.jpg'
import Container from '../../Hooks/Container';

const Banner = () => {
    return (
        <div >
       <Container>
         <div>
           <div>
           <Carousel>
                <div>
                    <img src={img1} />
                   
                </div>
                <div>
                    <img src={img2} />
                   
                </div>
                <div>
                    <img src={img3} />
                   
                </div>
                <div>
                    <img src={img4} />
                   
                </div>
                
            </Carousel>
           </div>
        </div>
        </Container>
        </div>
       
    );
};

export default Banner;