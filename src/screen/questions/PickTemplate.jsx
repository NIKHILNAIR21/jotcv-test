import React from "react";
// import resume1 from "../../assets/resume-1.jpeg";

// import { useNavigate } from "react-router-dom";
// import Creative from "../home/section/Creative";

const PickTemplate = () => {
  const navigate = useNavigate();
  const handleSelection = () => {
    navigate("/personal-info");
  };

  return (
    // <Creative/>
    <div className="flex flex-col flex-wrap justify-center items-center">
      {/* <h1 className="text-blue-500 text-3xl font-light">Choose a template</h1>
   <Creative fromTemplate={true}/> */}
    </div>
  );
};

export default PickTemplate;
