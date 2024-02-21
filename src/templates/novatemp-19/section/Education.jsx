import React from "react";

const Education = ({ edu, reduxEdu }) => {
  return (
    <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-2 text-pink-500 ">
        Education
      </h1>
      <div className="flex flex-wrap  gap-4">
        {!reduxEdu?.isEdit && (
          <div className=" pt-1  rounded">
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
              {edu?.start_date} - {edu?.is_current ? "present" : edu?.end_date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
