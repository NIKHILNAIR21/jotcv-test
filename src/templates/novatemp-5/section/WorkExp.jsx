import React from "react";

const WorkExp = ({ experince, reduxExp }) => {
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
      <div>
        <h1 className="font-semibold uppercase text-base mt-4 text-red-400 ">
          Work Experience
        </h1>
        <div>
          {!reduxExp?.isEdit && (
            <div className="mt-1 text-justify">
              <h3 className="text-sm  text-red-400 font-semibold">
                {reduxExp?.formData?.companyName}
              </h3>
              <div className="flex justify-between ">
                <p className="text-sm text-black">
                  {" "}
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
            <div key={exp?.id} className="mt-1  text-justify">
              <h3 className="text-sm  text-red-400 font-semibold">
                {exp?.company_name}
              </h3>
              <div className="flex justify-between ">
                <p className="text-sm text-black">{exp?.designation}</p>
                <p className="text-xs text-black">
                  {formatDate(exp?.start_date)} -{" "}
                  {exp?.is_current ? "present" : formatDate(exp?.end_date)}
                </p>
              </div>
              <div
                className="text-xs custom-list text-black font-medium"
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
