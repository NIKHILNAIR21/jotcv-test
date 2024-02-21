import React from "react";

const Language = ({ languages }) => {
  return (
    <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-1  ">
        language
      </h1>
      <div className="flex gap-x-4 flex-wrap">
        {languages?.map((item, index)=>(
            <div key={index} className="mt-1 flex gap-x-4 ">
                  <p className="text-sm">{item?.language}</p>
                </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
