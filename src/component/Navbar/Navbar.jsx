import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/newlogo.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import clearPersistedData from "../../clearPersistedData";
import { clearSession, getToken } from "../../session";
import NoImg from "../../assets/NoImage.jpg";
import NavBar from "../../NewComponent/Navbar/NavBar";
import { resetuserExp } from "../../slice/askExpSlice";

const Navbar = ({ onLoginClick }) => {
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { profileData } = useSelector((state) => state.userDetail);
  const { profile_picture } = profileData;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    googleLogout();
    clearPersistedData();
    navigate("/");
    setShowDrop(false);
    clearSession();
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowDrop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const navbarClass = scrolled ? "bg-sky-100/95" : "bg-transparent";

  return (
    <>
      {getToken() ? (
        <div className="h-[5rem] print:hidden">
          <nav
            className={`flex  w-full ${navbarClass} fixed top-0  z-50 justify-between items-center transition ease-in-out delay-150 duration-350 print:hidden`}
          >
            {/* logo */}
            <Link to={getToken() ? "/resumes" : "/"}>
              <div className="logo w-[130px] md:w-[140px] m-5 md:m-0 ml-[2rem] md:ml-[8rem]">
                <img src={Logo} alt="logo-img" />
              </div>
            </Link>
            {/* Navlinks */}
            <div>
              <ul className="hidden md:flex text-xs font-bold md:text-sm cursor-pointer">
                {getToken() && (
                  <>
                    <li className="m-4 transition-all delay-150 hover:text-sky-500 duration-300">
                      <Link
                        to="/web-portfolio"
                        className={`${
                          location.pathname === "/web-portfolio"
                            ? "text-sky-500 text-xm leading-tight"
                            : ""
                        }`}
                      >
                        WEB PORTFOLIO
                      </Link>
                    </li>
                    <li className="m-4 transition-all delay-150 hover:text-sky-500 duration-300">
                      <Link
                        to="/company-list"
                        className={`${
                          location.pathname === "/company-list"
                            ? "text-sky-500 text-sm uppercase leading-tight"
                            : ""
                        }`}
                      >
                        JOBS
                      </Link>
                    </li>
                    <Link
                      to="/pricing-plans"
                      className={`${
                        location.pathname === "/pricing-plans"
                          ? "text-sky-500 text-xm leading-tight"
                          : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <li className="m-4 transition-all delay-150 hover:text-sky-500 duration-300">
                        PRICING
                      </li>
                    </Link>
                    <Link
                      to="/resumes"
                      className={`${
                        location.pathname === "/resumes"
                          ? "text-sky-500 text-xm leading-tight"
                          : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <li className="m-4 transition-all delay-150 hover:text-sky-500 duration-300">
                        MY RESUMES
                      </li>
                    </Link>
                    <Link
                      to="/my-document"
                      className={`${
                        location.pathname === "/my-document"
                          ? "text-sky-500 text-xm leading-tight"
                          : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <li className="m-4 uppercase transition-all delay-150 hover:text-sky-500 duration-300">
                        MY Documents
                      </li>
                    </Link>
                  </>
                )}
                <Link
                  to="/templates"
                  className={`${
                    location.pathname === "/templates"
                      ? "text-sky-500 text-xm leading-tight"
                      : ""
                  }`}
                >
                  <li
                    className="m-4 transition-all delay-150 hover:text-sky-500 duration-300"
                    onClick={() => dispatch(resetuserExp())}
                  >
                    TEMPLATES
                  </li>
                </Link>

                {getToken() ? (
                  <div className="relative inline-block text-left" ref={ref}>
                    <div>
                      <img
                        src={profile_picture ? profile_picture : NoImg}
                        alt="Profile"
                        onClick={() => setShowDrop(!showDrop)}
                        className="w-10 h-10 rounded-full  mx-2 cursor-pointer"
                      />
                    </div>
                    {showDrop && (
                      <div
                        className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex={-1}
                      >
                        <div className="py-1" role="none">
                          <ul>
                            <li>
                              <Link
                                to="/profile"
                                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                onClick={() => setShowDrop(false)}
                              >
                                My Profile
                              </Link>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-3"
                                onClick={() => handleLogout()}
                              >
                                Sign out
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <li className="m-2 p-2 bg-sky-600  rounded font-normal hover:bg-violet-600 text-fuchsia-50 w-20 text-center transition-all delay-150 duration-300">
                      <button onClick={onLoginClick}>JOIN</button>
                    </li>
                  </>
                )}
              </ul>
            </div>
            {/* Mobile menu */}
            <div className="md:hidden flex mx-4 cursor-pointer">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded focus:outline-none"
              >
                <div className="w-6 h-1 bg-black mb-1"></div>
                <div className="w-6 h-1 bg-black mb-1"></div>
                <div className="w-6 h-1 bg-black"></div>
              </button>
            </div>
            {/* Mobile menu items */}
            {mobileMenuOpen && (
              <div className="md:hidden absolute  top-[5.4rem] right-0 left-0 bg-sky-100/95 shadow-md py-2">
                <ul className="text-left font-bold">
                  <li className="m-4 transition-all delay-150 hover:text-sky-500 duration-300">
                    <Link
                      to="/web-portfolio"
                      className={`${
                        location.pathname === "/web-portfolio"
                          ? "text-sky-500 text-xm leading-tight"
                          : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      WEB PORTFOLIO
                    </Link>
                  </li>

                  <li className="m-4 transition-all delay-150 hover:text-sky-500 duration-300">
                    <Link
                      to="/company-list"
                      className={`${
                        location.pathname === "/company-list"
                          ? "text-sky-500 text-xm leading-tight"
                          : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      JOBS
                    </Link>
                  </li>

                  {getToken() && (
                    <>
                      <Link
                        to="/pricing-plans"
                        className={`${
                          location.pathname === "/pricing-plans"
                            ? "text-sky-500 text-xm leading-tight"
                            : ""
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <li className="m-4 transition-all delay-150 hover:text-sky-500 duration-300">
                          PRICING
                        </li>
                      </Link>
                      <Link
                        to="/resumes"
                        className={`${
                          location.pathname === "/resumes"
                            ? "text-sky-500 text-xm leading-tight"
                            : ""
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <li className="m-4 transition-all delay-150 hover:text-sky-500 duration-300">
                          MY RESUMES
                        </li>
                      </Link>
                    </>
                  )}
                  <Link
                    to="/templates"
                    className={`${
                      location.pathname === "/templates"
                        ? "text-sky-500 text-xm leading-tight"
                        : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <li className="m-4 transition-all delay-150 hover:text-sky-500 duration-300">
                      TEMPLATES
                    </li>
                  </Link>

                  {getToken() ? (
                    <div className="relative inline-block text-left" ref={ref}>
                      <div>
                        <img
                          src={profile_picture ? profile_picture : NoImg}
                          alt="Profile"
                          onClick={() => setShowDrop(!showDrop)}
                          className="w-10 h-10 rounded-full mx-4 cursor-pointer"
                        />
                      </div>
                      {showDrop && (
                        <div
                          className="absolute left-1 right-0 z-50 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabIndex={-1}
                        >
                          <div className="py-1" role="none">
                            {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}

                            <ul className="text-left">
                              <li>
                                <Link
                                  to="/profile"
                                  className="text-gray-700 text-left block w-full px-2 py-2  text-sm"
                                  onClick={() => {
                                    setShowDrop(false);
                                    setMobileMenuOpen(false);
                                  }}
                                >
                                  My Profile
                                </Link>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="text-gray-700 block w-full px-2 py-2 text-left text-sm"
                                  role="menuitem"
                                  tabIndex={-1}
                                  id="menu-item-3"
                                  onClick={() => handleLogout()}
                                >
                                  Sign out
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <li className="m-2 p-2 bg-sky-600  rounded font-normal hover:bg-violet-600 text-fuchsia-50 w-20 text-center transition-all delay-150 duration-300">
                        <button
                          onClick={() => {
                            onLoginClick();
                            setMobileMenuOpen(false);
                          }}
                        >
                          JOIN
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </nav>
        </div>
      ) : (
        <NavBar onLoginClick={onLoginClick} />
      )}
    </>
  );
};
export default Navbar;
