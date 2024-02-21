import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";
import {
  addSkill,
  removeSkill,
  resetSkil,
  restoreSkill,
  updateSkill,
} from "../../slice/skillSlice";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { getAllProjects } from "../../actions/projectAction";
import Sidebar from "../../component/Sidebar";
import {
  createSkills,
  deleteSKills,
  getAllSkills,
} from "../../services/ApiServices";
import showNotification from "../../services/NotificationService";
import { markSkillAsCompleted } from "../../slice/allProfileComplitionSlice";

const SkillSchema = Yup.object().shape({
  name: Yup.string().required("skill name is required"),
});
const Skill = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills.skills);
  const initialValues = useSelector((state) => state?.skills?.formData);
  const location = useLocation();
  let id = new URLSearchParams(location.search).get("profile");
  let preview = new URLSearchParams(location.search).get("preview");

  const [skillsFromApi, setSkillsFromApi] = useState([]);

  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ];
  useEffect(() => {
    getSkills();
    dispatch(getAllProjects(id));
  }, []);

  const list = useSelector((state) => state?.projectHistory?.list?.data);

  const handleNavigate = () => {
    dispatch(markSkillAsCompleted());
    if (preview !== null) {
      navigate(`/preview?profile=${id}`);
    } else {
      if (list?.length !== 0) {
        navigate(`/project-history?profile=${id}`);
      } else {
        navigate(`/add-projects?profile=${id}`);
      }
    }
  };
  const getSkills = async () => {
    try {
      let response = await getAllSkills(id);
      if (response?.data?.status == 200) {
        setSkillsFromApi(response?.data?.data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addSkillHandler = (values) => {
    dispatch(addSkill({ name: values?.name, type: values?.type }));

    dispatch(restoreSkill());
  };

  const removeSkillHandler = (index) => {
    dispatch(removeSkill(index));
  };

  const handleSubmit = async () => {
    if (skills?.length !== 0) {
      let formData = new FormData();
      formData.append("profile", id);
      formData.append("total_skills", skills?.length);
      for (let index = 0; index < skills?.length; index++) {
        formData.append(`skill${index + 1}`, skills[index]?.name);
        formData.append(`type${index + 1}`, skills[index]?.type);
      }

      try {
        let response = await createSkills(formData);
        if (response?.data?.status == 201) {
          if (skills?.length >= 5) {
            handleNavigate();
            dispatch(resetSkil());
          } else {
            showNotification("danger", "Atleast 5 skill is required");
          }
        }
      } catch (error) {}
    } else {
      handleNavigate();
    }
  };
  const handleDelete = async (delid) => {
    try {
      let resp = await deleteSKills(delid);
      if (resp?.data?.status == 200) {
        showNotification("success", "skill removed successfully");
        getSkills();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col  sm:h-screen justify-center sm:pt-0  items-center bg-gray-100 w-[54rem] mx-auto md:w-full">
      <div className="mt-16 sm:mt-32">{preview == null && <Sidebar />}</div>
      <div className="flex flex-col md:flex-row justify-center mt-0 sm:mt-0 min-h-[260vh] sm:min-h-[90vh] md:min-h-screen bg-gray-100  items-center ">
        <Formik
          enableReinitialize
          initialValues={initialValues} // Assuming `skills` is coming from the Redux store
          onSubmit={(values) => {
            addSkillHandler(values);
          }}
          validationSchema={SkillSchema}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form className=" mx-20 md:mx-1 w-[50%] sm:w-[44rem] md:w-[60rem] h-[195vh] sm:h-screen flex flex-col items-center justify-start rounded p-4  ">
              <label className="text-2xl  font-light text-sky-500    ">
                Add Your Skill
              </label>
              <p className="text-center text-xl  text-gray-500 font-light   mb-4">
                Include every skill you have, to impress the recruiter
              </p>
              <div className="mt-3">
                <div className="w-full  ">
                  <Field
                    type="text"
                    name="name"
                    value={values?.name}
                    onChange={(e) => {
                      setFieldValue(`name`, e.target.value);
                      dispatch(updateSkill({ name: e.target.value }));
                    }}
                    placeholder="Javascript"
                    className="block appearance-none w-[39rem]  sm:w-[36rem] md:w-[44rem] bg-white border rounded-md border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 "
                  />
               

                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="w-full mt-2  ">
                  <label
                    htmlFor="select"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select an type:
                  </label>
                  <div className="relative">
                    <select
                      id="select"
                      value={values?.type}
                      onChange={(e) => {
                        setFieldValue(`type`, e.target.value);
                        dispatch(updateSkill({ type: e.target.value }));
                      }}
                      name="type"
                      className="block appearance-none w-[39rem] sm:w-[36rem] md:w-[44rem] bg-white border rounded-md outline-none border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 "
                    >
                      <option value="1">Beginner</option>
                      <option value="2">Intermediate</option>
                      <option value="3">Advanced</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* <div className="flex flex-col ml-2">
                    <Rating
                      value={skill.rating}
                      onChange={(rating) =>
                        handleSkillChange(index, "rating", rating)
                      }
                    />
                  </div> */}
              </div>

              <button
                type="submit]"
                className=" bg-sky-500 text-white text-[17px] font-medium text-center flex justify-center mx-auto rounded-[5px] p-2 mb-10 mt-6"
              >
                +Add Skill
              </button>

              <div className="flex flex-wrap justify-evenly w-[40rem]">
                {/* Skill Tag 1 */}
                {skills &&
                  skills?.length !== 0 &&
                  skills?.map((item, index) => {
                    return (
                      <div className="flex flex-wrap gap-2 mt-3">
                        <div
                          className="px-3 py-1 border rounded-r-full text-white bg-sky-600 rounded-l-full border-gray-300 flex items-center space-x-2"
                          index={index}
                        >
                          <span>{item?.name}</span>
                          {item?.type == "1" && <span>(Beginner)</span>}
                          {item?.type == "2" && <span>(Intermediate)</span>}
                          {item?.type == "3" && <span>(Advanced)</span>}
                          <button
                            type="button"
                            className="text-red-500 hover:text-red-700"
                            onClick={() => removeSkillHandler(index)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              viewBox="0 0 20 20"
                            >
                              <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
                            </svg>
                          </button>
                        </div>

                        {/* Add more skill tags here */}
                      </div>
                    );
                  })}
                {skillsFromApi &&
                  skillsFromApi?.length !== 0 &&
                  skillsFromApi?.map((item, index) => {
                    return (
                      <div className="flex flex-wrap gap-2 mt-3">
                        <div
                          className="px-3 py-1 border border-gray-300 flex items-center space-x-2"
                          index={index}
                        >
                          <span>{item?.skill}</span>
                          {item?.type == "1" && <span>(Beginner)</span>}
                          {item?.type == "2" && <span>(Intermediate)</span>}
                          {item?.type == "3" && <span>(Advanced)</span>}
                          <button
                            type="button"
                            className="text-red-500 hover:text-red-700"
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

                        {/* Add more skill tags here */}
                      </div>
                    );
                  })}
              </div>
              {/* Skill Tag 2 */}

              <div className="text-center w-[42rem] md:w-[50rem] justify-between  flex mt-6">
                <button
                  type="button"
                  onClick={() =>
                    navigate(
                      preview == null
                        ? `/askskills?profile=${id}`
                        : `/preview?profile=${id}`
                    )
                  }
                  className="p-2 mt-1 mb-9  m-2 text-base rounded-md transition-all ease-in-out duration-200
                  border-black rounded-r-full rounded-l-full  border-2 font-light"
                >
                  Back
                </button>
                <button
                  type="button"
                  className="p-2 mt-1 mb-9  m-2 text-base rounded-md text-white bg-sky-500 rounded-l-full rounded-r-full
                  border-double border-2 font-light"
                  onClick={() => handleSubmit()}
                >
                  {preview != null ? "Save Changes" : "Next:Project"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Skill;
