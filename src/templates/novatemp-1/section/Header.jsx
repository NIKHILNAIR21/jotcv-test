import React from "react";

const Header = ({ img, fullname, profession, summary }) => {
  return (
    <div className="px-6">
      <header className="flex justify-start relative  gap-x-6 items-start">
        <img className="w-28 h-28   mt-1 rounded-md" src={img} alt="" />
        <div className="mt-3">
          <h1 className="font-semibold capitalize text-lg">{fullname}</h1>
          <h3 className="font-medium capitalize text-gray-400 text-base">
            {profession}
          </h3>
          <p className="font-medium text-xs">{summary}</p>
          {/* <a
            className="absolute top-3 right-4 text-sm text-blue-400"
            href={`https://webportfolio.jotcv.com/${profileData?.username}`} target="_blank"
          >
            WEB PORTFOLIO
          </a> */}
        </div>
      </header>
    </div>
  );
};

export default Header;
