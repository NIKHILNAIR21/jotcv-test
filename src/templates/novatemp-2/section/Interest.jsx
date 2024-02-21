import React from "react";

const Interest = ({ interest,reduxInterest }) => {
  return (
    <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-1 text-gray-700 ">
        Interests
      </h1>
      <div className="flex gap-x-3 flex-wrap">
      {reduxInterest?.map((item, index) => (
          <p className="text-xs px-2" key={index}>
            {item?.name} 
          </p>
        ))}
      </div>
      <div className="flex gap-x-5 flex-wrap">
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
