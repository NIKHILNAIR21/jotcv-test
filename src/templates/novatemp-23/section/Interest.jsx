import React from "react";

const Interest = ({ interest }) => {
  return (
    <div className="px-2 mt-2">
      <h1 className="font-semibold uppercase text-base mt-4 text-emerald-500 ">
        Interests
      </h1>
      <div className="flex flex-wrap gap-3">
        {interest?.map((item, index) => (
          <p className="text-sm px-2" key={index}>
            {item?.interest} 
          </p>
        ))}
      </div>
    </div>
  );
};

export default Interest;
