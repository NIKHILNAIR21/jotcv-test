import React from "react";

const VideoProfile = ({videoAns}) => {
  console.log(videoAns);
  return (
    
    <div className="px-4">
      <h1 className="font-semibold uppercase text-base mt-4 text-red-400 ">
        Video Profile
      </h1>
<div className="flex gap-x-4 flex-wrap">
{videoAns?.map((data) => (
  (data?.video !== null) ? (
    <div key={data.id}>
      <h2 className="text-sm">{data?.question?.question}</h2>
      <a href={data?.video} className="text-sm underline">
        Answer
      </a>
    </div>
  ) : null
))}
</div>
    </div>
  );
};

export default VideoProfile;
