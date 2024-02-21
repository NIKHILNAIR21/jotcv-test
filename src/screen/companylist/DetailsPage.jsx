import React from "react";
import { useNavigate, useLocation } from "react-router";
import place from "../../assets/location.svg";
import share from "../../assets/share.png";
import work from "../../assets/work.png";
import salary from "../../assets/salary.png";
import { GetCompanyDetails } from "../../services/ApiServices";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { getToken } from "../../session";
import Loader from "../../component/Loader";
const DetailsPage = ({ login }) => {
  const navigate = useNavigate();
  const [CompanyList, setCompanyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const ID = new URLSearchParams(location.search).get("q");
  const preview = new URLSearchParams(location.search).get("preview");
  const url = window.location.href;

  const encodedUrl = encodeURIComponent(url || "");
  const loginClick = login();
  useEffect(() => {
    fetchCompanyList();
  }, []);

  const fetchCompanyList = async () => {
    if (ID !== null) {
      try {
        const response = await GetCompanyDetails(ID);
        setCompanyList(response?.data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
  };
  const htmlContent = CompanyList?.description ?? "";

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <div className="bg-gray-100 flex-col items-center w-[29rem] sm:w-full  flex md:flex-row px-8 md:justify-center md:items-start pt-10 pb-5 min-h-screen">
          <div className="flex flex-col w-[27rem] md:w-[30rem] h-fit mx-auto border-4 rounded-xl border-gray-200/25  bg-white shadow-md  p-3 md:p-6  items-start justify-between">
            <div className="flex flex-col gap-7">
              <img
                className="w-[30%] h-[30%] "
                src={CompanyList?.company_logo}
                alt="company-logo"
              />
              <div className="">
                <h2 className="text-[22px] font-bold">{CompanyList?.title}</h2>
                <h4 className="text-[20px]">{CompanyList?.company_name}</h4>

                <div className="flex  gap-4">
                  <p className="flex items-center gap-1 text-[20px]">
                    <img className="w-3 h-3" src={place} alt="" />
                    {CompanyList?.locations}
                  </p>
                  <p className="flex items-center gap-1 text-[20px]">
                    <img className="w-3 h-3" src={work} alt="" />
                    {CompanyList?.max_exp}-{CompanyList?.min_exp} Years
                  </p>
                  {CompanyList?.salary != null && (
                    <p className="flex items-center gap-1 text-[20px]">
                      <img className="w-3 h-3" src={salary} alt="" />
                      {CompanyList?.salary}LPA
                    </p>
                  )}
                </div>
              </div>
            </div>

            {preview == null ? (
              <div className="flex item-center gap-2 justify-center">
                <button
                  onClick={() => {
                    if (getToken()) {
                      navigate(
                        `/email-template?company=${CompanyList?.company_name}&jobRole=${CompanyList?.title}&mailto=${CompanyList?.hr_name}&id=${ID}`
                      );
                    } else {
                      login();
                    }
                  }}
                  className="bg-[#027BFC] p-2.5   text-white w-fit h-fit text-[18px] rounded-md px-4 mt-5 "
                >
                  Apply
                </button>
                <a
                  className="text-center mt-5"
                  href={`https://web.whatsapp.com/send?text= Hey! I found a ${CompanyList?.title} at ${CompanyList?.company_name} job on JotCV. check it out here 👇${encodedUrl}`}
                  target="_blank"
                  data-action="share/whatsapp/share"
                >
                  <p className="font-poppins text-[18px] px-4 text-[#0EB981] bg-[#defff4] p-2.5  justify-center flex items-center gap-2 rounded-md">
                    <img className="w-4 h-4" src={share} alt="" />
                    Share
                  </p>
                </a>
              </div>
            ) : (
              <button className="bg-[#2bbb45] p-1    text-white w-fit h-fit text-[17px] rounded-md px-4 mt-5 ml-5">
                Applied
              </button>
            )}
          </div>
          <div className="w-[27rem] mx-auto sm:w-[98%] md:w-[65%]">
            <div className="flex flex-col text-lg font-semibold  gap-3 justify-start w-[27rem] sm:w-[85%] p-1 mx-auto mt-3">
              Skills Reqiured
              <div className="flex gap-3">
                {CompanyList?.skills?.map((item, index) => (
                  <p className="text-base bg-[#027BFC] text-white p-1  rounded-md">
                    {item?.name}
                  </p>
                ))}
              </div>
            </div>
            <div
              className={`${styles.render_html}text-xl mx-auto text-black mt-4 w-[27rem] p-3 sm:w-[85%] text-justify`}
              dangerouslySetInnerHTML={{
                __html: htmlContent.replace(
                  /<p>/g,
                  '<p style="font-size: 18px; ">'
                ),
              }}
            ></div>
            <div className="flex justify-center gap-10 w-[27rem] mx-auto">
              {" "}
              <button
                onClick={() => navigate(-1)}
                className="bg-[#0c1825] p-1   text-white w-fit h-fit text-[17px] rounded-md px-4 mt-12"
              >
                Back
              </button>
              {preview == null ? (
                <button
                  onClick={() => {
                    if (getToken()) {
                      navigate(
                        `/email-template?company=${CompanyList?.company_name}&jobRole=${CompanyList?.title}&mailto=${CompanyList?.hr_name}&id=${ID}`
                      );
                    } else {
                      loginClick();
                    }
                  }}
                  className="bg-[#027BFC] p-1    text-white w-fit h-fit text-[17px] rounded-md px-4 mt-12"
                >
                  Apply
                </button>
              ) : (
                <></>
              )}
            </div>
            <a
              className="text-center text-lg   bg-[#0EB981] rounded-md p-2 px-4 flex text-white justify-between items-center w-[27rem] mx-auto my-6"
              href={`https://web.whatsapp.com/send?text= Hey! I found a ${CompanyList?.title} at ${CompanyList?.employer_company_name} job on JotCV. check it out here 👇${encodedUrl}`}
              target="_blank"
              data-action="share/whatsapp/share"
            >
              <button className="text-left font-poppins px-2 text-[16px]">
                Know someone who will be <br /> fit for this job?
              </button>
              <p className="font-poppins text-[16px] px-4 text-[#0EB981] bg-white justify-center flex items-center gap-2 rounded-r-full rounded-l-full">
                <img className="w-4 h-4" src={share} alt="" />
                Share
              </p>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsPage;
