import React from "react";
import PriceCard from "../../../component/PriceCard/PriceCard";
import Footer from "./Footer";
const Pricing = ({ loginclick }) => {
  return (
    <div className="bg-gray-100  w-[28rem] sm:w-full ">
      <div className="flex flex-col items-center  bg-gray-100  ">
        <h1 className="text-3xl font-semibold p-3 text-center  font-poppins">
          Simple, transparent pricing
        </h1>
        <p className="text-lg font-poppins pb-6">
          From Blank Page to Dream Career, Pick Your Resume Plan
        </p>
      </div>
      <div className="flex pb-10">
        <PriceCard loginclick={loginclick} />
      </div>
      <p className="text-lg text-center font-poppins  w-[80%] mx-auto py-5">
        Crafting a standout resume is the key to unlocking new opportunities.
        Choose a plan that suits your needs and start building your professional
        narrative today. Join countless others who have empowered their careers
        with JotCV. Your dream job awaits – invest in your success now.
      </p>
      <div className="bg-white ">
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;
