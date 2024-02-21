import React, { useState, useEffect } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  createCertificate,
  createInterest,
  deleteCertificate,
  deleteInterests,
  getAllCertificates,
  getAllIntrests,
} from "../../services/ApiServices";
import showNotification from "../../services/NotificationService";
import Sidebar from "../../component/Sidebar";
import { useDispatch } from "react-redux";
import { markCertificateAsCompleted } from "../../slice/allProfileComplitionSlice";

function CertificateUI() {
  const [interests, setInterests] = useState([
    {
      interest: "",
    },
  ]);
  const [interestsApi, setInterestsApi] = useState([]);

  const [newInterest, setNewInterest] = useState("");
  const [showError, setShowError] = useState("");
  const [isSubmited, setisSubmited] = useState(false);
  const [currentInput, setCurrentInput] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let id = new URLSearchParams(location.search).get("profile");
  let preview = new URLSearchParams(location.search).get("preview");

  useEffect(() => {
    getIntrests();
  }, []);

  const getIntrests = async () => {
    try {
      let response = await getAllCertificates(id);
      if (response?.data?.status == 200) {
        setInterestsApi(response?.data?.data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddInterest = async () => {
    let formData = new FormData();
    formData.append("profile", id);
    formData.append("total_certificates", interests?.length);
    for (let index = 0; index < interests?.length; index++) {
      formData.append(`certificate${index + 1}`, interests[index]?.interest);
    }
    try {
      let response = await createCertificate(formData);
      if (response?.data?.status == 201) {
        setInterests([]);
        setisSubmited(true);
        getIntrests();
        setNewInterest("");
        setShowError("");
        dispatch(markCertificateAsCompleted());
        navigate(
          preview != null
            ? `/preview?profile=${id}`
            : `/languages?profile=${id}`
        );

        // navigate(`/education-history?profile=${id}`);
        // dispatch(resetEdu())
      }
    } catch (error) {}
  };

  const handleDelete = async (delid) => {
    try {
      let resp = await deleteCertificate(delid);
      if (resp?.data?.status == 200) {
        showNotification("success", "Cetificate deleted successfully");
        getIntrests();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddMore = () => {
    setInterests([...interests, { interest: "" }]);
    setCurrentInput("");
  };
  const handleInterestChange = (index, value) => {
    const updatedInterests = [...interests];
    updatedInterests[index].interest = value;
    setCurrentInput(value);
    setInterests(updatedInterests);
  };
  const removeInterest = (index) => {
    const updatedInterests = [...interests];
    updatedInterests.splice(index, 1);
    setInterests(updatedInterests);
  };

  return (
    <>
      <div className="flex flex-col bg-gray-100  w-[54rem] sm:w-full justify-center">
        <div className="md:mt-10 mx-auto">{preview == null && <Sidebar />}</div>
        <div>
          <div className="w-[36rem] sm:w-[45rem] md:w-[55rem] mx-auto flex flex-col justify-between    rounded p-4  mt-10 mb-40">
            {/* Add Interest Field */}
            <h1 className="text-2xl text-center font-semibold mb-4">
              Add Your Certificates
            </h1>

            {interestsApi &&
              interestsApi?.length !== 0 &&
              interestsApi?.map((item, index) => {
                return (
                  <>
                    <div className="flex items-center space-x-2" key={index}>
                      <input
                        type="text"
                        placeholder="Add Interest"
                        className="w-full border rounded p-2"
                        value={item?.certificate}
                        disabled
                      />

                      <button
                        type="button"
                        onClick={() => handleDelete(item?.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                        >
                          <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="text-red-700  py-2 ">
                      <span className="block sm:inline">{showError}</span>
                    </div>
                  </>
                );
              })}

            {interests &&
              interests?.length !== 0 &&
              interests?.map((item, index) => {
                return (
                  <>
                    <div className="flex items-center space-x-2" key={index}>
                      <input
                        type="text"
                        placeholder="Add Certificate"
                        className="w-full border rounded p-2"
                        value={item?.interest}
                        onChange={(e) =>
                          handleInterestChange(index, e.target.value)
                        }
                      />
                      {index !== 0 && (
                        <button
                          type="button"
                          onClick={() => removeInterest(index)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                          >
                            <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
                          </svg>
                        </button>
                      )}
                    </div>
                    <div className="text-red-700  py-2 ">
                      <span className="block sm:inline">{showError}</span>
                    </div>
                  </>
                );
              })}
            {currentInput !== "" ? (
              <span
                className="text-blue-700 cursor-pointer"
                onClick={handleAddMore}
              >
                + Add More Certificate
              </span>
            ) : (
              <span>+ Add More Certificate</span>
            )}
          </div>
          <div className=" flex mt-20 mb-72 sm:mb-32 w-[44rem] h-screen sm:h-0 mx-auto sm:w-full  justify-around sm:justify-around text-right ">
            <div>
              <button
                type="button"
                onClick={() => navigate(`/interests?profile=${id}`)}
                className="p-2 mt-1 mb-9 m-2 text-base rounded-r-full rounded-l-full transition-all ease-in-out duration-200
           border-black border-2 font-light"
              >
                BACK
              </button>
            </div>
            <div>
              <button
                onClick={() => handleAddInterest()}
                type="button"
                className="p-2 mt-1 mb-9 m-2 text-base rounded-r-full rounded-l-full text-white bg-sky-500
          border-double border-2 font-light"
              >
                Next: Languages
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CertificateUI;
