import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  createLanguage,
  deleteLanguage,
  getAllLanguage,
} from "../../services/ApiServices";
import showNotification from "../../services/NotificationService";
import Sidebar from "../../component/Sidebar";
import { useDispatch } from "react-redux";
import { markLangAsCompleted } from "../../slice/allProfileComplitionSlice";

function LanguageForm() {
  const [languages, setLanguages] = useState([]);
  const [languageArr, setLanguageArr] = useState([
    {
      name: "",
      can_read: false,
      can_write: false,
      can_speak: false,
    },
  ]);

  const [newLanguage, setNewLanguage] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let id = new URLSearchParams(location.search).get("profile");
  const [showError, setShowError] = useState("");
  let preview = new URLSearchParams(location.search).get("preview");

  useEffect(() => {
    getLanguages();
  }, []);

  const getLanguages = async () => {
    try {
      let response = await getAllLanguage(id);
      if (response?.data?.status == 200) {
        setLanguages(response?.data?.data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    let body = {
      profile: id,
      total_languages: languageArr?.length,
    };
    languageArr.forEach((language, index) => {
      body[`language${index + 1}`] = language;
    });

    try {
      let response = await createLanguage(body);
      if (response?.data?.status == 201) {
        getLanguages();
        dispatch(markLangAsCompleted());
        setShowError("");
        navigate(
          preview != null ? `/preview?profile=${id}` : `/social?profile=${id}`
        );
      }
    } catch (error) {}
  };

  const handleDelete = async (delid) => {
    try {
      let resp = await deleteLanguage(delid);
      if (resp?.data?.status == 200) {
        showNotification("success", "Language deleted successfully");
        getLanguages();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (index, field, value) => {
    const updatedLanguages = [...languageArr];
    updatedLanguages[index][field] = value;
    setLanguageArr(updatedLanguages);
    setNewLanguage(value);
  };

  const addLanguage = () => {
    setLanguageArr([
      ...languageArr,
      {
        name: "",
        can_read: false,
        can_write: false,
        can_speak: false,
      },
    ]);
    setNewLanguage("");
  };

  const removeLanguage = (index) => {
    const updatedLanguages = [...languageArr];
    updatedLanguages.splice(index, 1);
    setLanguageArr(updatedLanguages);
  };

  return (
    <>
      <div className="flex flex-col bg-gray-100 w-[54rem] sm:w-full justify-center ">
        <div className="md:mt-[3.5rem]  mx-auto ">
          {preview == null && <Sidebar />}
        </div>
        <div className="flex flex-col justify-center   sm:ml-0 items-center">
          <div className="w-[38rem] md:w-[52rem]  md:mx-8 sm:mx-auto flex flex-col justify-between    rounded p-4  mt-10 mb-40 md:mb-10">
            <h1 className="text-2xl font-semibold text-center mb-4">
              Add Languages
            </h1>
            {languages &&
              languages?.length !== 0 &&
              languages?.map((data, index) => {
                return (
                  <>
                    <div className="mb-1" key={index}>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          placeholder="Add Language"
                          className="w-full border bg-white rounded p-2"
                          value={data?.language}
                          disabled
                        />

                        <button
                          type="button"
                          onClick={() => handleDelete(data?.id)}
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
                    </div>
                    <div className="mb-4">
                      <div className="space-x-2">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox text-blue-500"
                            checked={data?.can_read}
                            readOnly
                          />
                          <span className="ml-2">Read</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox text-green-500"
                            checked={data?.can_speak}
                            readOnly
                          />
                          <span className="ml-2">Write</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox text-red-500"
                            checked={data?.can_write}
                            readOnly
                          />
                          <span className="ml-2">Speak</span>
                        </label>
                      </div>
                    </div>
                  </>
                );
              })}

            {languageArr &&
              languageArr?.length !== 0 &&
              languageArr?.map((data, index) => {
                return (
                  <>
                    <div className="mb-1" key={index}>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          placeholder="Add Language"
                          className="w-full  border rounded p-2"
                          value={data?.name}
                          onChange={(e) =>
                            handleChange(index, "name", e.target.value)
                          }
                        />
                        {index !== 0 && (
                          <button
                            type="button"
                            onClick={() => removeLanguage(index)}
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
                    </div>
                    <div className="mb-4">
                      <div className="space-x-2">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox text-blue-500"
                            checked={data?.can_read}
                            onChange={(e) =>
                              handleChange(index, "can_read", e.target.checked)
                            }
                          />
                          <span className="ml-2">Read</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox text-green-500"
                            checked={data?.can_speak}
                            onChange={(e) =>
                              handleChange(index, "can_speak", e.target.checked)
                            }
                          />
                          <span className="ml-2">Write</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox text-red-500"
                            checked={data?.can_write}
                            onChange={(e) =>
                              handleChange(index, "can_write", e.target.checked)
                            }
                          />
                          <span className="ml-2">Speak</span>
                        </label>
                      </div>
                    </div>
                  </>
                );
              })}

            <div>
              {newLanguage !== "" ? (
                <span
                  className="text-blue-700 cursor-pointer"
                  onClick={addLanguage}
                >
                  + Add More Language
                </span>
              ) : (
                <span>+ Add More Language</span>
              )}
            </div>

            {/* <div className="mt-6 flex flex-wrap gap-2 justify-start">
          {languages?.map((data, index) => (
            <div className="bg-blue-500 text-white w-fit px-3 py-2 rounded-full flex items-center  mt-2 mb-2">
              <div>
                <span className="mr-2">{data?.language}</span>
                {data?.can_read && (
                  <span className="bg-green-400 text-white px-2 py-1 rounded-full text-xs mr-1">
                    Read
                  </span>
                )}
                {data?.can_write && (
                  <span className="bg-yellow-400 text-white px-2 py-1 rounded-full text-xs mr-1">
                    Write
                  </span>
                )}
                {data?.can_speak && (
                  <span className="bg-red-400 text-white px-2 py-1 rounded-full text-xs">
                    Speak
                  </span>
                )}
              </div>
              <button
                onClick={() => handleDelete(data?.id)}
                className="text-red-500 hover:text-red-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div> */}
          </div>
          <div className=" flex mt-15  w-[43rem] sm:w-full md:w-[52rem] h-screen sm:h-0  justify-between    mb-72">
            <div>
              <button
                type="button"
                onClick={() =>
                  navigate(
                    preview != null
                      ? `/preview?profile=${id}`
                      : `/certificates?profile=${id}`
                  )
                }
                className="p-2 mt-1 mb-9 m-2 text-base rounded-r-full rounded-l-full transition-all ease-in-out duration-200
           border-black border-2 font-light"
              >
                BACK
              </button>
            </div>
            <div>
              <button
                type="button"
                className="p-2 mt-1 mb-9 m-2 text-base rounded-r-full rounded-l-full text-white bg-sky-500
          border-double border-2 font-light"
                onClick={() => handleSubmit()}
              >
                {preview !== null ? "SAVE & NEXT" : "Next: Social"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LanguageForm;
