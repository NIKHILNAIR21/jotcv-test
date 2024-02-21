import React from "react";

const Header = ({ img, fullname, profession, summary }) => {
  return (
    <div className="p-2">
      <header className="flex justify-start  gap-x-6 items-center">
        <img className="rounded-md w-28 " src={img} alt="" />
        <div className="bg-emerald-500 text-white">
          <h1 className="font-semibold capitalize text-xl">{fullname}</h1>
          <h3 className="font-medium text-white capitalize text-lg">{profession}</h3>
          <p className="font-medium  text-sm">{summary}</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
