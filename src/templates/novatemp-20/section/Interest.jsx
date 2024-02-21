import React from "react";

const Interest = ({ interest, reduxInterest }) => {
  return (
    <div className="px-4">
      <h1 className="font-semibold uppercase text-base mt-4 text-emerald-800 ">
        Interests
      </h1>
      <div className="flex flex-wrap gap-y-2 gap-x-3">
        {reduxInterest?.map((item, index) => (
          <p
            className="text-sm px-2 bg-emerald-800 rounded-md font-semibold text-white"
            key={index}
          >
            {item?.name}
          </p>
        ))}
        {interest?.map((item, index) => (
          <p
            className="text-sm px-2 bg-emerald-800 rounded-md font-semibold text-white"
            key={index}
          >
            {item?.interest}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Interest;
