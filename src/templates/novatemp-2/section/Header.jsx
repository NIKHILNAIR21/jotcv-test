import React from "react";

const Header = ({ img, fullname, profession, summary }) => {
  return (
    <div className="px-6 pt-2">
      <header className="flex justify-start  gap-x-6 items-center">
        {/* <img className="w-28 h-32  mt-4 rounded-md" src={img} alt="" /> */}
        <div>
          <h1 className="font-semibold capitalize text-lg">{fullname}</h1>
          <h3 className="font-medium capitalize text-pink-400 text-base">
            {profession}
          </h3>
          <p className=" text-xs">{summary}</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
