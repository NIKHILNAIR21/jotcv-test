import React from "react";

const Education = ({ edu }) => {

  const formatDate = (dateString, formatType) => {
    if (!dateString) return null;
  
    const date = new Date(dateString);
  
      return date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
  
  };
  
  return (
    <div className="px-2 flex">
     
      <div className="">
        <h1 className="font-semibold uppercase text-base mt-4 text-red-400 ">
          Education
        </h1>
        <div>
          {edu?.map((edu, index) => (
            <div key={edu?.id} className="mt-1 p-1.5  rounded">
              <div></div>
              <h3 className="text-sm font-medium ">{edu?.university}</h3>
              <p className="text-sm text-red-400">{edu?.course}</p>
              <p className=" text-xs text-white">
                {formatDate(edu?.start_date)} -{" "}
                {edu?.is_current ? "present" : formatDate(edu?.end_date)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
