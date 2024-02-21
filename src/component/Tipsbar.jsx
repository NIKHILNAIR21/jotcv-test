import React from "react";
import {
  Drawer,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Tips } from "../constant";

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
const Tipsbar = ({ open, onClose }) => {
  const [IsOpen, SetIsOpen] = React.useState(open);

  const [OpenTip, setOpenTip] = React.useState(0);

  const handleOpen = (value) => setOpenTip(OpenTip === value ? 0 : value);
  React.useEffect(() => {
    SetIsOpen(open);
  }, [open]);
  return (
    <div className="relative z-50 ">
      <Drawer
        placement="right"
        open={IsOpen}
        onClose={() => onClose(false)}
        className="p-5  "
        size={550}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold font-poppins">Tips</h2>
          <h2
            className="text-xl cursor-pointer text-red-600 font-bold"
            onClick={() => SetIsOpen(false)}
          >
            X
          </h2>
        </div>
        <div className="overflow-y-auto no-scrollbar">
          {Tips?.map((item) => (
            <Accordion
              className="relative z-50 "
              open={OpenTip === item?.id}
              icon={<Icon id={item?.id} open={OpenTip} />}
            >
              <AccordionHeader onClick={() => handleOpen(item?.id)}>
                {item?.tipName}
              </AccordionHeader>
              <AccordionBody className="text-black">
                {" "}
                <div
                  className="text-sm font-medium custom-list text-justify w-full mx-auto bg-white  no-scrollbar "
                  dangerouslySetInnerHTML={{ __html: item?.Points }}
                ></div>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Tipsbar;
