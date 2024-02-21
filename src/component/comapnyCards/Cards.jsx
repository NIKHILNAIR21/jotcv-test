import React, { useState, useRef } from "react";
import place from "../../assets/location.svg";
import jobtype from "../../assets/type.svg";
import work from "../../assets/work.png";
import salarypng from "../../assets/salary.png";
import Modal from "../jobModal/Modal";

import { getToken } from "../../session";
import { useNavigate } from "react-router";
const Cards = ({
  profession,
  location,
  img,
  name,
  minExp,
  maxExp,
  id,
  salary,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate(`/job-details?q=${id}`)}
        key={id}
        className="bg-white cursor-pointer hover:shadow-blue-400 flex justify-between items-center rounded-md shadow-xl w-full h-[90%]  md:h-36 p-3"
      >
        <div className="flex  items-center gap-4">
          <img
            className="w-[40px] h-[40px] sm:w-[79px] sm:h-[84px]"
            src={img}
            alt="company-logo"
          />
          <div className="">
            <h2 className="text-sm sm:text-[16.5px] font-bold">{profession}</h2>
            <h4 className="text-[15.2px]">{name}</h4>

            <div className="flex gap-3">
              <p className="flex items-center gap-1 text-xs sm:text-[16px]">
                <img className="w-2 " src={place} alt="" />
                {location}
              </p>
              <p className="flex items-center font-medium gap-1 text-xs sm:text-[16px]">
                <img className="w-3 h-3 text-blue-500" src={work} alt="" />
                <span>
                  {minExp}-{maxExp} Years
                </span>
              </p>
              {salary != null && (
                <p className="flex items-center font-medium gap-1 text-xs sm:text-[16px]">
                  <img
                    className="w-3 h-3 text-blue-500"
                    src={salarypng}
                    alt=""
                  />
                  <span>{salary}LPA</span>
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => navigate(`/job-details?q=${id}`)}
            className="bg-[#027BFC] p-1 px-5 font-sans text-white w-fit h-fit text-[17px] rounded-md"
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
