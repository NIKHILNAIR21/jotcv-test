import React from "react";

const Certificate = ({ certificate, reduxCertificate }) => {
  return (
    <div className="px-2 mt-2">
      <h1 className="font-semibold mt-2 uppercase text-base text-left text-teal-400 ">
        Certification
      </h1>

      <div>
        <ul className="">
          {reduxCertificate?.map((item, index) => (
            <li className="text-xs" key={index}>
              {item?.name}
            </li>
          ))}
        </ul>
        <ul className="">
          {certificate?.map((item, index) => (
            <li className="text-xs" key={index}>
              {item?.certificate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certificate;
