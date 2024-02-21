import React from "react";

const Language = ({ languages,reduxlanguages }) => {
  return (
    <div className="px-2">
      <h1 className="font-semibold uppercase text-base mt-4 text-red-400 ">
        language
      </h1>
      <div className="flex gap-x-4 flex-wrap ">
        {reduxlanguages?.map((item, index)=>(
            <div key={index} className="mt-1 flex bg-red-400 rounded-md text-white font-semibold gap-x-4 px-2">
                  <p className="text-sm">{item?.name}</p>
                </div>
        ))}
        {languages?.map((item, index)=>(
            <div key={index} className="mt-1 flex bg-red-400 rounded-md text-white font-semibold gap-x-4 px-2">
                  <p className="text-sm">{item?.language}</p>
                </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
