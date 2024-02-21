import React from "react";

const WorkExp = ({ experince }) => {

  const formatDate = (dateString, formatType) => {
    if (!dateString) return null;
  
    const date = new Date(dateString);
  
      return date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
  
  };

  return (
    <div className="px-2 flex">
      
     <div>

        <h1 className="font-semibold uppercase text-base mt-4 text-red-400 ">
          Work Experience
        </h1>
        <div>
          {experince?.map((exp, index) => (
            <div key={exp?.id} className="mt-1 text-white p-1.5 text-justify">
              <h3 className="text-sm  text-red-400 font-semibold">
                {exp?.company_name}
              </h3>
              <div className="flex justify-between gap-x-44">
                <p className="text-sm ">{exp?.designation}</p>
                <p className="text-xs ">
                  {formatDate(exp?.start_date)} -{" "}
                  {exp?.is_current ? "present" : formatDate(exp?.end_date)}
                </p>
              </div>
              <p className="text-sm w-[80%]  font-medium">
                {exp?.description}
              </p>
            </div>
          ))}
        </div>
     </div>
  
    </div>
  );
};

export default WorkExp;
