import React from "react";

const VideoProfile = ({videoAns}) => {
  return (
    <div className="px-2">
      <h1 className="font-semibold uppercase text-xl mt-4 text-emerald-500 ">
        Video Profile
      </h1>
<div className="flex gap-x-3">
{videoAns?.slice(0, 3).map((data) => (
              <div>
                <h2 className="text-base">{data?.question?.question}</h2>
                <a href={data?.video} className="text-sm">
                  Answer
                </a>
              </div>
            ))}
</div>
    </div>
  );
};

export default VideoProfile;
