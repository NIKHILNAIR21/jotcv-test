import React from "react";

const WorkExp = ({ experince }) => {
  const formatDate = (dateString, formatType) => {
    if (!dateString) return null;
  
    const date = new Date(dateString);
  
      return date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
  
  };
  return (
    <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-2 text-red-700 ">
        Work Experience
      </h1>
      <div>
        {experince?.map((exp, index) => (
          <div key={exp?.id} className="mt-2  text-justify">
            <h3 className="text-sm uppercase text-black font-semibold">
              {exp?.company_name}
            </h3>
            <div className="flex justify-between">
              <p className="text-sm text-black">{exp?.designation}</p>
              <p className="text-xs text-black">
                {formatDate(exp?.start_date)} -{" "}
                {exp?.is_current ? "present" :formatDate(exp?.end_date)}
              </p>
            </div>
            <p className="text-xs text-black font-medium">{exp?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExp;
