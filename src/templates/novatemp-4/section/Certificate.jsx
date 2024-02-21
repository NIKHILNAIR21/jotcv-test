import React from "react";

const Certificate = ({ certificate, reduxCertificate }) => {
  return (
    <div className="px-2">
      <div className="border-t-2 border-gray-700 border-b-2">
        <h1 className="font-semibold uppercase text-base text-center text-gray-700 ">
          Certification
        </h1>
      </div>
      <div>
        <ul className=" flex gap-x-4 justify-center flex-wrap my-1.5">
          {reduxCertificate?.map((item, index) => (
            <li className="text-sm " key={index}>
              {item?.name}
            </li>
          ))}
        </ul>
        <ul className=" flex gap-x-4 justify-center flex-wrap my-1.5">
          {certificate?.map((item, index) => (
            <li className="text-sm" key={index}>
              {item?.certificate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certificate;
