import React,{useState} from "react";
import place from "../assets/location.svg";
import jobtype from "../assets/type.svg";
import Modal from "../component/jobModal/Modal";
import { useNavigate } from "react-router";
const Cards = ({
  profession,
  hrEmail,
  location,
  ctc,
  jobType,
  img,
  name,
  site,
  description,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate()
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return <div>
        <div className="bg-white flex justify-between items-center gap-1 rounded-md shadow-lg w-[30rem] p-3">
        <div className="flex  items-center gap-4">
          <img className="w-[79px] h-[84px]" src={img} alt="company-logo" />
          <div className="">
            <h2 className="text-[18px] font-bold">{profession}</h2>
            <h4 className="text-[15px]">{name}</h4>

            <div className="flex  gap-2">
              <p className="flex items-center gap-1 text-[12px]">
                <img src={place} alt="" />
                {location}
              </p>
              <p className="flex items-center gap-1 text-[12px]">
                <img src={jobtype} alt="" />
                {jobType}
              </p>
            </div>

            <p className="text-lg font-semibold text-green-400">{Math.floor(ctc)}{" "}LPA</p>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => openModal()}
            className="bg-[#027BFC] p-1 text-white w-fit h-fit text-[17px] rounded-md"
          >
            Details
          </button>
        </div>
      </div>
      {isModalOpen && (
        <Modal closeModal={() => closeModal()}>
          {/* Content for the modal */}
          <div className="flex justify-between  items-center gap-4">
            <div className="flex gap-7">
              <img className="w-[79px] h-[84px]" src={img} alt="company-logo" />
              <div className="">
                <h2 className="text-[18px] font-bold">{profession}</h2>
                <h4 className="text-[15px]">{name}</h4>

                <div className="flex  gap-2">
                  <p className="flex items-center gap-1 text-[15px]">
                    <img src={place} alt="" />
                    {location}
                  </p>
                  <p className="flex items-center gap-1 text-[15px]">
                    <img src={jobtype} alt="" />
                    {jobType}
                  </p>
                </div>

                <p className="text-lg font-semibold text-green-400">{ctc}LPA</p>
              </div>
            </div>

            <button onClick={()=>navigate(`/pricing-plans`)} className="bg-[#027BFC] p-1 text-white w-fit h-fit text-[17px] rounded-md mt-3">
              Procced
            </button>
          </div>
          <p className="text-[15px] text-justify">
          {description.split('\r\n').map((paragraph, index) => (
        <p className="text-[15px] text-justify" key={index}>{paragraph}</p>
      ))}
          </p>
          <button onClick={()=>navigate(`/pricing-plans`)} className="bg-[#027BFC] p-1 text-white w-fit h-fit text-[17px] rounded-md mt-3">
            Procced
          </button>
          {/* Add more details or components as needed */}
        </Modal>
      )}
  </div>;
};

export default Cards;
