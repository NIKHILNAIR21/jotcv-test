import React from "react";

const MoneyCard = ({ heading, subtext }) => {
  return (
    <div>
      <div className="px-2.5 py-8 w-80 bg-lime-100 rounded-lg min-h-full m-2">
        <h1 className="text-2xl text-teal-600 text-center font-medium">
          {heading}
        </h1>
        <p className=" text-lg text-center font-medium">{subtext}</p>
      </div>
    </div>
  );
};

export default MoneyCard;
