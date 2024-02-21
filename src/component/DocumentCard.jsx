import React, { useState } from "react";

const DocumentCard = ({
  DocName,
  handleFileChange,
  previewURL,
}) => {
  const styles = {
    label: {
      border: "1px solid #ccc",
      display: "inline-block",
      padding: "6px 12px",
      cursor: "pointer",
      borderRadius: "4px",
    },
    input: {
      display: "none",
    },
    preview: {
      maxWidth: "100%",
      maxHeight: "200px",
    },
  };
  console.log(previewURL[name]);
  return (
    <div className="flex justify-between px-5 mx-auto mt-5 rounded-lg bg-white w-[50%] p-5 shadow-lg items-center">
      <div className="flex items-center">
        {" "}
        {/* <input checked={select} onClick={handleRadioChange} type="radio" /> */}
        <label className="px-3 text-lg  font-poppins font-semibold" htmlFor="">
          {DocName}
        </label>
        <div className="px-10 ">
          {previewURL[DocName] && (
            <embed
              className="no-scrollbar h-28 overflow-y-hidden"
              src={previewURL[DocName]}
              style={styles.preview}
            />
          )}
        </div>
      </div>

      <div>
        <label
          className="bg-blue-200 font-semibold font-poppins text-blue-600"
          htmlFor={DocName}
          style={styles.label}
       
        >
          <input
            id={DocName}
            type="file"
            name={DocName}
            style={styles.input}
            onChange={(e) => handleFileChange(e,DocName)}
            accept=".pdf"
          />
          Choose File
        </label>
      </div>
    </div>
  );
};

export default DocumentCard;
