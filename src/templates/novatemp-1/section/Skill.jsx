import React from "react";
import Header from "./Header";

const Skill = ({ skills, apiSkills }) => {
  console.log(skills);
  return (
    <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-2 text-emerald-500 ">
        Skills
      </h1>
      <div className="flex gap-x-2.5 flex-warp mt-1.5 ">
        {apiSkills?.map((item, index) => (
          <p
            className="text-xs rounded-md text-white font-semibold p-1 w-fit bg-emerald-500"
            key={index}
          >
            {item.skill}
          </p>
        ))}
        {skills?.map((item, index) => (
          <p
            className="text-xs rounded-md text-white font-semibold p-1 w-fit bg-emerald-500"
            key={index}
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Skill;
