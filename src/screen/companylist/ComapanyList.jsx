import React, { useState, useEffect } from "react";
import _debounce from "lodash/debounce";
import Cards from "../../component/comapnyCards/Cards";
import { GetCompanyList, GetFilterJobs } from "../../services/ApiServices";
import search from "../../assets/search.svg";
import { useNavigate } from "react-router";
import ScrollToTop from "../../component/ScrollToTopOnNavigation";
import place from "../../assets/location.svg";
import company from "../../assets/company.png";
import work from "../../assets/work.png";
import skills from "../../assets/skills.png";
import Loader from "../../component/Loader.jsx";
import { useLoader, useError } from "../../Custom.jsx";
import { getToken } from "../../session.js";
import jobsearch from "../../assets/jobsearch.png";
const ComapanyList = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, startLoading, stopLoading } = useLoader();
  const { hasError, setError, resetError } = useError();
  const [count, setCount] = useState(20034);
  const [CompanyList, setCompanyList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchCompany, setSearchCompany] = useState("");
  const [searchJobRole, setSearchJobRole] = useState("");
  const [searchSkills, setSearchSkills] = useState("");
  const totalpage = CompanyList?.total_pages;

  const fetchCompanyList = async () => {
    try {
      startLoading();
      const response = await GetCompanyList({
        page: currentPage,
        q: searchQuery,
        location: searchLocation,
      });
      setCompanyList(response?.data?.results);
    } catch (error) {
      setError();
    } finally {
      stopLoading();
      resetError();
    }
  };
  const fetchFilterJobs = async () => {
    try {
      startLoading();
      const response = await GetFilterJobs(
        searchLocation,
        searchCompany,
        searchJobRole,
        searchSkills
      );
      setCompanyList(response?.data?.results);
      setCount(response?.data?.count);
    } catch (error) {
      setError();
    } finally {
      stopLoading();
      resetError();
    }
  };

  const debouncedFetchCompanyList = _debounce(fetchCompanyList, 800); // Adjust the debounce delay as needed
  // Adjust the debounce delay as needed

  useEffect(() => {
    debouncedFetchCompanyList();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, searchQuery]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  if (currentPage > totalpage) {
    setCurrentPage(1);
  }

  const renderPaginationNumbers = () => {
    const startPage = (Math.ceil(currentPage / 10) - 1) * 10 + 1;
    const endPage = startPage + 10;

    const numbers = [];
    if (endPage <= totalpage) {
      for (let i = startPage; i <= endPage; i++) {
        numbers.push(
          <button
            key={i}
            className={`p-1 px-2 mx-1 rounded ${
              i === currentPage ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    }

    return numbers;
  };

  return (
    <div className="bg-gray-100 min-h-screen   relative  ">
      {hasError && (
        <p className="text-center font-poppins text-2xl">
          Something Went Wrong Please Try Again Later
        </p>
      )}
      {/* {getToken() && (
        <button
          className="bg-sky-500 rounded absolute right-8 top-4 z-40 text-sm sm:text-base text-white px-4 py-2  "
          onClick={() => navigate("/applied-jobs")}
        >
          Applied Jobs
        </button>
      )} */}
      <div className="pt-5">
        <img className="w-[70%] h-72 scale-95 mx-auto" src={jobsearch} alt="" />
      </div>

      <div className={isLoading ? "bg-gray-100 h-screen z-20" : ""}>
        {isLoading && <Loader />}
      </div>

      <div className="flex items-start gap-10 justify-center mt-5">
        <div className="flex flex-row flex-wrap md:flex-col  w-[18%] justify-center gap-8 pt-4 ">
          <div className="flex rounded-l-full gap-4 rounded-r-full z-50   p-2.5 bg-white">
            <img className="w-3 h-3 my-auto" src={skills} alt="" />
            <input
              type="text"
              className=" outline-none"
              placeholder="Skills"
              value={searchSkills}
              onChange={(e) => setSearchSkills(e.target.value)}
            />
          </div>
          <div className="flex rounded-l-full gap-4 rounded-r-full z-50   p-2.5 bg-white">
            <img className="w-2" src={place} alt="" />
            <input
              type="text"
              className=" outline-none"
              placeholder="Location"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
          </div>
          <div className="flex rounded-l-full gap-4 items-center rounded-r-full z-50  p-2.5 bg-white">
            <img className="w-4" src={company} alt="" />
            <input
              type="text"
              className=" outline-none "
              placeholder="Company Name"
              value={searchCompany}
              onChange={(e) => setSearchCompany(e.target.value)}
            />
          </div>
          <div className="flex rounded-l-full gap-4 items-center rounded-r-full z-50  p-2.5 bg-white">
            <img className="w-4" src={work} alt="" />
            <input
              type="text"
              className=" outline-none"
              placeholder="Job Role"
              value={searchJobRole}
              onChange={(e) => setSearchJobRole(e.target.value)}
            />
          </div>
          <div>
            <button
              className="bg-sky-500 text-white p-2.5 px-3 rounded-full"
              onClick={() => fetchFilterJobs()}
            >
              Search
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[45%] ">
          <div className="flex px-5 justify-between items-center">
            <p className="text-base font-semibold">Featured Jobs</p>
            <p className="text-base  text-right  rounded-full font-semibold  w-fit text-green-600">
              Jobs:{" "}
              <span
                className="font-semibold text-black
      "
              >
                {count}
              </span>
            </p>
          </div>
          <div className="flex flex-wrap gap-14  justify-end mt-3 h-[30rem] rounded-lg bg-blue-500/20 overflow-y-auto no-scrollbar items-center p-7">
            {CompanyList?.jobs?.length > 0 ? (
              CompanyList?.jobs?.map((job) => (
                <Cards
                  key={job?.id}
                  hrEmail={job?.hr_contact_email}
                  id={job?.id}
                  profession={job?.title}
                  location={job?.locations}
                  ctc={job?.salary}
                  jobType={job?.employment_type}
                  maxExp={job?.max_exp}
                  minExp={job?.min_exp}
                  img={job?.company_logo}
                  name={job?.company_name}
                  site={job?.public_url}
                  salary={job?.salary}
                  description={job?.description}
                />
              ))
            ) : (
              <>No Jobs Available</>
            )}
          </div>
          {!isLoading && (
            <div className="flex justify-center gap-4 items-center px-10 py-10">
              <button
                className=" bg-blue-600 text-white p-1.5 px-2 rounded"
                onClick={() =>
                  handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
                }
              >
                {`<<`}
              </button>
              <span className="text-xl">{renderPaginationNumbers()}</span>
              <button
                className=" bg-blue-600 text-white p-1.5 px-2 rounded"
                onClick={() => handlePageChange(currentPage + 1)}
              >{`>>`}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComapanyList;
