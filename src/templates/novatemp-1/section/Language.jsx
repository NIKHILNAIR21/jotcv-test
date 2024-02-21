import React from "react";

const Language = ({ languages,reduxlanguages }) => {
  console.log(reduxlanguages);
  return (
    <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-2 text-emerald-500 ">
        language
      </h1>
      <div className="flex gap-x-4 flex-wrap ">
        {reduxlanguages?.map((item, index)=>(
            <div key={index} className="mt-0.5 flex gap-x-4">
                  <p className="text-xs">{item?.name}</p>
                </div>
        ))}
      </div>
      <div className="flex gap-x-4 flex-wrap ">
        {languages?.map((item, index)=>(
            <div key={index} className="mt-0.5 flex gap-x-4">
                  <p className="text-xs">{item?.language}</p>
                </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
