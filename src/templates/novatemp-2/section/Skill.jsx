import React from "react";
import Header from "./Header";

const Skill = ({ skills,apiSkills }) => {
  console.log(apiSkills);
  return (
    <div className="px-6 flex ">
     
      <div>
        <h1 className="font-semibold uppercase text-base mt-1 text-gray-700 ">
          Skills
        </h1>
        <div className="flex  justify-start  gap-x-1 items-start  flex-wrap mt-1">
        {apiSkills?.map((item, index) => (
          <p
              className="text-sm rounded-md  font-semibold p-2 w-fit "
              key={index}
            >
              {item.skill}
            </p>
        ))}
          {skills?.map((item, index) => (
            <p
              className="text-sm rounded-md  font-semibold p-2 w-fit "
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
