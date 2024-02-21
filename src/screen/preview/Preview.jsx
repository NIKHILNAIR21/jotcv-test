import axios from "axios";
import { saveAs } from "file-saver";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getFull } from "../../actions/allProfieAction";
import { getFullProfile } from "../../services/ApiServices";
import { saveTempId } from "../../slice/templateIDSlice";
import ResumeLayout from "../../templates/ResumeLayout";
import { useError } from "../../Custom";
const Preview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { hasError, setError, resetError } = useError();
  let id = new URLSearchParams(location.search).get("profile");
  const [subs, setSubs] = useState(null);
  const [allData, setAllData] = useState([]);
  const [downloadInProgress, setDownloadInProgress] = useState(false);
  const tempId = useSelector((state) => state?.templateID?.tempId);

  useEffect(() => {
    const getAllProfiles = async () => {
      try {
        let response = await getFullProfile(id);
        if (response?.data?.status == 200) {
          setSubs(response?.data?.subscription?.subscription);
          setAllData(response?.data?.data);
        } else {
        }
      } catch (error) {
        setError();
      }
    };
    getAllProfiles();

    dispatch(getFull(id));
  }, []);

  useEffect(() => {
    globalThis?.addEventListener("beforeprint", () => {
      globalThis.document.title = `Resume_Builder_${Date.now()}`;
    });

    globalThis?.addEventListener("afterprint", () => {
      globalThis.document.title = "Single Page Resume Builder";
    });
  }, []);
  const handleScroll = (isEnabled) => {
    if (isEnabled) {
      document.body.style.overflow = "auto"; // Enable scrolling
      document.body.style.paddingTop = "0"; // Reset padding-top
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
    } else {
      document.body.style.overflow = "hidden"; // Disable scrolling
      // Add padding-top equivalent to the scrollbar width to prevent page from shifting
    }
  };

  // Run this effect when the component mounts
  useEffect(() => {
    // Disable scroll when the component mounts
    handleScroll(false);

    // Re-enable scroll when the component unmounts
    return () => {
      handleScroll(true);
    };
  }, []);

  const createAndDownloadPdf = () => {
    setDownloadInProgress(true);
    const body = {
      data: allData,
    };
    axios
      .post(`https://node-api.jotcv.com/create-pdf/${tempId}`, body) //https://node-api.jotcv.com/create-pdf/${tempId}  http://localhost:5000/create-pdf/${tempId}
      .then(() =>
        axios.get(`https://node-api.jotcv.com/fetch-pdf/${tempId}`, {
          responseType: "blob",
        })
      ) //   https://node-api.jotcv.com/fetch-pdf/${tempId} http://localhost:5000/fetch-pdf/${tempId}
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
      
        // saveAs(pdfBlob, `${allData?.full_name}.pdf`);
        const pdfObjectURL = URL.createObjectURL(pdfBlob);
        setDownloadInProgress(false);
      })
      .catch((err) => {
        setDownloadInProgress(false);
        setError();
      });
  };
  return (
    <>
      {hasError && <p>Somthing is wrong, Please Try again</p>}
      <div className=" flex w-[210mm] sm:w-[211mm] flex-col  lg:flex-row md:w-full items-center mx-auto  justify-center">
        <div className="flex flex-col  justify-start md:ml-40 sm:border-2 p-2 rounded-md bg-gray-100 md:pr-2 md:m-10 print:hidden">
          <h1 className="font-medium text-xl text-center md:text-left md:w-[12rem] ">
            Resume Sections
          </h1>
          <div className=" flex lg:flex-col space-x-1  flex-wrap justify-center text-left ">
            <p
              className="text-sm py-2 cursor-pointer px-1 text-gray-600"
              onClick={() => {
                navigate(`/personal-info?profile=${id}&preview`);
                dispatch(saveTempId(allData?.template));
              }}
            >
              <i className="fas fa-file me-2" aria-hidden="true"></i>Personal
              Info
            </p>
            <p
              className="text-sm py-2 cursor-pointer font-semibold text-sky-500"
              onClick={() => {
                navigate(`/video-profile?profile=${id}`);
                dispatch(saveTempId(allData?.template));
              }}
            >
              <i className="fas fa-video me-2" aria-hidden="true"></i>Video
              Profile
              <span className="bg-red-500 p-1 mx-2 text-xs rounded-lg text-white">
                new
              </span>
            </p>
            <p
              className="text-sm py-2 cursor-pointer text-gray-600"
              onClick={() =>
                navigate(
                  allData?.experiences?.length != 0
                    ? `/work-history?profile=${id}&preview`
                    : `/workexp?profile=${id}&preview`
                )
              }
            >
              <i className="fa fa-users me-2" aria-hidden="true"></i> Work
              Experience
            </p>
            <p
              className="text-sm py-2 cursor-pointer text-gray-600"
              onClick={() =>
                navigate(
                  allData?.eductaions?.length != 0
                    ? `/education-history?profile=${id}&preview`
                    : `/education?profile=${id}&preview`
                )
              }
            >
              <i class="fa fa-graduation-cap me-2" aria-hidden="true"></i>{" "}
              Education
            </p>
            <p
              className="text-sm py-2 cursor-pointer text-gray-600"
              onClick={() => navigate(`/skill?profile=${id}&preview`)}
            >
              <i class="fa fa-list me-2" aria-hidden="true"></i> Skills
            </p>
            <p
              className="text-sm py-2 cursor-pointer text-gray-600"
              onClick={() =>
                navigate(
                  allData?.projects?.length != 0
                    ? `/project-history?profile=${id}&preview`
                    : `/add-projects?profile=${id}&preview`
                )
              }
            >
              <i class="fa fa-briefcase me-2" aria-hidden="true"></i> Projects
            </p>
            <p
              className="text-sm py-2 cursor-pointer text-gray-600"
              onClick={() => navigate(`/interests?profile=${id}&preview`)}
            >
              <i class="fa fa-list me-2" aria-hidden="true"></i> Interests
            </p>
            <p
              className="text-sm py-2 cursor-pointer text-gray-600"
              onClick={() => navigate(`/certificates?profile=${id}&preview`)}
            >
              <i class="fa fa-certificate me-2" aria-hidden="true"></i>{" "}
              Certificates
            </p>
            <p
              className="text-sm py-2 cursor-pointer text-gray-600"
              onClick={() => navigate(`/languages?profile=${id}&preview`)}
            >
              <i class="fa fa-language me-2" aria-hidden="true"></i> Languages
            </p>
            <p
              className="text-sm py-2 cursor-pointer text-gray-600"
              onClick={() => navigate(`/social?profile=${id}&preview`)}
            >
              <i class="fa fa-share-square-o me-2" aria-hidden="true"></i>{" "}
              Social
            </p>

            <p
              className="text-base py-2  text-sky-500 w-fit  rounded-lg font-semibold  cursor-pointer "
              // onClick={()=>createAndDownloadPdf()}
              onClick={() =>
                subs != null
                  ? createAndDownloadPdf()
                  : navigate("/pricing-plans")
              }
            >
              <i class="fa fa-download me-2" aria-hidden="true"></i>Download
            </p>
          </div>
        </div>

        <div className="flex flex-col ">
          <main className="flex flex-1 max-h-[57rem] sm:max-h-[calc(100vh_-_8.5rem)] print:max-h-100">
            <div className="flex flex-col flex-1 justify-center bg-custom-grey100 print:bg-white  ">
              <div
                className="overflow-auto no-scrollbar  bg-slate-100 py-10 rounded-lg "
                id="resume"
              >
                <ResumeLayout />
              </div>
            </div>
          </main>
        </div>
      </div>
      {downloadInProgress && (
        <div
          className={`fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded shadow transition-opacity ${
            downloadInProgress ? "opacity-100" : "opacity-0"
          }`}
        >
          Download in Progress...
        </div>
      )}
    </>
  );
};

export default Preview;
