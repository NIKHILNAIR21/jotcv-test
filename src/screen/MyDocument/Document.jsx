import React, { useState } from "react";
import tempbg1 from "../../assets/templatebg.png";
import tempbg2 from "../../assets/tempbg-2.png";
import DocumentCard from "../../component/DocumentCard";
const Document = () => {
  const styles = {
    preview: {
      maxWidth: "100%",
      maxHeight: "200px",
    },
  };
  const [Doc, setDoc] = useState({
    "10th": null,
    "12th": null,
    "Aadhar-card": null,
    "Pan-card": null,
    "Pass-book": null,
  });
  console.log(Doc);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState({
    "10th": null,
    "12th": null,
    "Aadhar-card": null,
    "Pan-card": null,
    "Pass-book": null,
  });

  const handleFileChange = (event,documentType) => {
    console.log(event.target.name);
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setDoc((prevDoc) => ({
        ...prevDoc,
        [documentType]: file,
      }));
      setPreviewUrl((prevURL) => ({
        ...prevURL,
        [documentType]: URL?.createObjectURL(file),
      }));

      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };
  console.log(previewUrl);
  const renderFilePreview = (name) => {
    console.log(Doc[name]);
    if (Doc[name] !== null) {
      let selected = Doc[name];
      return (
        <embed
          className="no-scrollbar h-28 overflow-y-hidden"
          src={URL?.createObjectURL(selected)}
        />
      );
    } else {
      return null;
    }
  };
  return (
    <div>
      <div className="flex justify-center relative">
        <img className="absolute left-0 top-0 -z-20" src={tempbg1} alt="" />
        <div className="block">
          <h1 className="text-3xl  font-semibold p-1 font-poppins text-center mt-10">
            Upload Documents
          </h1>
          <p className="text-base w-[60%] mx-auto font-poppins  p-3 text-center mt-1">
            Start by creating a resume using one of our free templates. Create a
            professional CV in minutes with our AI Features. Get a head start on
            crafting your CV today.
          </p>
        </div>

        <img className="absolute right-0  -z-20" src={tempbg2} alt="" />
      </div>
      <div>
        {
          Object.keys(Doc)?.map((documentType,index)=>{
            console.log(documentType)
            return(
              <div key={index}>    <DocumentCard

              DocName={documentType}
            
              handleFileChange={handleFileChange}
              renderFilePreview={renderFilePreview}
              previewURL={previewUrl}
            /></div>
          
            )
          })
        }
     
    

    
      </div>
      <div className="flex justify-center mt-5">
        <button className="px-3 py-1.5 bg-blue-600 rounded-full border text-white text-lg">
          Save
        </button>
      </div>
    </div>
  );
};

export default Document;
