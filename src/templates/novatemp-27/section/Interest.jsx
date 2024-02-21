import React from "react";

const Interest = ({ interest }) => {
  return (
    <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-1 ">
        Interests
      </h1>
      <div className="flex gap-x-4 flex-wrap">
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
