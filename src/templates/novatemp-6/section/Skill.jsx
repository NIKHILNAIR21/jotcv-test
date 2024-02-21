import React from "react";

const Skill = ({ skills, apiskills }) => {
  return (
    <div className="px-2 mt-2">
      <h1 className="font-semibold text-left  text-base  text-teal-400 ">
        Skills
      </h1>

      <hr />
      <div className="flex  justify-start gap-y-2 gap-x-2  items-start  flex-wrap  mt-1 ">
        {apiskills?.map((item, index) => (
          <p
            className="text-sm rounded-md bg-teal-400 p-1 mx-1 text-white  font-semibold  w-fit "
            key={index}
          >
            {item.skill}
          </p>
        ))}
        {skills?.map((item, index) => (
          <p
            className="text-sm rounded-md bg-teal-400 p-1 mx-1 text-white  font-semibold  w-fit "
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
