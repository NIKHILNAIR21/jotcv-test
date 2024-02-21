import React from "react";
import Header from "./Header";

const Skill = ({ skills, apiskills }) => {
  return (
    <div className="px-2 flex ">
      <div>
        <h1 className="font-semibold uppercase text-base mt-3 text-red-400 ">
          Skills
        </h1>
        <div className="flex f justify-start gap-y-2 gap-x-2 items-start  flex-wrap  mt-2.5 ">
          {apiskills?.map((item, index) => (
            <p
              className="text-sm rounded-md text-white font-semibold p-1 w-fit bg-red-400"
              key={index}
            >
              {item.skill}
            </p>
          ))}
          {skills?.map((item, index) => (
            <p
              className="text-sm rounded-md text-white font-semibold p-1 w-fit bg-red-400"
              key={index}
            >
              {item?.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
