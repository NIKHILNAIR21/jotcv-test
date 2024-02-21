import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import website from "../assets/form-website.png";
import linkedin from "../assets/form-linkedin.png";
import github from "../assets/form-github.png";
import behance from "../assets/form-behance.png";
import dribble from "../assets/form-dribble.png";
import {
  updateSocialLinks,
  addSocialLinks,
  deleteSocialLink,
} from "../slice/SocialLInksSlice";
import { deleteSocialLinks } from "../services/ApiServices";
import showNotification from "../services/NotificationService";
const SocialInfoForm = () => {
  const dispatch = useDispatch();

  const SocialLinkData = useSelector((state) => state.socialLinks?.social);

  const [links, setLinks] = useState([
    "Website",
    "Linkedin",
    "Github",
    "Dribble",
    "Behance",
  ]);
  const image = {
    Website: website,
    Github: github,
    Linkedin: linkedin,
    Behance: behance,
    Dribble: dribble,
  };
  const [localSocialLinks, setLocalSocialLinks] = useState([]);
  let data = SocialLinkData?.map((item) => item?.name);
  useEffect(() => {
    const filteredLinks = links?.filter((link) => {
      // Check if the link exists in socialLinkData
      return !data?.includes(link);
    });

    setLinks(filteredLinks);
    setLocalSocialLinks(SocialLinkData);
  }, [SocialLinkData]);

  const handlechose = (item) => {
    dispatch(addSocialLinks({ link: "", name: item }));
    let newArr = links?.filter((i) => i !== item);
    setLinks(newArr);
  };
  const handleChange = (e, item) => {
    const inputValue = e.target.value;

    // URL validation function
    const isValidUrl = (url) => {
      try {
        new URL(url);
        return true;
      } catch (error) {
        console.error("Invalid URL:", error.message);
        return false;
      }
    };

    // Update the link property of the item in the local state
    const updatedLocalSocialLinks = localSocialLinks.map((data) =>
      data.name === item ? { ...item, link: inputValue } : data
    );
    // Set the updated local state
    setLocalSocialLinks(updatedLocalSocialLinks);

    // Update the link property of the item in the state
    const updatedItem = { ...item, link: inputValue };

    // Dispatch the action to update the Redux state
    dispatch(updateSocialLinks(updatedItem));

    // Handle invalid URL case (you can show an error message to the user if needed)
    console.error("Please enter a valid URL");
  };
  const handleDeleteLink = (linkNameToDelete) => {
    // Assuming setLinks is used to update the links state
    setLinks((prevLinks) => [linkNameToDelete, ...prevLinks]);
  };
  const handleDeleteFromApi = async (item) => {
    try {
      let resp = await deleteSocialLinks(item?.id);
      if (resp?.data?.status == 200) {
        showNotification("success", "Link deleted successfully");
        handleDeleteLink(item?.name);
        dispatch(deleteSocialLink(item?.name));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2 className="text-lg">Links</h2>
      <div className="flex flex-col gap-1 w-[27rem] flex-wrap">
        {localSocialLinks?.map((item) => (
          <div className="flex gap-2 items-end my-3">
            <div className="flex-col">
              <div>
                <label>{item[name]}</label>
              </div>
              <input
                type="text"
                placeholder={`Enter your ${item?.name} URL`}
                name={item?.name}
                value={item?.link}
                className="p-2 rounded-lg w-full outline-none"
                onChange={(e) => handleChange(e, item)}
              />
            </div>
            <button
              type="button"
              onClick={() => {
                item?.id
                  ? handleDeleteFromApi(item)
                  : dispatch(deleteSocialLink(item?.name));
                handleDeleteLink(item?.name);
              }}
              className="bg-red-500 text-white p-2 rounded-lg"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-1 w-[27rem] flex-wrap">
        {links?.map((item) => (
          <button
            type="button"
            onClick={() => handlechose(item)}
            className="p-2 bg-white  rounded-full"
          >
            <img src={image[item]} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialInfoForm;
