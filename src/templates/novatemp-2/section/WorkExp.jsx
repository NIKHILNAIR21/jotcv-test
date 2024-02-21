import React from "react";
import "../../../App.css";
const WorkExp = ({ experince, reduxExp }) => {
  const formatDate = (dateString) => {
    if (!dateString) return null;

    const date = new Date(dateString);

    return date.toLocaleDateString(undefined, {
      month: "short",
      year: "numeric",
    });
  };
  return (
    <div className="px-6 flex w-full">
      <div className="w-full">
        <h1 className="font-semibold uppercase text-base mt-1 text-gray-700 ">
          Work Experience
        </h1>
        <div>
          {!reduxExp?.isEdit && (
            <div className="mt-0.5  text-justify">
              <h3 className="text-sm   text-black font-semibold">
                {reduxExp?.formData?.companyName}
              </h3>
              <div className="flex w-full justify-between items-center">
                <div className="text-[13.5px]  capitalize   text-black">
                  {reduxExp?.formData?.jobPosition}
                </div>
                {reduxExp?.formData?.startDate && (
                  <div className="text-sm   text-black">
                    {formatDate(reduxExp?.formData?.startDate)}-{" "}
                    {reduxExp?.currentlyWorking
                      ? "present"
                      : formatDate(reduxExp?.formData?.endDate)}
                  </div>
                )}
              </div>
              <div
                className="text-xs custom-list text-black "
                dangerouslySetInnerHTML={{
                  __html: reduxExp?.formData?.jobDescription,
                }}
              ></div>
            </div>
          )}
          {experince?.map((exp, index) => (
            <div key={exp?.id} className="mt-0.5 w-full  text-justify">
              <h3 className="text-sm   text-black font-semibold">
                {exp?.company_name}
              </h3>
              <div className="flex w-full justify-between ">
                <div className="text-[13.5px]    text-black">
                  {exp?.designation}
                </div>
                <div className="text-sm  text-black">
                  {formatDate(exp?.start_date)} -{" "}
                  {exp?.is_current ? "present" : formatDate(exp?.end_date)}
                </div>
              </div>
              <div
                className="text-xs w-full text-black custom-list font-medium"
                dangerouslySetInnerHTML={{
                  __html: exp?.description,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
