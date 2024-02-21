import React from "react";

const Education = ({ edu }) => {
  const formatDate = (dateString, formatType) => {
    if (!dateString) return null;
  
    const date = new Date(dateString);
  
      return date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
  
  };
  return (
    <div className="px-2">
    
        <h1 className="font-semibold uppercase mt-1 text-base text-left text-emerald-500">
          Education
        </h1>
  
      <div>
        {edu?.map((edu, index) => (
          <div key={edu?.id} className=" rounded">
            <div></div>
            <h3 className="text-sm font-medium">{edu?.university}</h3>
            <p className="text-sm text-emerald-500">{edu?.course}</p>
            <p className=" text-sm text-gray-600">
              {formatDate(edu?.start_date)} - {edu?.is_current ? "present" : formatDate(edu?.end_date)}
          </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
