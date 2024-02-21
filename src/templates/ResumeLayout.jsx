import React from "react";



import { useSelector } from "react-redux";

import Template1 from "./newtemp-1/Template";
import Template2 from "./newtemp-2/Template";
import Template3 from "./newtemp-3/Template";
import Template4 from "./newtemp-4/Template";
import Template5 from "./newtemp-5/Template";
import Template6 from "./newtemp-6/Template";
import Template7 from "./newtemp-7/Template";
import Template8 from "./newtemp-8/Template";
import Template9 from "./newtemp-9/Template";
import Nova1 from "./novatemp-1/Template";
import Nova2 from "./novatemp-2/Template";
import Nova3 from "./novatemp-3/Template";
import Nova4 from "./novatemp-4/Template";
import Nova5 from "./novatemp-5/Template";
import Nova6 from "./novatemp-6/Template";
import Nova7 from "./novatemp-7/Template";
import Nova8 from "./novatemp-8/Template";
import Nova9 from "./novatemp-9/Template";
import Nova10 from "./novatemp-10/Template";
import Nova11 from "./novatemp-11/Template";
import Nova12 from "./novatemp-12/Template";
import Nova13 from "./novatemp-13/Template";
import Nova14 from "./novatemp-14/Template";
import Nova15 from "./novatemp-15/Template";
import Nova16 from "./novatemp-16/Template";
import Nova17 from "./novatemp-17/Template";
import Nova18 from "./novatemp-18/Template";
import Nova19 from "./novatemp-19/Template";
import Nova20 from "./novatemp-20/Template";
import Nova21 from "./novatemp-21/Template";
import Nova22 from "./novatemp-22/Template";
import Nova23 from "./novatemp-23/Template";
import Nova24 from "./novatemp-24/Template";
import Nova25 from "./novatemp-25/Template";
import Nova26 from "./novatemp-26/Template";
import Nova27 from "./novatemp-27/Template";
import Nova28 from "./novatemp-28/Template";
import Nova29 from "./novatemp-29/Template";
import Nova30 from "./novatemp-30/Template";
import Nova31 from "./novatemp-31/Template";
import Nova32 from "./novatemp-32/Template";
import Nova33 from "./novatemp-33/Template";
import Nova34 from "./novatemp-34/Template";
import Nova35 from "./novatemp-35/Template";
import Nova36 from "./novatemp-36/Template";
import Nova37 from "./novatemp-37/Template";
import Nova38 from "./novatemp-38/Template";
import Nova39 from "./novatemp-39/Template";
import Temp42 from "./template-42/Template"
import Temp43 from "./template-43/Template"

function ResumeLayout() {
  const tempId = useSelector((state) => state?.templateID?.tempId);

  let theme = {
    backgroundColor: "black",
    fontColor: "black",
    titleColor: "blue",
    highlighterColor: "blue",
  };

  const getTemplateComponent = (key) => {
    switch (key) {
      case 1:
        return <Nova1 />;
      case 2:
        return <Nova2 />;
      case 3:
        return <Nova3 />;
      case 4:
        return <Nova4 />;
      case 5:
        return <Nova5 />;
      case 6:
        return <Nova6 />;
      case 7:
        return <Nova7 />;
      case 8:
        return <Nova8 />;
      case 9:
        return <Nova9 />;
      case 10:
        return <Nova10 />;
      case 11:
        return <Nova11 />;
      case 12:
        return <Nova12 />;
      case 13:
        return <Nova13 />;
      case 14:
        return <Nova14 />;
      case 15:
        return <Nova15 />;
      case 16:
        return <Nova16 />;
      case 17:
        return <Nova17 />;
      case 18:
        return <Nova18 />;
      case 19:
        return <Nova19 />;
      case 20:
        return <Nova20 />;
      case 21:
        return <Nova21 />;
      case 22:
        return <Nova22 />;
      case 23:
        return <Nova23 />;
      case 24:
        return <Nova24 />;
      case 25:
        return <Nova25 />;
      case 26:
        return <Nova26 />;
      case 27:
        return <Nova27 />;
      case 28:
        return <Nova28 />;
      case 29:
        return <Nova29 />;
      case 30:
        return <Nova30 />;
      case 31:
        return <Nova31 />;
      case 32:
        return <Nova32 />;
      case 33:
        return <Nova33 />;
      case 34:
        return <Nova34 />;
      case 35:
        return <Nova35 />;
      case 36:
        return <Nova36 />;
      case 37:
        return <Nova37 />;
      case 38:
        return <Nova38 />;
      case 39:
        return <Nova39 />;
      case 42:
        return <Temp42 />;
      case 43:
        return <Temp43 />;
      case 41:
        return <Template5 />;

      default:
        return <Nova1 />;
    }
  };
  return (
    <div className="mx-auto print:mx-0  print:mb-0">
      <div
        style={{ transform: `scale(${0.9})` }}
        className="origin-top transition-all duration-300 ease-linear	print:!scale-100"
      >
        <div className="lg:w-[210mm] lg:h-full w-[25.5rem] bg-white   ">
          {/* <ThemeProvider theme={theme}> */}
            {getTemplateComponent(+tempId)}
            {/* <BasicTemplate2/> */}
          {/* </ThemeProvider> */}
        </div>
      </div>
    </div>
  );
}

export default ResumeLayout;