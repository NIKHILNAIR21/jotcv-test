import React from "react";

const Education = ({ edu }) => {
  return (
    <div className="px-6 flex">

      <div className="">
        <h1 className="font-semibold uppercase text-base mt-2  ">
          Education
        </h1>
        <div className="flex justify-between gap-x-10">
          {edu?.map((edu, index) => (
            <div key={edu?.id} className="mt-1 pt-1  rounded">
              <div></div>
              <h3 className="text-sm font-medium">{edu?.university}</h3>
              <p className="text-sm ">{edu?.course}</p>
              <p className=" text-sm ">
                {edu?.start_date} -{" "}
                {edu?.is_current ? "present" : edu?.end_date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
