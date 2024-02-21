import React from "react";

const Education = ({ edu,reduxEdu }) => {
  const formatDate = (dateString, formatType) => {
    if (!dateString) return null;

    const date = new Date(dateString);

    return date.toLocaleDateString(undefined, {
      month: "short",
      year: "numeric",
    });
  };
  return (
    <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-2 text-gray-700 ">
        Education
      </h1>
      <div className="flex gap-x-4">
        {!reduxEdu?.isEdit && (
          <div  className=" pt-1  rounded">
            <div></div>
            <h3 className="text-sm font-medium">
              {reduxEdu?.formData?.schoolName}
            </h3>
            <p className="text-sm text-gray-600">
              {reduxEdu?.formData?.degree}
            </p>
            {reduxEdu?.formData?.startDate && (
              <p className=" text-sm text-gray-600">
                {formatDate(reduxEdu?.formData?.startDate)}-{" "}
                {reduxEdu?.currentlyStudying
                  ? "present"
                  : formatDate(reduxEdu?.formData?.endDate)}
              </p>
            )}
          </div>
        )}
        {edu?.map((edu, index) => (
          <div key={edu?.id} className=" pt-1  rounded">
            <div></div>
            <h3 className="text-sm font-medium">{edu?.university}</h3>
            <p className="text-sm text-gray-600">{edu?.course}</p>
            <p className=" text-sm text-gray-600">
              {formatDate(edu?.start_date)} -{" "}
              {edu?.is_current ? "present" : formatDate(edu?.end_date)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
