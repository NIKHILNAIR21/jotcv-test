import React from "react";

const WorkExp = ({ experince }) => {
  return (
    <div className="px-2">
      <div className="border-t-2 border-black border-b-2">
        <h1 className="font-semibold uppercase text-base text-center text-gray-700 ">
          Work Experience
        </h1>
      </div>
      <div>
        {experince?.map((exp, index) => (
          <div key={exp?.id} className="mt-2  p text-justify">
            <h3 className="text-sm  text-black font-semibold">
              {exp?.company_name}
            </h3>
            <div className="flex justify-between">
              <p className="text-sm text-black">{exp?.designation}</p>
              <p className="text-sm text-black">
                {exp?.start_date} -{" "}
                {exp?.is_current ? "present" : exp?.end_date}
              </p>
            </div>
            <p className="text-sm text-black font-medium">{exp?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExp;
