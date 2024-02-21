import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VideoProfileRecorder from "./VideoProfileRecorder";
import { getQuestions } from "../services/ApiServices";

// import { useLocation } from "react-router-dom";
import {
  deleteAnswerByid,
  uploadVideo,
  getFullProfile,
} from "../services/ApiServices";
import showNotification from "../services/NotificationService";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const VideoPage = () => {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const picked = useSelector((state) => state.picked);
  const selectedProfile = useSelector((state) => state.selectedProfile);
  const [question, setQuestion] = useState([]);
  const [mediaStream, setMediaStream] = useState(null);
  const [recorder, setRecorder] = useState(null);
  const [show, setShow] = useState(false);
  const videoRef = useRef(null);
  const [isStart, setIsStart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(150);
  const [buttonId, setButtonId] = useState("save");
  const [videoEnded, setVideoEnded] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  let ID = new URLSearchParams(location.search).get("profile");


  useEffect(() => {
    fetchQuestion();
  }, []);
  async function fetchQuestion() {
    try {
      let response = await getQuestions();
      if (response?.data?.status === 200) {
        setQuestion(response?.data?.data);
      } else {
        setQuestion([]);
      }
    } catch (error) {
      setQuestion([]);
      console.log(error);
    }
  }

  
  //
  let timerInterval;

  const initializeWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { min: 320, ideal: 320 },
          height: { min: 240 },
          frameRate: 10,
          facingMode: "user",
        },
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
              return 0; // Set timer to zero
            }
          });
        }, 1000); // Update every 1 second (1000 milliseconds)
      };

      mediaRecorder.start();
    } catch (error) {
      const userConfirmed = window.confirm(
        "Please allow permission for camera and microphone"
      );
      if (userConfirmed) {
        requestPermission();
      }
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
  };

  const stopRecording = () => {
    clearInterval(timerInterval);

    const chunks = [];
    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        chunks.push(e.data);
      }

      return;
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
      if (response?.data?.status === 200) {
        showNotification("success", "Answer saved successfully");
        setIsLoading(false);
        setShowButtons(true);
        setShow(false);
        setShow(false);
        navigate(`/video-profile?profile=${ID}`);
    
      }
    };
    recorder.stop();
    mediaStream.getTracks().forEach((track) => track.stop());
  };

  const cancelRecording = async () => {
    setShow(false);
    recorder.stop();
    mediaStream.getTracks().forEach((track) => track.stop());
    navigate(`/video-profile?profile=${selectedProfile}`);
  };
  

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      let resp = await deleteAnswerByid(id);
      if (resp?.data?.status == 200) {
        setIsLoading(false);
        setIsStart(false);
        showNotification("success", "Answer deleted successfully");
        fetchQuestion();
        navigate(`/video-profile?profile=${ID}`);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  const requestPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      // If the user grants permission after the request
      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      // If the user still denies permission after the request
    }
  };
  
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="w-fit mx-auto sm:w-full bg-white p-4 relative">
          <VideoProfileRecorder
            picked={picked}
            videoRef={videoRef}
            handleVideoEnd={handleVideoEnd}
            startRecording={startRecording}
            stopRecording={stopRecording}
            handleDelete={handleDelete}
            isLoading={isLoading}
            show={show}
            setIsStart={setIsStart}
            timer={timer}
            cancelRecording={cancelRecording}
            buttonId={buttonId}
            videoEnded={videoEnded}
            questions={question}
            currentQuestionIndex={currentQuestionIndex}
            showButtons={showButtons}
          />
        </div>
      </div>
    </>
  );
};

export default VideoPage;
