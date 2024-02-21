import React from "react";

const WorkExp = ({ experince, reduxExp }) => {
  return (
    <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-2 text-pink-500 ">
        Work Experience
      </h1>
      <div className="my-1">
        {!reduxExp?.isEdit && (
          <div className=" pt-1 text-justify">
            <h3 className="text-sm  text-black font-semibold">
              {reduxExp?.formData?.companyName}
            </h3>
            <div className="flex justify-between">
              <p className="text-sm text-black">
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
              className="text-xs custom-list "
              dangerouslySetInnerHTML={{
                __html: reduxExp?.formData?.jobDescription,
              }}
            ></div>
          </div>
        )}
        {experince?.map((exp, index) => (
          <div key={exp?.id} className=" pt-1 text-justify">
            <h3 className="text-sm  text-black font-semibold">
              {exp?.company_name}
            </h3>
            <div className="flex justify-between">
              <p className="text-sm text-black">{exp?.designation}</p>
              <p className="text-xs text-black">
                {exp?.start_date} -{" "}
                {exp?.is_current ? "present" : exp?.end_date}
              </p>
            </div>
            <div
              className="text-xs text-black custom-list "
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
