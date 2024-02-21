import React, { useState, useRef, useEffect } from "react";
import Loader from "../component/loader";
import { useNavigate } from "react-router";

const VideoProfileRecorder = ({
  picked,
  setShowScreen,
  setIsStart,
  videoRef,
  handleVideoEnd,
  startRecording,
  stopRecording,
  handleDelete,
  isLoading,
  show,
  timer,
  cancelRecording,
  buttonId,
  videoEnded,
  showButtons ,
  currentQuestionIndex, // Added prop
  questions, // Added prop
}) => {
  
  const navigate = useNavigate();
  useEffect(() => {
    const confirmExit = (e) => {
      // Display a confirmation dialog before leaving/reloading the page

      e.preventDefault();
      e.returnValue = "";
    };

    // Add the event listener when the component mounts
    window.addEventListener("beforeunload", confirmExit);

    // Remove the event listener when the component unmounts to avoid memory leaks
    return () => {
      window.removeEventListener("beforeunload", confirmExit);
    };
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    if (seconds === 0 && show) {
      // When the timer reaches zero and it's in "show" mode (recording), save the answer and navigate
      stopRecording();
      // moveToNextQuestion();
    }
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  // const moveToNextQuestion = () => {
  //   if (currentQuestionIndex < questions.length - 1) {
  //     // Navigate to the next question
  //     // You can customize this navigation logic based on your routing setup
  //     currentQuestionIndex++;
  //     navigate(`/video/${questions[currentQuestionIndex].id}`);
  //   } else {
  //     // Navigate to the video profile page
  //     // You can customize this navigation logic based on your routing setup
  //     navigate(`/video-profile?profile=${selectedProfile}`);
  //   }
  // };
  return (
    <>
      <div className="w-[23rem] mx-auto sm:w-[60%] h-[90%]   p-4 mt-12 border bg-sky-50 border-gray-200 rounded-lg shadow-md ">
        <h1 className="text-2xl w-full text-center font-semibold mb-2">{picked?.question}</h1>
        <p className="text-sm mb-4 text-center">{picked?.help_text}</p>

        {show ? (
          <div className="mb-2 flex flex-col items-center ">
            {/* Display the webcam feed */}
            <h1 className="text-xl font-semibold mb-2" style={{ color: "red" }}>
              Time Left: {formatTime(timer)}
            </h1>

            <video
              ref={videoRef}
              autoPlay
              controls
              className="w-[40rem] h-[30rem]"
            ></video>
          </div>
        ) : (
          !picked?.answer_details?.video && (
            <>
              {picked?.video && (
                <video
                  onEnded={handleVideoEnd}
                  autoPlay
                  className={`w-[30rem] h-96 mx-auto `}
                  src={picked?.video}
                ></video>
              )}
            </>
          )
        )}

        <div className="mb-4 flex items-center mt-16 justify-center">
        {picked?.answer_details?.video && !show && (
            <button
              onClick={() => startRecording()}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            >
              Re-Attempt
            </button>
          )}
          {picked?.answer_details?.video && !show && (
            <button
              onClick={() => window.open(picked?.answer_details?.video, "_blank")}
              className="bg-orange-500 text-white py-2 px-4 rounded ml-2"
            >
              View Answer
            </button>
          )}
          {show && (
            <button
              id={buttonId}
              onClick={() => {
                stopRecording();
                setShow(!show);
              }}
              className="bg-blue-500 text-white py-2 px-4 rounded ml-2"
            >
              Save
            </button>
          )}
          {show && (
            <button
              onClick={() => {
                setShowScreen(false);
                cancelRecording();
              }}
              className="bg-red-500 text-white py-2 px-4 rounded ml-2"
            >
              Cancel
            </button>
          )}
          {picked?.answer_details?.video && !show && (
            <button
              onClick={() => handleDelete(picked?.answer_details?.answer_id)}
              className="bg-red-500 text-white py-2 px-4 rounded ml-2 "
            >
              Delete
            </button>
          )}
        </div>
      </div>
      {isLoading && <Loader />}
    </>
  );
};

export default VideoProfileRecorder;
