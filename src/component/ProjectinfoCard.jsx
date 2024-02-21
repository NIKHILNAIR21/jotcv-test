import React from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setActiveForm } from "../slice/showContentSlice";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { deleteProjectByid } from "../services/ApiServices";
import showNotification from "../services/NotificationService";
import { removeSection } from "../slice/sectionSlice";
import { getFull } from "../actions/allProfieAction";
import prj from "../assets/project.png";
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
const ProjectinfoCard = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(0);
  const dispatch = useDispatch();
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  
  const handleNavigate = (id) => {
    navigate(`/resume-build?project=${id}`);
    dispatch(setActiveForm("ProjectInfoFormShow"));
  };
  const handleDelete = async (delid) => {
    try {
      let resp = await deleteProjectByid(delid);
      if (resp?.data?.status == 200) {
        showNotification("success", "Experience deleted successfully");

        dispatch(getFull(resumeData?.id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="bg-white px-3 w-[33rem] my-2 rounded-lg ">
        <Accordion
          open={open === 1}
          icon={<Icon id={1} open={open} className="p-1" />}
        >
          <AccordionHeader onClick={() => handleOpen(1)}>
            <p className="flex text-lg text-black font-bold items-center gap-2">
              <img className="w-5" src={prj} /> Project{" "}
            </p>
          </AccordionHeader>
          <AccordionBody>
            {resumeData?.projects?.length != 0 &&
              resumeData?.projects?.map((items, index) => (
                <div
                  key={items?.id}
                  className="flex justify-between items-center hover:text-white m-2 bg-blue-100 p-3 rounded-[12px] transition-all delay-100 hover:bg-blue-600"
                >
                  <div>
                    <p className="text-[17px] font-bold ">{items?.title}</p>
                    <p className="text-[13px] font-medium">{items?.link}</p>
                  </div>
                  <div className="flex gap-5">
                    <p
                      onClick={() => handleNavigate(items?.id)}
                      className="px-2  py-1.5 font-bold rounded-full text-sm text-blue-600 cursor-pointer bg-blue-200"
                    >
                      <img className="w-4" src={edit} alt="" />
                    </p>
                    <p
                      className="px-2.5 py-1  font-bold rounded-full text-[11.5px] text-white cursor-pointer bg-red-600"
                      onClick={() => {
                        handleDelete(items?.id);
                        if (resumeData?.projects?.length == 1) {
                          dispatch(removeSection("Projects"));
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
                className="p-2 px-3 rounded-full border hover:bg-sky-100 transition-all delay-100 "
                onClick={() => dispatch(setActiveForm("ProjectInfoFormShow"))}
              >
                <span className="font-bold text-blue-600">+</span> Projects
              </button>
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default ProjectinfoCard;
