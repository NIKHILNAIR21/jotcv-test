import React from "react";
import Header from "./Header";

const Skill = ({ skills, apiSkills }) => {
  return (
    <div className="px-2 flex ">
      <div>
        <h1 className="font-semibold uppercase text-base mt-2 text-emerald-800 ">
          Skills
        </h1>
        <div className="flex f justify-start gap-y-2 gap-x-2 items-start  flex-wrap  mt-2.5 ">
          {skills?.map((item, index) => (
            <p
              className="text-sm rounded-md text-white font-semibold p-1 w-fit bg-emerald-800"
              key={index}
            >
              {item.name}
            </p>
          ))}
          {apiSkills?.map((item, index) => (
            <p
              className="text-sm rounded-md text-white font-semibold p-1 w-fit bg-emerald-800"
              key={index}
            >
              {item.skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
