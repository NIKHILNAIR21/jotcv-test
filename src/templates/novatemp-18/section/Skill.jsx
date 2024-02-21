import React from "react";
import Header from "./Header";

const Skill = ({ skills }) => {
  return (
    <div className="px-6 flex ">
     
      <div>
        <h1 className="font-semibold uppercase text-base mt-1 text-amber-700/50 ">
          Skills
        </h1>
        <div className="flex  justify-start  gap-1 items-start  flex-wrap mt-1">
          {skills?.map((item, index) => (
            <p
              className="text-sm   font-semibold p-2 w-fit "
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
