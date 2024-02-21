import React from "react";

const Interest = ({ interest, reduxInterest }) => {
  return (
    <div className="px-2 mt-2">
      <h1 className="font-semibold uppercase text-base mt-4 text-teal-400 text-gray-700 ">
        Interests
      </h1>
      <div className="flex gap-x-3">
        {reduxInterest?.map((item, index) => (
          <p className="text-sm px-2" key={index}>
            {item?.name}
          </p>
        ))}
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
