import React from "react";

const VideoProfile = ({ videoAns }) => {
  console.log(videoAns.video);
  return (
    <div className="px-2 mt-2">
    
        <h1 className="font-semibold uppercase text-base mt-2 text-left text-teal-400 ">
          Video Profile
        </h1>

      <div className="flex flex-col gap-y-3">
        {videoAns?.slice(0, 3).map((data) => (
          <div>
            <h2 className="text-sm">{data?.question?.question}</h2>
            <a
              href={data?.video}
              className="text-sm p-1.5 cursor-pointer font-semibold bg-teal-400 rounded-md text-white"
            >
              Answer
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoProfile;
