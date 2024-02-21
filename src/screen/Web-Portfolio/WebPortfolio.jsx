import React, { useEffect, useState } from "react";
import temp1 from "./temp1.png";
import temp2 from "./temp2.png";
import temp3 from "./temp3.png";
import temp4 from "./temp4.jpg";
import temp5 from "./temp3.jpg";
import temp6 from "./temp6.png";
import temp7 from "./temp7.png";
import temp8 from "./temp8.png";
import temp9 from "./temp9.png";
import temp10 from "./proman.png";
import temp11 from "./myport.png";
import temp12 from "./steller.png";
import temp13 from "./temp13.png";
import temp14 from "./temp14.png";
import temp15 from "./temp15.png";
import ModernPreview from "./Preview1.png";
import Preview2 from "./Preview2.png";
import Preview3 from "./Preview3.png";
import Preview4 from "./Preview4.png";
import Preview5 from "./Preview5.png";
import Preview6 from "./Preview6.png";
import Preview7 from "./Preview7.png";
import Preview8 from "./Preview8.png";
import Preview9 from "./Preview9.png";
import { savePortfolio } from "../../services/ApiServices";
import { useLocation } from "react-router";
import { getAllResume } from "../../services/ApiServices";
import showNotification from "../../services/NotificationService";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import link from "../../assets/link.png";
export const WebPortfolio = () => {
  const location = useLocation();

  const [showModal, setShowModal] = React.useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [port, setPortfolio] = useState("");
  const { profileData } = useSelector((state) => state.userDetail);
  const [subs, setSubs] = useState(null);
  const selectedProfileID = useSelector((state) => state.portfolioSelction);
  useEffect(() => {
    getAllProfile();
  }, []);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };
  const navigate = useNavigate();
  let planId = new URLSearchParams(location.search).get("profile");

  const getAllProfile = async () => {
    try {
      let response = await getAllResume();
      if (response?.data?.status == 200) {
        setProfiles(response?.data?.data);
        setSubs(response?.data?.subscription?.subscription);
      } else {
        setProfiles([]);
      }
    } catch (error) {
      setProfiles([]);
      console.log(error);
    }
  };
  const handlesetPortfolio = async (portfolioID) => {
    if (selectedProfileID !== "") {
      let formData = new FormData();
      let data = {
        primary_id: portfolioID,
        profile_id: selectedProfileID,
      };
      // formData.append("web_portfolio",JSON.stringify(data));

      try {
        let response = await savePortfolio({ web_portfolio: data });
        if (response?.status == 200) {
          // getAllProfile();
          showNotification("success", "Portfolio set successfully");

          handlePreview();
          // navigate("/web-portfolio")
        }
      } catch (error) {}
    } else {
      showNotification("danger", "Please select a profile");
    }
  };
  const handlePreview = (portfolio) => {
    if (profiles?.length !== 0) {
      navigate("/resumes");

      // window.open(
      //   `https://webportfolio.jotcv.com/${profileData?.username}`
      // );
    } else {
      showNotification("danger", "Please create a profile");
    }
  };

  const handleSubmit = () => {
    if (selectedProfile == null) {
      showNotification("danger", "Please select a profile");
    } else {
      window.open(
        `https://personal-portfolioweb1.netlify.app/${portfolio}/?profile=${selectedProfile?.id}`
      );
    }
  };
  return (
    <>
      <div>
        <div className="main ">
          <div className="my-5">
            <h1 className="text-3xl font-bold my-1 font-poppins text-center">
              Web Portfolios
            </h1>
            <p className="text-base w-[55%] mx-auto font-poppins text-center">
              Embark on a digital journey through innovation and creativity –
              Explore our web portfolio where every click tells a captivating
              story of design excellence!
            </p>
          </div>
          <div className="flex flex-wrap justify-center mb-10 items-center gap-7">
            <div className=" shadow-xl rounded-lg ">
              <img className="w-[33rem] rounded-t-lg" src={temp1} alt="" />
              <p className="text-center text-lg">
                Modern{" "}
                <div className="flex justify-between p-3">
                  <span
                    className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit p-1 bg-blue-600 text-white mx-2  px-2  cursor-pointer text-lg capitalize"
                    onClick={() => {
                      setPortfolio(ModernPreview);

                      setShowModal(true);
                    }}
                  >
                    <br />
                    <p className="text-base font-semibold  px-1.5">Preview</p>
                  </span>

                  {subs !== null ? (
                    location.state == 1 ? (
                      <span className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1 mx-2  px-2  cursor-pointer text-lg capitalize">
                        <br />
                        <p className="text-base font-semibold px-1.5">
                          Selected
                        </p>
                      </span>
                    ) : (
                      <span
                        className="relative flex bg-slate-50  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1  mx-2  px-2  cursor-pointer text-lg capitalize"
                        onClick={() => {
                          handlesetPortfolio(1);
                        }}
                      >
                        <br />
                        <p className="text-base font-semibold px-1.5 flex gap-3 items-center">
                          <img className="w-4 h-4" src={link} alt="" /> Set Url
                        </p>
                      </span>
                    )
                  ) : (
                    <span
                      className="relative flex bg-slate-50 justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black  mx-2  px-2  cursor-pointer text-lg capitalize"
                      onClick={() => {
                        navigate("/pricing-plans");
                      }}
                    >
                      <br />
                      <p className="text-sm font-semibold px-1.5 flex gap-3 items-center">
                        <img className="w-4 h-4" src={link} alt="" />
                        Set Url
                      </p>
                    </span>
                  )}
                </div>
              </p>
            </div>
            <div className=" shadow-xl rounded-lg ">
              <img className="w-[33rem] rounded-t-lg " src={temp2} alt="" />
              <p className="text-center text-lg">
                Basic
                <div className="flex justify-between p-3">
                  <span
                    className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-white bg-blue-600 mx-2 p-1 px-2  cursor-pointer text-lg capitalize"
                    onClick={() => {
                      setShowModal(true);
                      setPortfolio(Preview2);
                    }}
                  >
                    <br />
                    <p className="text-base font-semibold px-1.5">Preview</p>
                  </span>
                  {subs !== null ? (
                    location.state == 2 ? (
                      <span className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1 mx-2  px-2  cursor-pointer text-lg capitalize">
                        <br />
                        <p className="text-base font-semibold px-1.5">
                          Selected
                        </p>
                      </span>
                    ) : (
                      <span
                        className="relative flex bg-slate-50  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1  mx-2  px-2  cursor-pointer text-lg capitalize"
                        onClick={() => {
                          handlesetPortfolio(2);
                        }}
                      >
                        <br />
                        <p className="text-base font-semibold px-1.5 flex gap-3 items-center">
                          <img className="w-4 h-4" src={link} alt="" /> Set Url
                        </p>
                      </span>
                    )
                  ) : (
                    <span
                      className="relative flex bg-slate-50 justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black  mx-2  px-2  cursor-pointer text-lg capitalize"
                      onClick={() => {
                        navigate("/pricing-plans");
                      }}
                    >
                      <br />
                      <p className="text-sm font-semibold px-1.5 flex gap-3 items-center">
                        <img className="w-4 h-4" src={link} alt="" />
                        Set Url
                      </p>
                    </span>
                  )}
                </div>
              </p>
            </div>
            <div className=" shadow-xl rounded-lg ">
              <img className="w-[33rem]  rounded-t-lg" src={temp3} alt="" />
              <p className="text-center text-lg">
                Developer
                <div className="flex justify-between p-3">
                  <span
                    className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit p-1 text-white bg-blue-600  mx-2  px-2  cursor-pointer text-lg capitalize"
                    onClick={() => {
                      setShowModal(true);
                      setPortfolio(Preview3);
                    }}
                  >
                    <br />
                    <p className="text-base font-semibold px-1.5">Preview</p>
                  </span>
                  {subs !== null ? (
                    location.state == 3 ? (
                      <span className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1 mx-2  px-2  cursor-pointer text-lg capitalize">
                        <br />
                        <p className="text-base font-semibold px-1.5">
                          Selected
                        </p>
                      </span>
                    ) : (
                      <span
                        className="relative flex bg-slate-50  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1  mx-2  px-2  cursor-pointer text-lg capitalize"
                        onClick={() => {
                          handlesetPortfolio(3);
                        }}
                      >
                        <br />
                        <p className="text-base font-semibold px-1.5 flex gap-3 items-center">
                          <img className="w-4 h-4" src={link} alt="" /> Set Url
                        </p>
                      </span>
                    )
                  ) : (
                    <span
                      className="relative flex bg-slate-50 justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black  mx-2  px-2  cursor-pointer text-lg capitalize"
                      onClick={() => {
                        navigate("/pricing-plans");
                      }}
                    >
                      <br />
                      <p className="text-sm font-semibold px-1.5 flex gap-3 items-center">
                        <img className="w-4 h-4" src={link} alt="" />
                        Set Url
                      </p>
                    </span>
                  )}
                </div>
              </p>
            </div>
            <div className=" shadow-xl rounded-lg ">
              <img className="w-[33rem] rounded-t-lg" src={temp4} alt="" />
              <p className="text-center text-lg">
                Classic
                <div className="flex justify-between p-3">
                  <span
                    className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit bg-blue-600 text-white p-1 mx-2  px-2  cursor-pointer text-lg capitalize"
                    onClick={() => {
                      setShowModal(true);
                      setPortfolio(Preview4);
                    }}
                  >
                    <br />
                    <p className="text-base font-semibold px-1.5">Preview</p>
                  </span>
                  {subs !== null ? (
                    location.state == 4 ? (
                      <span className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1 mx-2  px-2  cursor-pointer text-lg capitalize">
                        <br />
                        <p className="text-base font-semibold px-1.5">
                          Selected
                        </p>
                      </span>
                    ) : (
                      <span
                        className="relative flex bg-slate-50  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1  mx-2  px-2  cursor-pointer text-lg capitalize"
                        onClick={() => {
                          handlesetPortfolio(4);
                        }}
                      >
                        <br />
                        <p className="text-base font-semibold px-1.5 flex gap-3 items-center">
                          <img className="w-4 h-4" src={link} alt="" /> Set Url
                        </p>
                      </span>
                    )
                  ) : (
                    <span
                      className="relative flex bg-slate-50 justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black  mx-2  px-2  cursor-pointer text-lg capitalize"
                      onClick={() => {
                        navigate("/pricing-plans");
                      }}
                    >
                      <br />
                      <p className="text-sm font-semibold px-1.5 flex gap-3 items-center">
                        <img className="w-4 h-4" src={link} alt="" />
                        Set Url
                      </p>
                    </span>
                  )}
                </div>
              </p>
            </div>
            <div className=" shadow-xl rounded-lg ">
              <img className="w-[33rem]  rounded-t-lg-md" src={temp5} alt="" />
              <p className="text-center text-lg">
                Pre-Modern
                <div className="flex justify-between p-3">
                  <span
                    className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-white bg-blue-600 p-1  mx-2  px-2  cursor-pointer text-lg capitalize"
                    onClick={() => {
                      setShowModal(true);
                      setPortfolio(Preview5);
                    }}
                  >
                    <br />
                    <p className="text-base font-semibold px-1.5">Preview</p>
                  </span>
                  {subs !== null ? (
                    location.state == 5 ? (
                      <span className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1 mx-2  px-2  cursor-pointer text-lg capitalize">
                        <br />
                        <p className="text-base font-semibold px-1.5">
                          Selected
                        </p>
                      </span>
                    ) : (
                      <span
                        className="relative flex bg-slate-50  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1  mx-2  px-2  cursor-pointer text-lg capitalize"
                        onClick={() => {
                          handlesetPortfolio(5);
                        }}
                      >
                        <br />
                        <p className="text-base font-semibold px-1.5 flex gap-3 items-center">
                          <img className="w-4 h-4" src={link} alt="" /> Set Url
                        </p>
                      </span>
                    )
                  ) : (
                    <span
                      className="relative flex bg-slate-50 justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black  mx-2  px-2  cursor-pointer text-lg capitalize"
                      onClick={() => {
                        navigate("/pricing-plans");
                      }}
                    >
                      <br />
                      <p className="text-sm font-semibold px-1.5 flex gap-3 items-center">
                        <img className="w-4 h-4" src={link} alt="" />
                        Set Url
                      </p>
                    </span>
                  )}
                </div>
              </p>
            </div>
            <div className=" shadow-xl rounded-lg ">
              <img className="w-[33rem]  rounded-t-lg" src={temp6} alt="" />
              <p className="text-center text-lg">
                Virtual
                <div className="flex justify-between p-3">
                  <span
                    className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-white bg-blue-600  mx-2  px-2  cursor-pointer text-lg capitalize"
                    onClick={() => {
                      setShowModal(true);
                      setPortfolio(Preview6);
                    }}
                  >
                    <br />
                    <p className="text-base font-semibold px-1.5">Preview</p>
                  </span>
                  {subs !== null ? (
                    location.state == 6 ? (
                      <span className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1 mx-2  px-2  cursor-pointer text-lg capitalize">
                        <br />
                        <p className="text-base font-semibold px-1.5">
                          Selected
                        </p>
                      </span>
                    ) : (
                      <span
                        className="relative flex bg-slate-50  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1  mx-2  px-2  cursor-pointer text-lg capitalize"
                        onClick={() => {
                          handlesetPortfolio(6);
                        }}
                      >
                        <br />
                        <p className="text-base font-semibold px-1.5 flex gap-3 items-center">
                          <img className="w-4 h-4" src={link} alt="" /> Set Url
                        </p>
                      </span>
                    )
                  ) : (
                    <span
                      className="relative flex bg-slate-50 justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black  mx-2  px-2  cursor-pointer text-lg capitalize"
                      onClick={() => {
                        navigate("/pricing-plans");
                      }}
                    >
                      <br />
                      <p className="text-sm font-semibold px-1.5 flex gap-3 items-center">
                        <img className="w-4 h-4" src={link} alt="" />
                        Set Url
                      </p>
                    </span>
                  )}
                </div>
              </p>
            </div>
            <div className=" shadow-xl rounded-lg ">
              <img className="w-[33rem] rounded-t-lg" src={temp7} alt="" />
              <p className="text-center text-lg">
                Excellent
                <div className="flex justify-between p-3">
                  <span
                    className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit p-1 text-white bg-blue-600  mx-2  px-2  cursor-pointer text-lg capitalize"
                    onClick={() => {
                      setShowModal(true);
                      setPortfolio(Preview7);
                    }}
                  >
                    <br />
                    <p className="text-base font-semibold px-1.5">Preview</p>
                  </span>
                  {subs !== null ? (
                    location.state == 7 ? (
                      <span className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1 mx-2  px-2  cursor-pointer text-lg capitalize">
                        <br />
                        <p className="text-base font-semibold px-1.5">
                          Selected
                        </p>
                      </span>
                    ) : (
                      <span
                        className="relative flex bg-slate-50  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1  mx-2  px-2  cursor-pointer text-lg capitalize"
                        onClick={() => {
                          handlesetPortfolio(7);
                        }}
                      >
                        <br />
                        <p className="text-base font-semibold px-1.5 flex gap-3 items-center">
                          <img className="w-4 h-4" src={link} alt="" /> Set Url
                        </p>
                      </span>
                    )
                  ) : (
                    <span
                      className="relative flex bg-slate-50 justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black  mx-2  px-2  cursor-pointer text-lg capitalize"
                      onClick={() => {
                        navigate("/pricing-plans");
                      }}
                    >
                      <br />
                      <p className="text-sm font-semibold px-1.5 flex gap-3 items-center">
                        <img className="w-4 h-4" src={link} alt="" />
                        Set Url
                      </p>
                    </span>
                  )}
                </div>
              </p>
            </div>
            <div className=" shadow-xl rounded-lg ">
              <img className="w-[33rem] rounded-t-lg" src={temp8} alt="" />
              <p className="text-center text-lg">
                New Modern
                <div className="flex justify-between p-3">
                  <span
                    className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-white bg-blue-600 p-1 mx-2  px-2  cursor-pointer text-lg capitalize"
                    onClick={() => {
                      setShowModal(true);
                      setPortfolio(Preview8);
                    }}
                  >
                    <br />
                    <p className="text-base font-semibold px-1.5">Preview</p>
                  </span>
                  {subs !== null ? (
                    location.state == 8 ? (
                      <span className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1 mx-2  px-2  cursor-pointer text-lg capitalize">
                        <br />
                        <p className="text-base font-semibold px-1.5">
                          Selected
                        </p>
                      </span>
                    ) : (
                      <span
                        className="relative flex bg-slate-50  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1  mx-2  px-2  cursor-pointer text-lg capitalize"
                        onClick={() => {
                          handlesetPortfolio(8);
                        }}
                      >
                        <br />
                        <p className="text-base font-semibold px-1.5 flex gap-3 items-center">
                          <img className="w-4 h-4" src={link} alt="" /> Set Url
                        </p>
                      </span>
                    )
                  ) : (
                    <span
                      className="relative flex bg-slate-50 justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black  mx-2  px-2  cursor-pointer text-lg capitalize"
                      onClick={() => {
                        navigate("/pricing-plans");
                      }}
                    >
                      <br />
                      <p className="text-sm font-semibold px-1.5 flex gap-3 items-center">
                        <img className="w-4 h-4" src={link} alt="" />
                        Set Url
                      </p>
                    </span>
                  )}
                </div>
              </p>
            </div>
            <div className=" shadow-xl rounded-lg ">
              <img className="w-[33rem] rounded-t-lg" src={temp9} alt="" />
              <p className="text-center text-lg">
                Creative
                <div className="flex justify-between p-3">
                  <span
                    className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-white bg-blue-600 p-1 mx-2  px-2  cursor-pointer text-lg capitalize"
                    onClick={() => {
                      setShowModal(true);
                      setPortfolio(Preview9);
                    }}
                  >
                    <br />
                    <p className="text-base font-semibold px-1.5">Preview</p>
                  </span>
                  {subs !== null ? (
                    location.state == 9 ? (
                      <span className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1 mx-2  px-2  cursor-pointer text-lg capitalize">
                        <br />
                        <p className="text-base font-semibold px-1.5">
                          Selected
                        </p>
                      </span>
                    ) : (
                      <span
                        className="relative flex bg-slate-50  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1  mx-2  px-2  cursor-pointer text-lg capitalize"
                        onClick={() => {
                          handlesetPortfolio(9);
                        }}
                      >
                        <br />
                        <p className="text-base font-semibold px-1.5 flex gap-3 items-center">
                          <img className="w-4 h-4" src={link} alt="" /> Set Url
                        </p>
                      </span>
                    )
                  ) : (
                    <span
                      className="relative flex bg-slate-50 justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black  mx-2  px-2  cursor-pointer text-lg capitalize"
                      onClick={() => {
                        navigate("/pricing-plans");
                      }}
                    >
                      <br />
                      <p className="text-sm font-semibold px-1.5 flex gap-3 items-center">
                        <img className="w-4 h-4" src={link} alt="" />
                        Set Url
                      </p>
                    </span>
                  )}
                </div>
              </p>
            </div>
            <div className=" shadow-xl rounded-lg ">
              <img className="w-[33rem]  rounded-t-lg" src={temp11} alt="" />
              <p className="text-center text-lg">
                Myport
                <div className="flex justify-between p-3">
                  <span
                    className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-white bg-blue-600 p-1  mx-2  px-2  cursor-pointer text-lg capitalize"
                    onClick={() => {
                      setShowModal(true);
                      setPortfolio(Preview9);
                    }}
                  >
                    <br />
                    <p className="text-base font-semibold px-1.5">Preview</p>
                  </span>
                  {subs !== null ? (
                    location.state == 11 ? (
                      <span className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1 mx-2  px-2  cursor-pointer text-lg capitalize">
                        <br />
                        <p className="text-base font-semibold px-1.5">
                          Selected
                        </p>
                      </span>
                    ) : (
                      <span
                        className="relative flex bg-slate-50  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1  mx-2  px-2  cursor-pointer text-lg capitalize"
                        onClick={() => {
                          handlesetPortfolio(11);
                        }}
                      >
                        <br />
                        <p className="text-base font-semibold px-1.5 flex gap-3 items-center">
                          <img className="w-4 h-4" src={link} alt="" /> Set Url
                        </p>
                      </span>
                    )
                  ) : (
                    <span
                      className="relative flex bg-slate-50 justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black  mx-2  px-2  cursor-pointer text-lg capitalize"
                      onClick={() => {
                        navigate("/pricing-plans");
                      }}
                    >
                      <br />
                      <p className="text-sm font-semibold px-1.5 flex gap-3 items-center">
                        <img className="w-4 h-4" src={link} alt="" />
                        Set Url
                      </p>
                    </span>
                  )}
                </div>
              </p>
            </div>
            <div className=" shadow-xl rounded-lg ">
              <img className="w-[33rem]  rounded-t-lg" src={temp12} alt="" />
              <p className="text-center text-lg">
                steller
                <div className="flex justify-between p-3">
                  <span
                    className="relative flex  justify-end items-center border-2 p-1 rounded-r-full rounded-l-full w-fit text-white bg-blue-600  mx-2  px-2  cursor-pointer text-lg capitalize"
                    onClick={() => {
                      setShowModal(true);
                      setPortfolio(Preview9);
                    }}
                  >
                    <br />
                    <p className="text-base font-semibold px-1.5">Preview</p>
                  </span>
                  {subs !== null ? (
                    location.state == 12 ? (
                      <span className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1 mx-2  px-2  cursor-pointer text-lg capitalize">
                        <br />
                        <p className="text-base font-semibold px-1.5">
                          Selected
                        </p>
                      </span>
                    ) : (
                      <span
                        className="relative flex bg-slate-50  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1  mx-2  px-2  cursor-pointer text-lg capitalize"
                        onClick={() => {
                          handlesetPortfolio(12);
                        }}
                      >
                        <br />
                        <p className="text-base font-semibold px-1.5 flex gap-3 items-center">
                          <img className="w-4 h-4" src={link} alt="" /> Set Url
                        </p>
                      </span>
                    )
                  ) : (
                    <span
                      className="relative flex bg-slate-50 justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black  mx-2  px-2  cursor-pointer text-lg capitalize"
                      onClick={() => {
                        navigate("/pricing-plans");
                      }}
                    >
                      <br />
                      <p className="text-sm font-semibold px-1.5 flex gap-3 items-center">
                        <img className="w-4 h-4" src={link} alt="" />
                        Set Url
                      </p>
                    </span>
                  )}
                </div>
              </p>
            </div>
            <div className=" shadow-xl rounded-lg ">
              <img className="w-[33rem] rounded-t-lg" src={temp10} alt="" />
              <p className="text-center text-lg">
                Proman
                <div className="flex justify-between p-3">
                  <span
                    className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit p-1 text-white bg-blue-600  mx-2  px-2  cursor-pointer text-lg capitalize"
                    onClick={() => {
                      setShowModal(true);
                      setPortfolio(Preview9);
                    }}
                  >
                    <br />
                    <p className="text-base font-semibold px-1.5">Preview</p>
                  </span>
                  {subs !== null ? (
                    location.state == 10 ? (
                      <span className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1 mx-2  px-2  cursor-pointer text-lg capitalize">
                        <br />
                        <p className="text-base font-semibold px-1.5">
                          Selected
                        </p>
                      </span>
                    ) : (
                      <span
                        className="relative flex bg-slate-50  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1  mx-2  px-2  cursor-pointer text-lg capitalize"
                        onClick={() => {
                          handlesetPortfolio(10);
                        }}
                      >
                        <br />
                        <p className="text-base font-semibold px-1.5 flex gap-3 items-center">
                          <img className="w-4 h-4" src={link} alt="" /> Set Url
                        </p>
                      </span>
                    )
                  ) : (
                    <span
                      className="relative flex bg-slate-50 justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black  mx-2  px-2  cursor-pointer text-lg capitalize"
                      onClick={() => {
                        navigate("/pricing-plans");
                      }}
                    >
                      <br />
                      <p className="text-sm font-semibold px-1.5 flex gap-3 items-center">
                        <img className="w-4 h-4" src={link} alt="" />
                        Set Url
                      </p>
                    </span>
                  )}
                </div>
              </p>
            </div>
            <div className=" shadow-xl rounded-lg ">
              <img className="w-[33rem]  rounded-t-lg" src={temp13} alt="" />
              <p className="text-center text-lg">
                DevModern
                <div className="flex justify-between p-3">
                  <span
                    className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-white bg-blue-600 p-1  mx-2  px-2  cursor-pointer text-lg capitalize"
                    onClick={() => {
                      setShowModal(true);
                      setPortfolio(Preview9);
                    }}
                  >
                    <br />
                    <p className="text-base font-semibold px-1.5">Preview</p>
                  </span>
                  {subs !== null ? (
                    location.state == 13 ? (
                      <span className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1 mx-2  px-2  cursor-pointer text-lg capitalize">
                        <br />
                        <p className="text-base font-semibold px-1.5">
                          Selected
                        </p>
                      </span>
                    ) : (
                      <span
                        className="relative flex bg-slate-50  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1  mx-2  px-2  cursor-pointer text-lg capitalize"
                        onClick={() => {
                          handlesetPortfolio(13);
                        }}
                      >
                        <br />
                        <p className="text-base font-semibold px-1.5 flex gap-3 items-center">
                          <img className="w-4 h-4" src={link} alt="" /> Set Url
                        </p>
                      </span>
                    )
                  ) : (
                    <span
                      className="relative flex bg-slate-50 justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black  mx-2  px-2  cursor-pointer text-lg capitalize"
                      onClick={() => {
                        navigate("/pricing-plans");
                      }}
                    >
                      <br />
                      <p className="text-sm font-semibold px-1.5 flex gap-3 items-center">
                        <img className="w-4 h-4" src={link} alt="" />
                        Set Url
                      </p>
                    </span>
                  )}
                </div>
              </p>
            </div>
            <div className=" shadow-xl rounded-lg ">
              <img className="w-[33rem]  rounded-md" src={temp14} alt="" />
              <p className="text-center text-lg">
                DevFolio
                <div className="flex justify-between p-3">
                  <span
                    className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-white bg-blue-600 p-1  mx-2  px-2  cursor-pointer text-lg capitalize"
                    onClick={() => {
                      setShowModal(true);
                      setPortfolio(Preview9);
                    }}
                  >
                    <br />
                    <p className="text-base font-semibold px-1.5">Preview</p>
                  </span>
                  {subs !== null ? (
                    location.state == 14 ? (
                      <span className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1 mx-2  px-2  cursor-pointer text-lg capitalize">
                        <br />
                        <p className="text-base font-semibold  px-1.5">
                          Selected
                        </p>
                      </span>
                    ) : (
                      <span
                        className="relative flex bg-slate-50  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1  mx-2  px-2  cursor-pointer text-lg capitalize"
                        onClick={() => {
                          handlesetPortfolio(14);
                        }}
                      >
                        <br />
                        <p className="text-base font-semibold px-1.5 flex gap-3 items-center">
                          <img className="w-4 h-4" src={link} alt="" /> Set Url
                        </p>
                      </span>
                    )
                  ) : (
                    <span
                      className="relative flex bg-slate-50 justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black  mx-2  px-2  cursor-pointer text-lg capitalize"
                      onClick={() => {
                        navigate("/pricing-plans");
                      }}
                    >
                      <br />
                      <p className="text-sm font-semibold px-1.5 flex gap-3 items-center">
                        <img className="w-4 h-4" src={link} alt="" />
                        Set Url
                      </p>
                    </span>
                  )}
                </div>
              </p>
            </div>
            <div className=" shadow-xl rounded-lg ">
              <img className="w-[33rem]  rounded-t-lg" src={temp15} alt="" />
              <p className="text-center text-lg">
                Kards
                <div className="flex justify-between p-3">
                  <span
                    className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-white bg-blue-600  mx-2  px-2  cursor-pointer text-lg capitalize"
                    onClick={() => {
                      setShowModal(true);
                      setPortfolio(Preview9);
                    }}
                  >
                    <br />
                    <p className="text-base font-semibold px-1.5">Preview</p>
                  </span>
                  {subs !== null ? (
                    location.state == 15 ? (
                      <span className="relative flex  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1 mx-2  px-2  cursor-pointer text-lg capitalize">
                        <br />
                        <p className="text-base font-semibold px-1.5">
                          Selected
                        </p>
                      </span>
                    ) : (
                      <span
                        className="relative flex bg-slate-50  justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black p-1  mx-2  px-2  cursor-pointer text-lg capitalize"
                        onClick={() => {
                          handlesetPortfolio(15);
                        }}
                      >
                        <br />
                        <p className="text-base font-semibold px-1.5 flex gap-3 items-center">
                          <img className="w-4 h-4" src={link} alt="" /> Set Url
                        </p>
                      </span>
                    )
                  ) : (
                    <span
                      className="relative flex bg-slate-50 justify-end items-center border-2 rounded-r-full rounded-l-full w-fit text-black  mx-2  px-2  cursor-pointer text-lg capitalize"
                      onClick={() => {
                        navigate("/pricing-plans");
                      }}
                    >
                      <br />
                      <p className="text-sm font-semibold px-1.5 flex gap-3 items-center">
                        <img className="w-4 h-4" src={link} alt="" />
                        Set Url
                      </p>
                    </span>
                  )}
                </div>
              </p>
            </div>

            {/* <div className="p-3 shadow-xl rounded-lg bg-sky-200">
            <img className="w-[31rem] h-72 rounded-md" src={temp5} alt="" />
            <p className="text-center text-lg">Template-5</p>
          </div>
          <div className="p-3 shadow-xl rounded-lg bg-sky-200">
            <img className="w-[31rem] h-72 rounded-md" src={temp6} alt="" />
            <p className="text-center text-lg">Template-6</p>
          </div> */}
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-5 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="modal-content p-4 h-96 overflow-auto">
                    {port != "" ? (
                      <img src={port} loading="lazy" />
                    ) : (
                      <div
                        role="status"
                        className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
                      >
                        <svg
                          className="w-80 h-10 text-gray-200 dark:text-gray-600"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 20"
                        >
                          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
