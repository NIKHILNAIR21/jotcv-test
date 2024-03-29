import React from "react";

const Language = ({ languages, reduxlanguages }) => {
  return (
    <div className="px-2 mt-2">
      <h1 className="font-semibold uppercase text-base text-left text-teal-400 ">
        language
      </h1>

      <div className="flex gap-x-4 justify-start  flex-wrap">
        {reduxlanguages?.map((item, index) => (
          <div key={index} className="mt-1 flex gap-x-4 px-2">
            <p className="text-sm">{item?.name}</p>
          </div>
        ))}
        {languages?.map((item, index) => (
          <div key={index} className="mt-1 flex gap-x-4 px-2">
            <p className="text-sm">{item?.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
