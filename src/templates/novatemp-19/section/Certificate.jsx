import React from "react";

const Certificate = ({ certificate, reduxCertificate }) => {
  return (
    <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-2 text-pink-500 ">
        Certification
      </h1>
      <div>
        <ul className="flex-wrap flex gap-3 text-xs underline">
          {reduxCertificate?.map((item, index) => (
            <li key={index}>{item?.name}</li>
          ))}
          {certificate?.map((item, index) => (
            <li key={index}>{item?.certificate}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certificate;
