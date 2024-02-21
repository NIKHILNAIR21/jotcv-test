import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveForm } from "../slice/showContentSlice";
import { deleteEduByid } from "../services/ApiServices";
import showNotification from "../services/NotificationService";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { getFull } from "../actions/allProfieAction";
import { useNavigate } from "react-router";
import { removeSection, resetSection } from "../slice/sectionSlice";
import Edu from "../assets/edu.png";
import edit from "../assets/edit_blue.png";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const EducationCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const handleDelete = async (delid) => {
    try {
      let resp = await deleteEduByid(delid);
      if (resp?.data?.status == 200) {
        showNotification("success", "Education deleted successfully");
        dispatch(getFull(resumeData?.id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleNavigate = (id) => {
    navigate(`/resume-build?edu=${id}`);
    dispatch(setActiveForm("EducationInfoFormShow"));
  };

  return (
    <div className="flex items-center gap-4">
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        className="bg-white px-3 my-2 rounded-lg"
      >
        <AccordionHeader onClick={() => handleOpen(1)}>
          <p className="flex text-lg text-black font-bold items-center gap-2">
            <img className="w-5" src={Edu} /> Education{" "}
          </p>
        </AccordionHeader>
        <AccordionBody>
          {resumeData?.eductaions &&
            resumeData?.eductaions.length != 0 &&
            resumeData?.eductaions?.map((item) => (
              <div className="flex my-2.5 justify-between items-center bg-blue-100  hover:bg-blue-600 p-1.5 hover:text-white transition-all delay-100 rounded-[6px] cursor-pointer">
                <div className="">
                  <h3 className="text-[16px]    rounded-md font-medium ">
                    {item?.university}
                  </h3>
                  <h4 className="">Degree: {item?.course}</h4>
                </div>
                <div className="flex gap-5">
                <p
                      onClick={() => handleNavigate(items?.id)}
                      className="px-2  py-1.5 font-bold rounded-full text-sm text-blue-600 cursor-pointer bg-blue-200"
                    ><img className="w-4"src={edit} alt="" /></p>
                  <p
                    className=" px-2.5 py-1 font-bold rounded-full text-[11.5px] text-white cursor-pointer bg-red-600"
                    onClick={() => {
                      handleDelete(item?.id);
                      if (resumeData?.eductaions.length == 1) {
                        dispatch(removeSection("Education"));
                      }
                    }}
                  >
                    X
                  </p>
                </div>
              </div>
            ))}
          <div className="flex justify-center">
            <button
              className="p-2 rounded-full border hover:bg-sky-100 transition-all delay-100"
              onClick={() => dispatch(setActiveForm("EducationInfoFormShow"))}
            >
              <span className="font-bold text-blue-600">+</span> Educations
            </button>
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default EducationCard;
