import React from "react";
import Error from "../assets/404.png";
import { useNavigate } from "react-router";
const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-start pt-10  h-screen bg-gray-100 flex-col items-center">
      <div>
        <img src={Error} alt="" />
      </div>
      <h2 className="text-2xl my-3 md:text-5xl text-center">Page not Found</h2>
      <h4 className="text-xl  md:text-2xl text-center">Oops! The page you are looking for doesn’t exist.</h4>
    <button type="button" className="p-2 my-6 bg-[#027BFC] text-white" onClick={()=>navigate(-1)}>Back home</button>
    </div>
  );
};

export default NotFound;
