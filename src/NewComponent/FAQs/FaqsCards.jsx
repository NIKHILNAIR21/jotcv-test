import React from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FaqsCards = ({ cardNo, heading, answer }) => {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div>
        <Accordion open={open === cardNo } className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen({cardNo})}
          className={`border-b-0 transition-colors ${
            open === cardNo ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
      {heading}
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
         {answer}
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default FaqsCards;
