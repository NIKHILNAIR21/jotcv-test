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
    <div className="px-2">
      <div className="border-t-2 border-gray-700 border-b-2">
        <h1 className="font-semibold uppercase text-base text-center text-gray-700 ">
          Education
        </h1>
      </div>
      <div className="flex gap-x-3 justify-start flex-wrap">
        {!reduxEdu?.isEdit && (
          <div className="mt-2   rounded">
            <h3 className="text-sm text-gray-700 font-semibold">
              {reduxEdu?.formData?.schoolName}
            </h3>
            <p className="text-sm text-gray-600">{edu?.course}</p>
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
          <div key={edu?.id} className="mt-2   rounded">
            <h3 className="text-sm text-gray-700 font-semibold">
              {edu?.university}
            </h3>
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
