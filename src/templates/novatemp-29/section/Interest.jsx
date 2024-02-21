import React from "react";

const Interest = ({ interest }) => {
  return (
    <div className="px-2">
      <div className="border-t-2 border-black border-b-2">
        <h1 className="font-semibold uppercase text-base text-center   ">
          Interests
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-y-2 my-1.5 gap-x-3 ">
        {interest?.map((item, index) => (
          <p className="text-sm" key={index}>
            {item?.interest}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Interest;
