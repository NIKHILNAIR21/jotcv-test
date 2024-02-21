import React from "react";

const VideoProfile = ({ videoAns }) => {
  return (
    <div className="px-2">
      <div className="border-t-2 border-gray-700 border-b-2">
        <h1 className="font-semibold uppercase text-base text-center text-gray-700 ">
          Video Profile
        </h1>
      </div>
      <div className="flex gap-x-4 flex-wrap">
        {videoAns?.map((data) => (
          (data?.video !== null) ? (
          <div>
            <h2 className="text-sm">{data?.question?.question}</h2>
            <a
              href={data?.video}
              className="text-sm p-1.5 font-semibold bg-gray-700 rounded-md text-white"
            >
              Answer
            </a>
          </div>
          ):null
        ))}
      </div>
    </div>
  );
};

export default VideoProfile;
