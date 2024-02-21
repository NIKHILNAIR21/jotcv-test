import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createSkills } from "../services/ApiServices";
import showNotification from "../services/NotificationService";
import Tipsbar from "./Tipsbar";
import {
  addSkill,
  removeSkill,
  resetSkil,
  restoreSkill,
  updateSkill,
} from "../slice/skillSlice";
import { resetForm } from "../slice/showContentSlice";
import { getFull } from "../actions/allProfieAction";
const SkillSchema = Yup.object().shape({
  name: Yup.string().required("skill name is required"),
});
const Skillinfo = () => {
  const [open, SetOpen] = useState(false);
  const HandlecloseDrawer = () => SetOpen(false);
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills?.skills);
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data?.skills
  );
  const id = useSelector((state) => state?.fullProfile?.resumeData?.data?.id);
  const initialValues = useSelector((state) => state?.skills?.formData);

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
          dispatch(resetForm());
          dispatch(getFull(id));
          dispatch(resetSkil());
          // if (skills?.length >= 5) {
          // } else {
          //   showNotification("danger", "Atleast 5 skill is required");
          // }
        }
      } catch (error) {}
    } else {
      handleNavigate();
    }
  };

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={initialValues} // Assuming `skills` is coming from the Redux store
        onSubmit={(values) => {
          addSkillHandler(values);
        }}
        validationSchema={SkillSchema}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="overflow-y-auto p-6 w-fit rounded-b-2xl bg-white h-full no-scrollbar relative">
              <div
                className="absolute top-1 right-2 cursor-pointer font-bold"
                onClick={() => SetOpen(!open)}
              >
                Need Help ?
              </div>
              {open && <Tipsbar open={open} onClose={HandlecloseDrawer} />}
              <Field
                type="text"
                name="name"
                value={values?.name}
                onChange={(e) => {
                  setFieldValue(`name`, e.target.value);
                  dispatch(updateSkill({ name: e.target.value }));
                }}
                placeholder="Javascript"
                className="block appearance-none w-[39rem] mt-2 sm:w-[36rem] md:w-[30rem] bg-white border rounded-md border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 "
              />

              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
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
                    className="block appearance-none w-[39rem] sm:w-[36rem] md:w-[30rem] bg-white border rounded-md outline-none border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 "
                  >
                    <option className="m-5 text-blue-300" value="1">
                      Beginner
                    </option>
                    <option className="m-5 text-blue-500" value="2">
                      Intermediate
                    </option>
                    <option className="m-5 text-blue-700" value="3">
                      Advanced
                    </option>
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
              <button
                type="submit"
                className="bg-blue-600 text-[16px] my-5 rounded-full text-white px-[10px] py-[5px] "
              >
                + Add More
              </button>
              <div className="flex flex-wrap justify-start w-[33rem] gap-4 ">
                {/* Skill Tag 1 */}
                {skills &&
                  skills?.length !== 0 &&
                  skills?.map((item, index) => {
                    return (
                      <div className="flex flex-wrap transition-all delay-75 gap-2 mt-3">
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
                            className="text-white transition-all delay-75 hover:text-red-500 font-bold"
                            onClick={() => removeSkillHandler(index)}
                          >
                            X
                          </button>
                        </div>

                        {/* Add more skill tags here */}
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="flex  justify-end mt-2">
              <button
                onClick={() => dispatch(resetForm())}
                type="button"
                className=" text-[17px] rounded-full  px-[20px] py-[10px] "
              >
                cancel
              </button>
              <button
                onClick={() => handleSubmit()}
                type="button"
                className="bg-blue-600 text-[20px] rounded-full text-white px-[20px] py-[10px] "
              >
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Skillinfo;
