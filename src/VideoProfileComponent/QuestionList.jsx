import React, { useEffect, useRef, useState } from "react";
import VideoProfileRecorder from "./VideoProfileRecorder";
import { getQuestions } from "../services/ApiServices";
import { deleteAnswerByid, uploadVideo } from "../services/ApiServices";
import { useSelector, useDispatch } from "react-redux";
import { setPicked } from "../slice/PickedSlice";
import { Link } from "react-router-dom";
import showNotification from "../services/NotificationService";

const QuestionList = () => {
  const [showScreen, setShowScreen] = useState(false);
  // const [picked, setPicked] = useState("");
  const picked = useSelector((state) => state.picked); // Retrieve 'picked' from the Redux store
  const dispatch = useDispatch();
  const [isStart, setIsStart] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [mediaStream, setMediaStream] = useState(null);
  const [recorder, setRecorder] = useState(null);
  const [show, setShow] = useState(false);
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const [buttonId, setButtonId] = useState("save");
  const [videoEnded, setVideoEnded] = useState(false);

  let id = new URLSearchParams(location.search).get("profile");
  
  // Dummy data for questions
  useEffect(() => {
    getAllQuestions();
  }, []);

  const getAllQuestions = async () => {
    try {
      let response = await getQuestions(id);
      if (response?.data?.status == 200) {
        setQuestions(response?.data?.data);
      
      } else {
        setQuestions([]);
      }
    } catch (error) {
      setQuestions([]);
      console.log(error);
    }
  };

  let timerInterval;

  const initializeWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setMediaStream(stream);

      // Assign the stream to the video element to display the webcam feed
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      const mediaRecorder = new MediaRecorder(stream);
      setRecorder(mediaRecorder);

      mediaRecorder.onstart = () => {
        // Initialize the timer state

        timerInterval = setInterval(() => {
          setTimer((prevTimer) => {
            if (prevTimer > 0) {
              return prevTimer - 1;
            } else {
              // Timer reached zero, stop recording and hit the API

              document.getElementById(buttonId)?.click();

              // Call your handleSave function to hit the API
              return 0; // Set timer to zero
            }
          });
        }, 1000); // Update every 1 second (1000 milliseconds)
      };

      mediaRecorder.start();
    } catch (error) {
      console.error("Error initializing webcam:", error);
    }
  };
  const handleVideoEnd = () => {
    setVideoEnded(true);
    setTimeout(() => {
      initializeWebcam();
      setShow(true);
      setVideoEnded(false);
    }, 500);
  };
  const startRecording = () => {
    initializeWebcam();
    setTimer(30);
    setShow(true);
    setIsStart(true);
  };

  const stopRecording = () => {
    clearInterval(timerInterval);

    const chunks = [];
    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        chunks.push(e.data);
      }
    };
    recorder.onstop = async () => {
      setIsLoading(true);
      const recordedVideo = new Blob(chunks, { type: "video/webm" });
      let formData = new FormData();
      formData.append("video", recordedVideo);
      let response = await uploadVideo(
        picked?.answer_details?.answer_id,
        formData
      );
      if (response?.data?.status == 200) {
        showNotification("success", "Answer saved successfully");
        setIsLoading(false);
        setShowScreen(false);
        getAllQuestions();
        setShow(false);
        setIsStart(false);
      }
      
    };
    recorder.stop();
    mediaStream.getTracks().forEach((track) => track.stop());
  };

  const cancelRecording = () => {
    setShow(false);
    setIsStart(false);
    recorder.stop();
    mediaStream.getTracks().forEach((track) => track.stop());
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      let resp = await deleteAnswerByid(id);
      if (resp?.data?.status == 200) {
        setIsLoading(false);
        setShowScreen(false);
        setIsStart(false);
        showNotification("success", "Answer deleted successfully");
        getAllQuestions();
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col  h-screen">
        {/* Left side for the question list */}
        <div
          className={
            showScreen
              ? "w-full bg-white p-4 overflow-y-auto"
              : "container mx-auto py-8"
          }
        >
          <h2 className="text-2xl font-semibold mb-4">Video Profile</h2>
          {questions?.map((data) => (
            <Link
              to={`/video/${data.id}?profile=${id}`} // Navigate to the new page with the question ID
              key={data.id}
            >
              <div
                className={
                  data?.answer_details?.video !== null
                    ? "bg-white  border-2 border-green-500  rounded-lg p-1  m-1 sm:m-4 flex justify-between item-center shadow-lg shadow-green-100 "
                    : "bg-white    border-2 border-gray-500 rounded-lg p-1 m-1 sm:m-4 flex justify-between "
                } //"bg-white shadow-md rounded-lg p-4 m-4 flex mb-4"
                onClick={() => {
                  setShowScreen(true);
                  setIsStart(true);
                  dispatch(setPicked(data));
                }}
              >
                {/* Left side for the question */}
                <div className="flex justify-between  w-full item-center">
                  <h3 className="text-xs w-[50%] sm:text-lg font-semibold">
                    {data?.question}
                  </h3>
                  {data?.answer_details?.video !== null ? (
                    <p className="bg-green-500 w-[35%] sm:w-fit p-1 text-[10px] text-white font-semibold origin-center  rounded-l-full rounded-r-full  uppercase text-center h-fit">
                      Completed
                    </p>
                  ) : (
                    <p className="bg-red-500 w-[35%] sm:w-fit p-1 text-[10px] text-white font-semibold origin-center rounded-l-full rounded-r-full py-1 h-fit uppercase text-center ">
                      Not Answered
                    </p>
                  )}
                </div>

                {/* Right side for the "Record Your Answer" button */}
                {!isStart && (
                  <div className="ml-3">
                    <button
                      className="text-white py-2 px-2 border rounded-full"
                      onClick={() => {
                        setShowScreen(true);
                        setIsStart(true);
                        dispatch(setPicked(data));
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Right side for video recording */}
      </div>
    </>
  );
};

export default QuestionList;
// {showScreen && (
//   <div className="w-full bg-white p-4 relative">
//     <div className="w-16 h-16 rounded-full bg-white absolute top-1/2  transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer" onClick={()=>{setShowScreen(false);cancelRecording()}}>
//       {/* Icon */}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="text-gray-500"
//       >
//         <line x1="19" y1="12" x2="5" y2="12"></line>
//         <polyline points="12 19 5 12 12 5"></polyline>
//       </svg>
//     </div>
//     <VideoProfileRecorder
//       picked={picked}
//       setShowScreen={setShowScreen}
//       setIsStart={setIsStart}
//       videoRef={videoRef}
//       handleVideoEnd={handleVideoEnd}
//       startRecording={startRecording}
//       stopRecording={stopRecording}
//       handleDelete={handleDelete}
//       isLoading={isLoading}
//       show={show}
//       timer={timer}
//       cancelRecording={cancelRecording}
//       buttonId={buttonId}
//       videoEnded={videoEnded}
//     />
//   </div>
// )}
