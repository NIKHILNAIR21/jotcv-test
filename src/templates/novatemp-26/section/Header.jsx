import React from "react";

const Header = ({ img, fullname, profession, summary }) => {
  return (
    <div className="p-2">
      <header className="flex justify-start  gap-x-6 items-center">
        <img className="w-28 h-32  mt-4 rounded-md" src={img} alt="" />
        <div>
          <h1 className="font-semibold capitalize text-2xl">{fullname}</h1>
          <h3 className="font-medium capitalize text-gray-400 text-lg">{profession}</h3>
          <p className="font-medium text-base">{summary}</p> 
        </div>
      </header>
    </div>
  );
};

export default Header;
