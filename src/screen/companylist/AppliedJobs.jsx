import React, { useState, useEffect } from "react";
import { GetAppliedJobs } from "../../services/ApiServices";
import { useNavigate } from "react-router";
import place from "../../assets/location.svg";
import work from "../../assets/work.png";
import salary from "../../assets/salary.png";
import Loader from "../../component/Loader";
const AppliedJobs = () => {
  const navigate = useNavigate();
  const [AppliedJob, setAppliedJob] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppliedJobs();
  }, []);

  const fetchAppliedJobs = async () => {
    try {
      const response = await GetAppliedJobs();

      setAppliedJob(response?.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="bg-[#0c1825] p-1 mx-10  text-white w-fit h-fit text-[17px] rounded-md px-4 mt-12"
      >
        Back
      </button>
      {loading && <Loader />}
      {AppliedJob?.length > 0 &&
        AppliedJob?.map((item) => (
          <div
            key={item?.id}
            className="flex w-[27rem]  sm:w-[65%] border-4 my-4 rounded-xl border-gray-200/25  bg-white shadow-md  p-3 md:p-6 mx-auto  items-start justify-between"
          >
            <div className="flex gap-7">
              <img
                className="w-[90px] h-[100px]"
                src={item?.logo}
                alt="company-logo"
              />
              <div className="">
                <h2 className="text-[18px] font-bold">{item?.job_title}</h2>
                <h4 className="text-[15px]">{item?.company_name}</h4>

                <div className="flex  gap-2">
                  <p className="flex items-center gap-1 text-[15px]">
                    <img src={place} alt="" />
                    {item?.locations}
                  </p>
                  <p className="flex items-center gap-1 text-[15px]">
                    <img className="w-3 h-3" src={work} alt="" />
                    {item?.max_experience}-{item?.min_experience} Years
                  </p>
                  <p className="flex items-center gap-1 text-[15px]">
                    <img className="w-3 h-3" src={salary} alt="" />
                    {item?.salary}LPA
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#3cff70] p-1 cursor-pointer text-white w-fit h-fit text-[17px] rounded-md px-4 mt-3">
                Applied
              </div>
              <div
                className="bg-[#3995f7] cursor-pointer p-1 text-white w-fit h-fit text-[17px] rounded-md px-4 mt-3"
                onClick={() =>
                  navigate(`/job-details?q=${item?.job_id}&preview=true`)
                }
              >
                view description
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AppliedJobs;
