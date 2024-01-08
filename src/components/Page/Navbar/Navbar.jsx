import { Link } from "react-router-dom";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/ourTeam">OUR TEAM</Link>
      </li>
      <li>
        <Link to="/photo">PHOTO</Link>
      </li>
      <li>
        <Link to="/practiceArea">PRACTICE AREA</Link>
      </li>
      <li>
        <Link to="/ourClients">OUR CLIENTS</Link>
      </li>
      <li>
        <Link to="/library">LIBRARY</Link>
      </li>
      <li>
        <Link to="/reportedCase">REPORTED CASE</Link>
      </li>
      <li>
        <Link to="/articlesBlog">ARTICLES & BLOG</Link>
      </li>
      <li>
        <Link to="/faqS">FAQs</Link>
      </li>
      <li>
        <Link to="/applyNow">APPLY NOW</Link>
      </li>
      <li>
        <Link to="/contactUs">CONTACT US</Link>
      </li>
    </>
  );
  return (
   
      <div>
        <div className="navbar bg-[#7D0A0A] text-white">
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
            <a className="btn btn-ghost text-xl">SIDDIKI & ASSOCIATES</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </div>
    
  );
};

export default Navbar;
