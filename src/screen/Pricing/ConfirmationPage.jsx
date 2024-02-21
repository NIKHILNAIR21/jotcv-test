import React from 'react';
import Img from "../../assets/greentick-unscreen.gif";
import { useNavigate } from 'react-router';
const ConfirmationPage = () => {
const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className=" p-8 ">
      <img src={Img} alt="Thank You GIF" className="mx-auto " />
        <h1 className="text-3xl text-center font-semibold mb-4 ">Subscription Payment Confirmed</h1>
        <p className="text-gray-700 text-lg mb-4">
          Thank you for subscribing to our services! Your payment has been successfully processed.
        </p>
        <div className="flex justify-center">
          <button onClick={()=>navigate("/resumes")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
