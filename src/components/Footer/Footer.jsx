import img from "../../assets/image/logo.png";
import Container from "../Hooks/Container";

const Footer = () => {
  return (
    <div className="bg-[#7D0A0A]">
      <Container>
        <div className="">
          <footer className="footer p-10  text-white  py-10 ">
            <aside>
              <img className="w-[110px]" src={img} alt="" />
              <p>
                SIDDIKI & ASSOCIATES.
                <br /> Suit-302 (2nd Floor) 33 Court House
                street,(Agorbadtigoli) <br /> Katwali, Dhaka-1100 <br />{" "}
                Mobile-01793944999, 01600224388
              </p>
            </aside>
            <nav>
              <header className="footer-title">Services</header>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <header className="footer-title">Company</header>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <header className="footer-title">Legal</header>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </footer>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
