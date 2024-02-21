import React from "react";
import "../../../App.css";
const WorkExp = ({ experince, reduxExp }) => {
  console.log(reduxExp);
  const formatDate = (dateString, formatType) => {
    if (!dateString) return null;
    console.log(reduxExp?.isEdit);
    const date = new Date(dateString);

    return date.toLocaleDateString(undefined, {
      month: "short",
      year: "numeric",
    });
  };
  return (
    <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-2 text-emerald-500 ">
        Work Experience
      </h1>
      <div>
        {!reduxExp?.isEdit && (
          <div className="py-0.5  text-justify">
            <h3 className="text-sm uppercase text-black  font-bold">
              {reduxExp?.formData?.companyName}
            </h3>
            <div className="flex justify-between">
              <p className="text-sm  text-black capitalize">
                {reduxExp?.formData?.jobPosition}
              </p>
              {reduxExp?.formData?.startDate && (
                <p className="text-xs text-black">
                  {formatDate(reduxExp?.formData?.startDate)}-{" "}
                  {reduxExp?.currentlyWorking
                    ? "present"
                    : formatDate(reduxExp?.formData?.endDate)}
                </p>
              )}
            </div>
            <div
              className="text-xs custom-list text-black font-medium"
              dangerouslySetInnerHTML={{
                __html: reduxExp?.formData?.jobDescription,
              }}
            ></div>
          </div>
        )}

        {experince?.map((exp, index) => (
          <div key={exp?.id} className="py-0.5  text-justify">
            <h3 className="text-sm uppercase text-black font-bold">
              {exp?.company_name}
            </h3>
            <div className="flex justify-between">
              <p className="text-sm  text-black capitalize">
                {exp?.designation}
              </p>
              <p className="text-xs text-black">
                {formatDate(exp?.start_date)}-{" "}
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
