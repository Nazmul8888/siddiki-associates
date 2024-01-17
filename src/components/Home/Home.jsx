import Contact from "../Contact/Contact";
import AboutUs from "../Page/AboutUs/AboutUs";
import Address from "../Page/Address/Address";
import Banner from "../Page/Banner/Banner";
import Blog from "../Page/Blog/Blog";
import Client from "../Page/Client/Client";
import Practice from "../Page/Practice/Practice";
import WorkDetails from "../Page/WorkDetails/WorkDetails";
import OurLawyers from "../SharedPage/OurTeam/OurLawyers";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AboutUs></AboutUs>
          <Practice></Practice>
          <OurLawyers></OurLawyers>
          <Client></Client>
          <Blog></Blog>
          <WorkDetails></WorkDetails>
          <Address></Address>
          <Contact></Contact>
          
        </div>
    );
};

export default Home;