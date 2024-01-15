import { Link } from "react-router-dom";
import { MdEmail,MdOutlinePhone } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Container from "../../Hooks/Container";


const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link className=" hover:bg-[#FF004D]" to="/">HOME</Link>
      </li>
      <li>
        <Link className=" hover:bg-[#FF004D]"  to="/ourTeam">OUR TEAM</Link>
      </li>
      <li>
        <Link className=" hover:bg-[#FF004D]"  to="/photo">PHOTO</Link>
      </li>
      <li>
        <Link className=" hover:bg-[#FF004D]"  to="/practiceArea">PRACTICE AREA</Link>
      </li>
      <li>
        <Link className=" hover:bg-[#FF004D]"  to="/ourClients">OUR CLIENTS</Link>
      </li>
      <li>
        <Link className=" hover:bg-[#FF004D]"  to="/library">LIBRARY</Link>
      </li>
      <li>
        <Link className=" hover:bg-[#FF004D]"  to="/reportedCase">REPORTED CASE</Link>
      </li>
      <li>
        <Link className=" hover:bg-[#FF004D]"  to="/articlesBlog">ARTICLES & BLOG</Link>
      </li>
      <li>
        <Link className=" hover:bg-[#FF004D]"  to="/faqS">FAQs</Link>
      </li>
      <li>
        <Link className=" hover:bg-[#FF004D]"  to="/applyNow">APPLY NOW</Link>
      </li>
      <li>
        <Link className=" hover:bg-[#FF004D]"  to="/contactUs">CONTACT US</Link>
      </li>
    </>
  );
  return (
    <div >
    <Container>
    <div>
      <div className="  text-white ">
     
      <div className="navbar-center flex ">
    <a className=" ml-96 text-center text-3xl font-bold ">SIDDIKI & ASSOCIATES</a>
    </div>
    <div>
      <div className=" flex justify-end items-center">
      <MdOutlinePhone />
          <span className=" mr-5">01793944999, 01600224388</span>
        </div>
        <div className=" flex justify-end items-center">
        <MdEmail />
          <span className=" mr-5">nazmulkhan416@gmail.com</span>
        </div>
        <br />
       <div className=" flex  justify-end gap-4 items-center mr-20">
       <div className=" flex   gap-4 ">
        <FaYoutube /> 
        </div>
        <div className=" flex   ">
       <FaLinkedin /> 
        </div>
        <div className=" flex   ">
        <FaFacebook />
        </div>
       </div>
       </div>
      
      </div>
     
      <div className="">
        {/* second navbar */}
        <div className="navbar   text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl"></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            {/* <a className="btn"></a> */}
          </div>
        </div>
      </div>
    </div>
    </Container>
    </div>
  );
};

export default Navbar;
