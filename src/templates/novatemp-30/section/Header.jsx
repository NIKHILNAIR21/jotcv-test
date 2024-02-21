import React from "react";

const Header = ({ img, fullname, profession, summary }) => {
  return (
    <div className="px-2">
      <header className="flex relative flex-col justify-start text-center   gap-x-6 items-center">
        {/* <img className="w-28 h-32  mt-4 rounded-md" src={img} alt="" /> */}
          <h1 className="font-semibold absolute px-24   capitalize text-xl bg-white">{fullname}</h1>
        <div className="border-r-2 border-l-2 mt-6 border-pink-400 border-b-2 border-t-2 rounded-xl"  >
          <h3 className="font-medium text-pink-400 capitalize text-base">{profession}</h3>
          <p className="font-medium text-sm">{summary}</p> 
        </div>
      </header>
    </div>
  );
};

export default Header;
