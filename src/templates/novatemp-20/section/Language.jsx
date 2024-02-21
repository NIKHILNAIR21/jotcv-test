import React from "react";

const Language = ({ languages, reduxlanguages }) => {
  return (
    <div className="px-4">
      <h1 className="font-semibold uppercase text-base mt-4 text-emerald-800">
        language
      </h1>
      <div className="flex flex-wrap gap-4 ">
        {reduxlanguages?.map((item, index) => (
          <div
            key={index}
            className="mt-1 flex bg-emerald-800 rounded-md text-white font-semibold gap-x-4 px-2"
          >
            <p className="text-sm">{item?.name}</p>
          </div>
        ))}
        {languages?.map((item, index) => (
          <div
            key={index}
            className="mt-1 flex bg-emerald-800 rounded-md text-white font-semibold gap-x-4 px-2"
          >
            <p className="text-sm">{item?.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
