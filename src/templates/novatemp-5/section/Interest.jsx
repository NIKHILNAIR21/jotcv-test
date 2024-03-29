import React from "react";

const Interest = ({ interest }) => {
  return (
    <div className="px-2">
      <h1 className="font-semibold uppercase text-base mt-4 text-red-400 ">
        Interests
      </h1>
      <div className="flex flex-wrap gap-y-2 gap-x-3">
        {interest?.map((item, index) => (
          <p className="text-sm px-2 bg-red-400 rounded-md font-semibold text-white" key={index}>
            {item?.interest} 
          </p>
        ))}
      </div>
    </div>
  );
};

export default Interest;
