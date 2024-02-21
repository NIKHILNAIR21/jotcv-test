import React from "react";

const Language = ({ languages }) => {
  return (
    <div className="px-4">
      <h1 className="font-semibold uppercase text-base mt-4 text-pink-400 ">
        language
      </h1>
      <div className="flex flex-wrap gap-3 ">
        {languages?.map((item, index)=>(
            <div key={index} className="mt-1 flex  rounded-md  font-semibold gap-x-4 px-2">
                  <p className="text-sm">{item?.language}</p>
                </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
