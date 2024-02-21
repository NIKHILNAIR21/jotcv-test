import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEducation } from "../../../actions/educationAction";
import { useLocation, useNavigate } from "react-router";
import { resetEdu } from "../../../slice/educationSlice";
import { deleteEduByid } from "../../../services/ApiServices";
import showNotification from "../../../services/NotificationService";
import Loader from "../../../component/loader";

function EducationHistory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  let id = new URLSearchParams(location.search).get("profile");
  const list = useSelector((state) => state?.eduHistory?.list?.data);
  const isLoading = useSelector((state) => state?.eduHistory?.loading);
  let fromPreview = new URLSearchParams(location.search).get("preview");
  useEffect(() => {
    dispatch(getAllEducation(id));
  }, []);

  const handleDelete = async (delid) => {
    try {
      let resp = await deleteEduByid(delid);
      if (resp?.data?.status == 200) {
        showNotification("success", "Education deleted successfully");
        dispatch(getAllEducation(id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-gray-100 w-[54rem]  sm:w-full min-h-screen">
      <div className="container w-[54rem]  sm:w-full mx-auto p-8">
        <h2 className="text-3xl text-center font-semibold mb-2">
          Education History Summary
        </h2>
        {/* Education history Item 1 */}
        {list && list?.length != 0 ? (
          <>
            {list?.map((item, index) => {
              return (
                <div className="mt-4 w-full  mx-auto p-4 rounded-lg bg-white shadow-md  ">
                  <div
                    className=" pt-4 mt-4 first:mt-0 flex flex-row justify-around items-start sm:items-center transform hover:scale-105 transition-transform duration-300 "
                    key={index}
                  >
                    <h3 className="text-lg  px-1 py-1 text-blue-500  rounded-md font-medium mb-2">
                      {item?.university}
                    </h3>
                    <div>
                      <h4 className="text-gray-600">Degree: {item?.course}</h4>
                      <h5 className="text-gray-600">
                        Duration: {item?.start_date} -{" "}
                        {item?.is_current
                          ? "Currently Studying"
                          : item?.end_date}
                      </h5>
                    </div>

                    <div className="mt-2 flex space-x-2">
                      <button
                        className="mr-2 text-blue-500 hover:text-blue-700"
                        onClick={() =>
                          navigate(
                            fromPreview != null
                              ? `/education?edu=${item?.id}&profile=${id}&preview`
                              : `/education?edu=${item?.id}&profile=${id}`
                          )
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                        >
                          <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                        </svg>
                      </button>
                      <button
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
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}

        {/* Work History Item 2 (Copy and modify as needed) */}
        {/* ... */}

        <div className="mt-4 mb-4 flex justify-center">
          <button
            className="bg-sky-500 font-medium text-white px-3 py-2 rounded-md "
            onClick={() => {
              navigate(
                fromPreview != null
                  ? `/education?profile=${id}&preview`
                  : `/education?profile=${id}`
              );
              dispatch(resetEdu());
            }}
          >
            + Add Another Degree
          </button>
        </div>
        <div className=" flex mt-20 mb-72 sm:mb-32 w-full  h-screen justify-between  text-right ">
          <div>
            <button
              type="button"
              className="p-2 mt-1 mb-9 m-2 text-base rounded-md transition-all ease-in-out duration-200
           border-black border-2 font-light rounded-r-full rounded-l-full"
              onClick={() =>
                navigate(
                  fromPreview !== null
                    ? `/preview?profile=${id}`
                    : `/edutips?profile=${id}`
                )
              }
            >
              Back
            </button>
          </div>
          <div>
            <button
              type="button"
              className="p-2 mt-1 mb-9 m-2 text-base rounded-md text-white bg-sky-500
           border-double border-2 font-light rounded-r-full rounded-l-full"
              onClick={() => {
                if (list?.length >= 2 && list?.length <= 3) {
                  navigate(
                    fromPreview != null
                      ? `/preview?profile=${id}`
                      : `/askskills?profile=${id}`
                  );
                }else{
                  showNotification("danger","Aleast Two Education and Not more Than Three")
                }
              }}
            >
              {fromPreview !== null ? "Save Changes" : "Next: Skills"}
            </button>
          </div>
        </div>
        {isLoading ? <Loader /> : null}
      </div>
    </div>
  );
}

export default EducationHistory;
