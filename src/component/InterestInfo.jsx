import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createInterest } from "../services/ApiServices";
import showNotification from "../services/NotificationService";
import {
  addInterests,
  removeInterests,
  resetInterests,
  restoreInterests,
  updateInterests,
} from "../slice/InterestInfoSlice";
import { resetForm } from "../slice/showContentSlice";
import { getFull } from "../actions/allProfieAction";
 import Tipsbar from "./Tipsbar";
const interestSchema = Yup.object().shape({
  name: Yup.string().required("Interest name is required"),
});
const InterestInfo = () => {
  const [open, SetOpen] = useState(false);
  const HandlecloseDrawer = () => SetOpen(false);
    const dispatch = useDispatch();
    const interests = useSelector((state) => state?.interest?.Interest);
    
    const resumeData = useSelector(
      (state) => state?.fullProfile?.resumeData?.data?.interests
    );
    const id = useSelector((state) => state?.fullProfile?.resumeData?.data?.id);
    const initialValues = useSelector((state) => state?.interest?.formData);
  
    const addInterestHandler = (values) => {
      dispatch(addInterests({ name: values?.name}));
      dispatch(restoreInterests());
    };
    const removeInterestHandler = (index) => {
      dispatch(removeInterests(index));
    };
  
    const handleSubmit = async () => {
      if (interests?.length !== 0) {
        let formData = new FormData();
        formData.append("profile", id);
        formData.append("total_interests", interests?.length);
        for (let index = 0; index < interests?.length; index++) {
          formData.append(`interest${index + 1}`, interests[index]?.name);
  
        }
        
        try {
          let response = await createInterest(formData);
  
          if (response?.data?.status == 201) {
            dispatch(resetForm());
            dispatch(getFull(id));
            dispatch(resetInterests());
       
          }
        } catch (error) {}
      } else {
        handleNavigate();
      }
    };
  
  return (
    <>
  <Formik
        enableReinitialize
        initialValues={initialValues} // Assuming `skills` is coming from the Redux store
        onSubmit={(values) => {
          addInterestHandler(values);
        }}
        validationSchema={interestSchema}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="overflow-y-auto p-6  rounded-b-2xl bg-white h-full no-scrollbar relative">
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
                  dispatch(updateInterests({ name: e.target.value }));
                }}
                placeholder="Hiking"
                className="block appearance-none w-[39rem] mt-2 sm:w-[36rem] md:w-[30rem] bg-white border rounded-md border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 "
              />

              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />

              <button
                type="submit"
                className="bg-blue-600 text-[16px] my-5 rounded-full text-white px-[10px] py-[5px] "
              >
                + Add More
              </button>
              <div className="flex flex-wrap justify-start gap-4 ">
          
                {interests &&
                  interests?.length !== 0 &&
                  interests?.map((item, index) => {
                    return (
                      <div className="flex flex-wrap transition-all delay-75 gap-2 mt-3">
                        <div
                          className="px-3 py-1 border rounded-r-full text-white bg-sky-600 rounded-l-full border-gray-300 flex items-center space-x-2"
                          index={index}
                        >
                          <span>{item?.name}</span>
                         
                          <button
                            type="button"
                            className="text-white transition-all delay-75 hover:text-red-500 font-bold"
                            onClick={() => removeInterestHandler(index)}
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
    
    </>
  );
};

export default InterestInfo;
