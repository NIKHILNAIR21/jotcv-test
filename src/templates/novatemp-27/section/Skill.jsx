import React from "react";
import Header from "./Header";

const Skill = ({ skills }) => {
  return (
    <div className="px-6 flex ">
     
      <div>
        <h1 className="font-semibold uppercase text-base mt-1 ">
          Skills
        </h1>
        <div className="flex  justify-start  gap-x-1 items-start  flex-wrap mt-1">
          {skills?.map((item, index) => (
            <p
              className="text-sm rounded-md  font-semibold p-2 w-fit "
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
