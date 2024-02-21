import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Template = () => {
  const formatDate = (dateString, formatType) => {
    if (!dateString) return null;
  
    const date = new Date(dateString);
  
      return date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
  
  };
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  return (
    <div className="A4 w-full">
      <>
        {/* header */}
        <div className="px-2">
          <header className="flex justify-start gap-x-6 items-start">
            <div>
              <img
                className="w-28 h-32 mt-4 rounded-md"
                src={resumeData?.profile_picture}
                alt="Demo Image"
              />
              <div>
                <section className="  font-semibold text-sm mt-1 text-black justify-around items-center">
                  <h3>{resumeData?.email}</h3>
                  <h3>{resumeData?.mobile_no}</h3>
                  <h3>{resumeData?.address}</h3>
                  <h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData?.social_links?.map((links) => (
                        <a className="text-sky-500 " href={links?.link} key={links?.id}>
                          {links?.name}
                        </a>
                      ))}
                    </div>
                  </h3>
                </section>
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-xl">
                {" "}
                {resumeData?.full_name}
              </h1>
              <h3 className="font-medium text-gray-400 text-base">
                {resumeData?.position}
              </h3>
              <p className="font-medium  p-0.5 rounded-lg text-sm">
                {resumeData?.summary}
              </p>
            </div>
          </header>
        </div>
        {/* section 1*/}
        <div className="px-2">
          <section className="flex gap-10 justify-between">
            <div className="w-[50%]">
              <div>
                <h1 className="font-semibold uppercase text-base mt-4 ">
                  Work Experience
                </h1>
                {resumeData?.experiences?.map((exp, index) => (
                  <div className="mt-1 p-1 text-justify">
                    <h3 className="text-sm text-white w-fit p-1 rounded-lg bg-red-500 font-semibold">
                      {exp?.company_name}
                    </h3>
                    <div className="flex gap-2">
                      <p className="text-sm text-black">{exp?.designation}</p>
                      <p className="text-sm text-black">
                        {" "}
                        {formatDate(exp?.start_date)} -{" "}
                        {exp?.is_current ? "present" :formatDate(exp?.end_date)}
                      </p>
                    </div>
                    <p className="text-sm w-80% text-black font-medium">
                      {exp?.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className=" flex">
                <div>
                  <h1 className="font-semibold uppercase text-base mt-1 ">
                    Projects
                  </h1>
                  <div>
                    {resumeData?.projects?.map((project) => (
                      <div className="mt-1 p-1 text-justify">
                        <h3 className="text-sm text-white bg-red-500 w-fit p-1 rounded-md font-semibold">
                          {project?.title}
                        </h3>
                        <div className="flex gap-2">
                          <p className="text-sm text-black">
                            {project?.link}{" "}
                          </p>
                          <p className="text-sm text-black">
                            {" "}
                            {formatDate(project?.start_date)}-{formatDate(project?.end_date)}
                          </p>
                        </div>
                        <p className="text-xs w-80% text-black font-medium">
                          {project?.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="">
                  <h1 className="font-semibold uppercase text-base mt-4 ">
                    Education
                  </h1>
                  <div>
                    {resumeData?.eductaions.map((edu, index) => (
                      <div className="mt-1 p-1.5 rounded">
                        <div />
                        <h3 className="text-sm bg-red-500 text-white p-1 rounded-lg w-fit font-medium">
                          {edu?.university}
                        </h3>
                        <p className="text-sm text-gray-600">{edu?.course}</p>
                        <p className="text-sm text-gray-600">
                          {" "}
                          {formatDate(edu?.start_date)} -{" "}
                          {edu?.is_current ? "present" : formatDate(edu?.end_date)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <div className=" flex flex-col">
                <div className="bg-red-50 mt-10  rounded-md w-fit p-1">
                  <h1 className="font-semibold uppercase text-base ">
                    Skills
                  </h1>
                  <div className="flex  justify-start gap-y-2 gap-x-2 items-start  flex-wrap mt-2.5">
                    {resumeData?.skills?.map((item) => (
                      <p     key={item.id} className="text-sm rounded-md  font-semibold p-1 w-fit">
                      {item.skill}
                      </p>
                    ))}
                  </div>
                </div>
                {/* languages */}
                <div className="p-1 bg-red-50 rounded-md w-fit mt-10">
                  <h1 className="font-semibold uppercase text-base mt-1 ">
                    Language
                  </h1>
                  <div className="flex flex-wrap gap-x-2">
                  {resumeData?.languages?.map((item, index) => (

                    <div key={index+1} className="mt-1 flex gap-x-2 ">
                      <p className="text-sm">{item?.language}</p>
                    </div>
                  ))}
                 
                  </div>
                </div>
                {/*  certificates*/}
                <div className="w-fit bg-red-50 rounded-md p-1 mt-10">
                  <h1 className="font-semibold uppercase text-sm  ">
                    Certifications
                  </h1>
                  <div>
                    <ul className=" flex flex-col gap-x-2">
                    {resumeData?.certification?.map((item,index) => (
                    <li key={index+1}>{item?.certificate}</li>
                  ))}
                    </ul>
                  </div>
                </div>
                {/* Interest*/}
                <div className="w-fit bg-red-50 rounded-md p-1 mt-10">
                  <h1 className="font-semibold uppercase text-base  ">
                    Interests
                  </h1>
                  <div className="flex flex-wrap gap-3">
                    {resumeData?.interests.map((item, index) => (
                      <p key={index} className="text-sm px-2">
                        {item.interest}
                      </p>
                    ))}

                    {/* Add more interests as needed */}
                  </div>
                </div>
                {/* Video Profile */}
              
              </div>
            </div>
          </section>
        </div>
      </>
    </div>
  );
};

export default Template;
