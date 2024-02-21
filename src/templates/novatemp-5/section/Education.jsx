import React from "react";

const Education = ({ edu, reduxEdu }) => {
  const formatDate = (dateString, formatType) => {
    if (!dateString) return null;

    const date = new Date(dateString);

    return date.toLocaleDateString(undefined, {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="px-2 flex">
      <div className="">
        <h1 className="font-semibold uppercase text-base mt-4 text-red-400 ">
          Education
        </h1>
        <div>
          {!reduxEdu?.isEdit && (
            <div className="mt-1  rounded">
              <div></div>
              <h3 className="text-sm font-medium ">
                {reduxEdu?.formData?.schoolName}
              </h3>
              <p className="text-sm text-red-400">
                {" "}
                {reduxEdu?.formData?.degree}
              </p>
              {reduxEdu?.formData?.startDate && (
                <p className=" text-xs text-gray-600">
                  {formatDate(reduxEdu?.formData?.startDate)}-{" "}
                  {reduxEdu?.currentlyStudying
                    ? "present"
                    : formatDate(reduxEdu?.formData?.endDate)}
                </p>
              )}
            </div>
          )}
          {edu?.map((edu, index) => (
            <div key={edu?.id} className="mt-1 rounded">
              <div></div>
              <h3 className="text-sm font-medium ">{edu?.university}</h3>
              <p className="text-sm text-red-400">{edu?.course}</p>
              <p className=" text-xs text-gray-600">
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
