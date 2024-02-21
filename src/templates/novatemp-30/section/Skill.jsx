import React from "react";
import Header from "./Header";

const Skill = ({ skills }) => {
  return (
    <div className="px-2 flex ">
     
      <div>
        <h1 className="font-semibold uppercase text-xl mt-3 text-pink-400 ">
          Skills
        </h1>
        <div className="flex  justify-start gap-y-2 gap-x-2 items-start  flex-wrap  mt-2.5 ">
          {skills?.map((item, index) => (
            <p
              className="text-sm rounded-md text-white font-semibold p-2 w-fit bg-pink-400"
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
