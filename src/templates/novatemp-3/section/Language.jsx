import React from "react";

const Language = ({ languages,reduxlanguages  }) => {
  console.log(reduxlanguages);
  return (
    <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-2 text-gray-700 ">
        language
      </h1>
      <div className="flex gap-x-4 ">
        {reduxlanguages?.map((item, index)=>(
            <div key={index} className="mt-1 flex gap-x-4">
                  <p className="text-sm">{item?.name}</p>
                </div>
        ))}
        {languages?.map((item, index)=>(
            <div key={index} className="mt-1 flex gap-x-4">
                  <p className="text-sm">{item?.language}</p>
                </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
