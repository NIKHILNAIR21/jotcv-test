import React from "react";

const Certificate = ({ certificate }) => {
  return (
    <div className="px-2">
      <div className="border-t-2 border-black border-b-2">
        <h1 className="font-semibold uppercase text-base text-center  ">
          Certification
        </h1>
      </div>
      <div>
        <ul className=" flex gap-x-4 justify-center flex-wrap my-1.5">
          {certificate?.map((item, index) => (
            <li className="text-sm underline" key={index}>{item?.certificate}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certificate;
