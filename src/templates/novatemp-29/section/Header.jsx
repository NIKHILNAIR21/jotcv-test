import React from "react";

const Header = ({ img, fullname, profession, summary }) => {
  return (
    <div className="px-2">
      <header className="flex justify-start  gap-x-6 items-center">

        <div>
          <h1 className="font-semibold text-xl capitalize">{fullname}</h1>
          <h3 className="font-medium  text-base capitalize">{profession}</h3>
          <p className="font-medium  text-sm">{summary}</p> 
        </div>
      </header>
    </div>
  );
};

export default Header;
