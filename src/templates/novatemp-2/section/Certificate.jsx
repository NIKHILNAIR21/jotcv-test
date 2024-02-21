import React from "react";

const Certificate = ({ certificate, reduxCertificate }) => {
  return (
    <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-1 text-gray-700 ">
        Certification
      </h1>
      <div>
        <ul className="flex-wrap flex gap-x-4 ">
          {reduxCertificate?.map((item, index) => (
            <li className=" text-xs" key={index}>
              {item?.name}
            </li>
          ))}
        </ul>
        <ul className="flex-wrap flex gap-x-4 ">
          {certificate?.map((item, index) => (
            <li className="text-sm underline" key={index}>
              {item?.certificate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certificate;
