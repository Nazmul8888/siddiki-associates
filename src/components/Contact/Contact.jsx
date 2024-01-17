
import './contact.css'

const Contact = () => {
    
    return (
        <div className='mainMenuOverlay mainMenuOverlay.open floating2 mainMenuOverlay.open  ' >
           <div className='itemMenu .mainMenuOverlay .itemMenuBox.contact mainMenuOverlay.open .itemMenuBox '><img src="https://i.ibb.co/HYW6y3M/email.png" alt="" />
           </div> 
          
           <div className='itemMenu .mainMenuOverlay .itemMenuBox.contact mainMenuOverlay.open .itemMenuBox '>
           <a href="https://www.linkedin.com/feed/" target='blank'>
           <img src="https://i.ibb.co/b1SfR7b/fb.png" alt="" />
           </a>
           </div>
         
           <div 
           className='itemMenu .mainMenuOverlay .itemMenuBox.contact mainMenuOverlay.open .itemMenuBox'><img src="https://i.ibb.co/KD474NM/link.png" alt="" />
           
           </div> 
           <div className='itemMenu .mainMenuOverlay .itemMenuBox.contact mainMenuOverlay.open .itemMenuBox'><img src="https://i.ibb.co/XsZTp1G/location.png" alt="" />
           </div> 
           <div className='itemMenu .mainMenuOverlay .itemMenuBox.contact mainMenuOverlay.open .itemMenuBox'><img src="https://i.ibb.co/mHcRmcn/whatsapp.png" alt="" />
           </div> 
           <div className='itemMenu .mainMenuOverlay .itemMenuBox.contact mainMenuOverlay.open .itemMenuBox'><img src="https://i.ibb.co/nD6x0Zm/youtube.png" alt="" />
           </div> 
           <div className=' '>
            <img className=' w-24 ' src="https://i.ibb.co/nrDNgcJ/contactt.png" alt="" />
           </div>
        </div>
    );
};

export default Contact;