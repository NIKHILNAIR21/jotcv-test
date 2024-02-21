import React from "react";

const Language = ({ languages, reduxlanguages }) => {
  return (
    <div className="px-2">
      <div className="border-t-2 border-gray-700 border-b-2">
        <h1 className="font-semibold uppercase text-base text-center text-gray-700 ">
          language
        </h1>
      </div>
      <div className="flex gap-x-4 justify-center my-1.5 flex-wrap">
        {reduxlanguages?.map((item, index) => (
          <div key={index} className=" flex gap-x-4 ">
            <p className="text-sm">{item?.name}</p>
          </div>
        ))}

        {languages?.map((item, index) => (
          <div key={index} className=" flex gap-x-4 ">
            <p className="text-sm">{item?.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
