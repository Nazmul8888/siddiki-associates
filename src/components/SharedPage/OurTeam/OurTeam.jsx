import './ourteam.css'
import title from '../../../assets/our Team/wood-clipart-wood-beam-7 (1).png'

import img1 from '../../../assets/our Team/barrister-bodruddoza_050e48.png'
import img2 from '../../../assets/our Team/adv-azharul-islam_bd0848.png'
import img3 from '../../../assets/our Team/adv-mizanur-rahman_587dd8.png'
import img4 from '../../../assets/our Team/adv-shahidul-islam_8e5297.png'
import img5 from '../../../assets/our Team/adv-zibon-nesa-mukti_3b45e4.png'
import img6 from '../../../assets/our Team/kazi-zawad-bodruddoza_d9b7b4.png'
import img7 from '../../../assets/our Team/md.-solaiman-hossain_4800cf.png'
import img8 from '../../../assets/our Team/nafisa-bodruddoza-neeha_999dbf.png'
import img9 from '../../../assets/our Team/tahsina-ahmed-maliha_3ab2d6.png'
import Container from '../../Hooks/Container'

const OurTeam = () => {
    return (
        <Container>
        <div className=''>
        <div className=' flex justify-evenly lg:w-1/2 relative ml-96'>
           <img className=' items-center' src={title} alt="" />
           <h1 className=" page  ">Our Team</h1>
        </div>
        <div className=' '>
            <div className='flex justify-evenly items-center'>
                <img className=' w-56' src={img1} alt="" />
            </div>
            <div className=' flex justify-evenly items-center'>
                <img className=' w-56' src={img2} alt="" />
                <img className=' w-56' src={img3} alt="" />
                <img className=' w-56' src={img4} alt="" />  
                <img className=' w-56' src={img5} alt="" />
                
            </div>
            <div className=' flex justify-evenly items-center'>
            <img className=' w-56' src={img6} alt="" />
                <img className=' w-56' src={img7} alt="" />
                <img className=' w-56' src={img8} alt="" />
                <img className=' w-56' src={img9} alt="" />
            </div>
        </div>
        </div>
        </Container>
    );
};

export default OurTeam;