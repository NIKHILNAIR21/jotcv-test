import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveForm } from "../slice/showContentSlice";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { deleteCertificate, deleteLanguage } from "../services/ApiServices";
import showNotification from "../services/NotificationService";
import { getFull } from "../actions/allProfieAction";
import { removeSection } from "../slice/sectionSlice";
import language from "../assets/Langugage.png";
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
const LanguageCard = () => {
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  

  const [open, setOpen] = React.useState(0);
  const dispatch = useDispatch();
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const handleDelete = async (delid) => {
    try {
      let resp = await deleteLanguage(delid);
      if (resp?.status == 200) {
        showNotification("success", "Language removed successfully");
        dispatch(getFull(resumeData?.id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="bg-white px-3 w-[33rem] my-3 rounded-lg ">
        <Accordion
          open={open === 1}
          icon={<Icon id={1} open={open} className="p-1" />}
        >
          <AccordionHeader onClick={() => handleOpen(1)}>
            <p className="flex text-lg text-black font-bold items-center gap-2">
              <img className="w-5" src={language} /> Language{" "}
            </p>
          </AccordionHeader>
          <AccordionBody>
            <div className="flex flex-wrap gap-2">
              {resumeData?.languages?.length != 0 &&
                resumeData?.languages?.map((items, index) => (
                  <div
                    key={items?.id}
                    className="flex justify-between  gap-1.5 items-center hover:text-white m-2 bg-blue-100 p-3 rounded-full transition-all delay-100 hover:bg-blue-600"
                  >
                    <p className="text-[16px] font-semibold ">
                      {items?.language}
                    </p>
                    <p
                      className="px-2 py-0.5 font-bold rounded-full text-[11.5px] text-white cursor-pointer bg-red-600"
                      onClick={() => {
                        handleDelete(items?.id);
                        if (resumeData?.languages?.length == 1) {
                          dispatch(removeSection("Language"));
                        }
                      }}
                    >
                      X
                    </p>
                  </div>
                ))}
            </div>
            <div className="flex justify-center">
              <button
                className="p-2 px-3 rounded-full border hover:bg-sky-100 transition-all delay-100 "
                onClick={() => dispatch(setActiveForm("LanguageInfoFormShow"))}
              >
                <span className="font-bold text-blue-600">+</span> Languages
              </button>
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default LanguageCard;
