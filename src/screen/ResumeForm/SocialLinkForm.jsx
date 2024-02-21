import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  createSocialLinks,
  deleteSocialLinks,
  getAllSocialLinks,
} from "../../services/ApiServices";
import showNotification from "../../services/NotificationService";
import Sidebar from "../../component/Sidebar";
import { useDispatch } from "react-redux";
import { markSocialAsCompleted } from "../../slice/allProfileComplitionSlice";

const SocialLinkForm = () => {
  const [selectedSocial, setSelectedSocial] = useState("");
  const [socialLinks, setSocialLinks] = useState([]);
  const [link, setLink] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let id = new URLSearchParams(location.search).get("profile");
  let preview = new URLSearchParams(location.search).get("preview");

  const socialOptions = [
    "LinkedIn",
    "Twitter",
    "GitHub",
    "Instagram",
    "Facebook",
    "GitLab",
  ];

  useEffect(() => {
    getLinks();
  }, []);

  const getLinks = async () => {
    try {
      let response = await getAllSocialLinks(id);
      if (response?.data?.status == 200) {
        setSocialLinks(response?.data?.data);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validation = () => {
    const errors = {};
    if (selectedSocial == "") {
      errors.social = "Please select social platform";
    }
    if (link == "") {
      errors.link = "Please enter link";
    }

    return Object.keys(errors).length > 0 ? errors : null;
  };

  const handleSocialChange = (e) => {
    setSelectedSocial(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const addSocialLink = async () => {
    setIsClicked(true);
    if (!validation()) {
      let body = {
        profile: id,
        total_links: 1,
        social1: { name: selectedSocial, link },
      };

      try {
        let response = await createSocialLinks(body);
        if (response?.data?.status == 201) {
          getLinks();
          setSelectedSocial("");
          setLink("");

          // navigate(`/education-history?profile=${id}`);
          // dispatch(resetEdu())
        }
      } catch (error) {}
    }
  };

  const handleDelete = async (delid) => {
    try {
      let resp = await deleteSocialLinks(delid);
      if (resp?.data?.status == 200) {
        showNotification("success", "Link deleted successfully");
        getLinks();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col bg-gray-100 w-[54rem] sm:w-full justify-center">
        <div className="md:mt-[4rem] mx-auto">
          {preview == null && <Sidebar />}
        </div>
        <div>
          <div className="w-[36rem] sm:w-[45rem] md:w-[50rem] mx-auto flex flex-col justify-between  rounded p-4  mt-10 mb-10">
            <h1 className="text-2xl text-center font-semibold mb-4">
              Social Links
            </h1>
            <div className="flex  space-x-4">
              <div className="w-1/2">
                <select
                  className="w-full border rounded-md p-2"
                  value={selectedSocial}
                  onChange={handleSocialChange}
                >
                  <option value="">Select Social</option>
                  {socialOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {isClicked && (
                  <div className="text-red-700  py-2 ">
                    <span className="block sm:inline">
                      {validation()?.social}
                    </span>
                  </div>
                )}
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  className="w-full border  rounded-md p-2"
                  placeholder="www.facebook.com"
                  value={link}
                  onChange={handleLinkChange}
                />
                {isClicked && (
                  <div className="text-red-700  py-2 ">
                    <span className="block sm:inline">
                      {validation()?.link}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <button
              className="mt-4 w-fit bg-blue-500 text-white py-2 px-4 rounded-md text-center hover:bg-blue-600"
              onClick={addSocialLink}
            >
              Add Social Link
            </button>
            <div className="mt-6">
              <ul>
                {socialLinks?.map((linkItem, index) => (
                  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-xl font-semibold">
                          {linkItem?.name}
                        </h2>
                        <h5 className="text-gray-600">{linkItem?.link}</h5>
                      </div>
                      <button
                        className="text-red-500 hover:text-red-600"
                        onClick={() => handleDelete(linkItem?.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex mt-20  w-[44rem] h-screen sm:h-0 sm:w-full md:w-[48rem] mx-auto justify-between   text-right mb-72">
            <div>
              <button
                onClick={() =>
                  navigate(
                    preview !== null
                      ? `/preview?profile=${id}`
                      : `/languages?profile=${id}`
                  )
                }
                className="p-2 mt-1 mb-9 m-2 text-base rounded-r-full rounded-l-full transition-all ease-in-out duration-200
             border-black border-2 font-light"
                type="button"
              >
                BACK
              </button>
            </div>
            <div>
              <button
                type="button"
                className="p-2 mt-1 mb-9 m-2 text-base rounded-r-full rounded-l-full text-white bg-sky-500
          border-double border-2 font-light"
                onClick={() => {
                  navigate(`/preview?profile=${id}`);
                  dispatch(markSocialAsCompleted());
                }}
              >
                {preview !== null ? "SAVE & NEXT" : "Next:Finalize"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialLinkForm;
