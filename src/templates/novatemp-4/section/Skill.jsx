import React from "react";
import Header from "./Header";

const Skill = ({ apiskills,skills }) => {
  return (
    <div className="px-2">
      <div className="border-t-2 border-gray-700 border-b-2">
        <h1 className="font-semibold text-center uppercase text-base  text-gray-700 ">
          Skills
        </h1>
      </div>
      

      <hr />
      <div className="flex  justify-center gap-y-2 p-1  gap-x-2 items-center flex-wrap  my-1 ">
        {apiskills?.map((item, index) => (
          <p
            className="text-xs rounded-md bg-gray-700 p-1 text-white  font-semibold  w-fit "
            key={index}
          >
            {item.skill}
          </p>
        ))}
        {skills?.map((item, index) => (
          <p
            className="text-xs rounded-md bg-gray-700 p-1 text-white  font-semibold  w-fit "
            key={index}
          >
            {item?.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Skill;
