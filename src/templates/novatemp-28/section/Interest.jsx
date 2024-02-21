import React from "react";

const Interest = ({ interest }) => {
  return (
    <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-2 text-sky-400 ">
        Interests
      </h1>
      <div className="flex flex-wrap gap-x-3">
        {interest?.map((item, index) => (
          <p className="text-sm " key={index}>
            {item?.interest} 
          </p>
        ))}
      </div>
    </div>
  );
};

export default Interest;
