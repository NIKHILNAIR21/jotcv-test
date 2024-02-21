import React from "react";

const Certificate = ({ certificate }) => {
  return (
    <div className="px-2 mt-2">
    
        <h1 className="font-semibold mt-2 uppercase text-base text-left text-emerald-500">
          Certification
        </h1>

      <div>
        <ul className="list-disc  list-inside">
          {certificate?.map((item, index) => (
            <li key={index}>{item?.certificate}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certificate;
