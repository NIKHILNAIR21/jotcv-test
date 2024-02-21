import React from "react";
import Header from "./Header";

const Skill = ({ skills }) => {
  return (
    <div className="px-2">
      <div className="border-t-2 border-black border-b-2">
        <h1 className="font-semibold text-center uppercase text-base  ">
          Skills
        </h1>
      </div>
      

      <hr />
      <div className="flex  justify-center gap-y-2 p-1  gap-x-2 items-center flex-wrap  my-1 ">
        {skills?.map((item, index) => (
          <p
            className="text-xs rounded-md bg-black p-1 text-white  font-semibold  w-fit "
            key={index}
          >
            {item.skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Skill;
