import React from "react";
import "../../../App.css";
const formatDate = (dateString, formatType) => {
  if (!dateString) return null;

  const date = new Date(dateString);

  return date.toLocaleDateString(undefined, {
    month: "short",
    year: "numeric",
  });
};
const WorkExp = ({ experince, reduxExp }) => {
  return (
    <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-2 text-gray-700 ">
        Work Experience
      </h1>
      {!reduxExp?.isEdit && (
        <div className="">
          <div className=" pt-1 text-justify">
            <h3 className="text-sm  text-black font-semibold">
              {reduxExp?.formData?.companyName}
            </h3>
            <div className="flex justify-between">
              <p className="text-sm text-black">
                {reduxExp?.formData?.jobPosition}
              </p>
              {reduxExp?.formData?.startDate && (
                <p className="text-sm text-black">
                  {formatDate(reduxExp?.formData?.startDate)}-{" "}
                  {reduxExp?.currentlyWorking
                    ? "present"
                    : formatDate(reduxExp?.formData?.endDate)}
                </p>
              )}
            </div>
            <div
              className="text-xs text-black custom-list font-medium"
              dangerouslySetInnerHTML={{
                __html: reduxExp?.formData?.jobDescription,
              }}
            ></div>
          </div>
        </div>
      )}
      <div className="">
        {experince?.map((exp, index) => (
          <div key={exp?.id} className=" pt-1 text-justify">
            <h3 className="text-sm  text-black font-semibold">
              {exp?.company_name}
            </h3>
            <div className="flex justify-between">
              <p className="text-sm text-black">{exp?.designation}</p>
              <p className="text-sm text-black">
                {formatDate(exp?.start_date)} -{" "}
                {exp?.is_current ? "present" : formatDate(exp?.end_date)}
              </p>
            </div>
            <div
              className="text-xs text-black custom-list font-medium"
              dangerouslySetInnerHTML={{
                __html: exp?.description,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExp;
