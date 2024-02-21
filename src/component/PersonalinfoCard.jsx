import React from "react";
import { useDispatch, useSelector } from "react-redux";
import dropdown from "../assets/dropdown.png";
import email from "../assets/email.png";
import map from "../assets/map.png";
import Phone from "../assets/phone.png";
import edit from "../assets/edit_White.png";
import { setActiveForm } from "../slice/showContentSlice";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { editPersonalInfo } from "../slice/personalInfo";
import {
  addSocialLinks,
  addSocialLinksFromApi,
} from "../slice/SocialLInksSlice";
// icon function
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
      } h-5 w-5  transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
//

const PersonalinfoCard = () => {
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={() => {
          dispatch(setActiveForm("PersonalInfoFormShow"));
          dispatch(
            editPersonalInfo({
              FullName: resumeData?.full_name,
              profession: resumeData?.position,
              city: resumeData?.address,
              summary: resumeData?.summary,
              phoneNumber: resumeData?.mobile_no,
              email: resumeData?.email,
              photo: resumeData?.profile_picture,
            })
          );
          // resumeData?.social_links.map((item) => {
          //   dispatch(
          //     addSocialLinksFromApi({ name: item?.name, link: item?.link })
          //   );
          // });
          dispatch(addSocialLinksFromApi(resumeData?.social_links));
        }}
        className="flex relative cursor-pointer justify-between items-end p-4 w-[33rem]  rounded-xl hover:scale-105 bg-white hover:drop-shadow-lg  text-white bg-gradient-to-r  from-blue-600 via-blue-400 to-sky-400 transition-all delay-75"
      >
        <div>
          <p className="text-[20px] capitalize font-bold font-poppins">
            {resumeData?.full_name}
          </p>
          <p className="text-[18px] capitalize font-semibold font-poppins">
            {resumeData?.position}
          </p>
          <div className="mt-2 flex flex-col gap-2">
            <p className="text-[15px] flex items-center gap-2 font-bold font-poppins">
              <img src={email} className="w-4 h-4" alt="" /> {resumeData?.email}
            </p>
            <p className="text-[15px] flex items-center gap-2 font-bold font-poppins">
              <img src={Phone} className="w-4 h-4" alt="" />{" "}
              {resumeData?.mobile_no}
            </p>
            <p className="text-[15px]  flex items-center gap-2 font-bold font-poppins">
              <img src={map} className="w-4 h-4" alt="" /> {resumeData?.address}
            </p>
          </div>
        </div>
        <div>
          {resumeData?.profile_picture && (
            <img
              className="rounded-full w-24 h-24"
              src={resumeData?.profile_picture}
              alt=""
            />
          )}
        </div>
        <div className="absolute top-2.5 right-5">
          <img className="w-5" src={edit} alt="" />
        </div>
      </div>
    </>
  );
};

export default PersonalinfoCard;
