import React from "react";

const Education = ({ edu }) => {
  return (
    <div className="px-2">
      <div className="border-t-2 border-black border-b-2">
        <h1 className="font-semibold uppercase text-base text-center text-black ">
          Education
        </h1>
      </div>
      <div>
        {edu?.map((edu, index) => (
          <div key={edu?.id} className="mt-2   rounded">
            <div></div>
            <h3 className="text-sm font-semibold">{edu?.university}</h3>
            <p className="text-sm ">{edu?.course}</p>
            <p className=" text-sm ">
              {edu?.start_date} - {edu?.is_current ? "present" : edu?.end_date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
