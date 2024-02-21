import React from "react";

const Language = ({ languages }) => {
  return (
    <div className="px-2 mt-2">
      
        <h1 className="font-semibold uppercase text-base text-left text-emerald-500 ">
          language
        </h1>
  
      <div className="flex gap-x-4 justify-start  flex-wrap">
        {languages?.map((item, index) => (
          <div key={index} className="mt-1 flex gap-x-4 px-2">
            <p className="text-base">{item?.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
