import React from "react";

const Certificate = ({ certificate, reduxCertificate }) => {
  return (
    <div className="px-2">
      <h1 className="font-semibold uppercase text-base mt-4 text-red-400 ">
        Certification
      </h1>
      <div>
        <ul className="list-disc flex flex-wrap gap-x-1 text-sm list-inside">
          {reduxCertificate?.map((item, index) => (
            <li key={index}>{item?.name}</li>
          ))}
        </ul>
        <ul className="list-disc flex flex-wrap gap-x-1 text-sm list-inside">
          {certificate?.map((item, index) => (
            <li key={index}>{item?.certificate}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certificate;
