import React from "react";

const VideoProfile = ({ videoAns }) => {
  return (
    <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-2 text-gray-700 ">
        Video Profile
      </h1>
      <div className="flex flex-wrap gap-x-3">
        {videoAns?.map((data) =>
          data?.video !== null ? (
            <div>
              <h2 className="text-sm">{data?.question?.question}</h2>
              <a href={data?.video} className="text-sm">
                Answer
              </a>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default VideoProfile;
