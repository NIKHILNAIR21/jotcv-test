import React from "react";
import { useNavigate, useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getFull } from "../../actions/allProfieAction";
import axios from "axios";
import {
  UserEmailTemplate,
  SendEmail,
  getProfileData,
  getAllResume,
} from "../../services/ApiServices";
import { EmailTemplates } from "../../constant";
import showNotification from "../../services/NotificationService";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import emailIcon from "../../assets/emailicons.png";
import pdf from "../../assets/pdf.png";
const EmailTemplate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const company = new URLSearchParams(location.search).get("company");
  const jobRole = new URLSearchParams(location.search).get("jobRole");
  const mailto = new URLSearchParams(location.search).get("mailto");
  const id = new URLSearchParams(location.search).get("id");
  const tempId = useSelector((state) => state?.templateID?.tempId);
  const allData = useSelector((state) => state?.fullProfile?.resumeData?.data);
  const [allProfile, setAllProfile] = React.useState();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [userData, setUserData] = React.useState();
  const [selectedTemplate, setSelectedTemplate] = React.useState(null);
  const [formData, setFormData] = React.useState({
    templateName: "",
    emailTitle: "",
    emailSubject: "",
    emailBody: "",
    testEmail: "",
  });

  const [selectedProfile, setSelectedProfile] = React.useState(null);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  // Function to fetch all email templates
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProfileData();

        setUserData(response?.data?.data);
        setFirstName(response?.data?.data?.first_name);
        setLastName(response?.data?.data?.last_name);
      } catch (error) {}
    };

    fetchData();
  }, []);
  React.useEffect(() => {
    const fetchAllProfile = async () => {
      try {
        const response = await getAllResume();
        
        setAllProfile(response.data?.data);
      } catch (error) {}
    };

    fetchAllProfile();
  }, []);
  const HandleSaveEmail = async (e) => {
    e.preventDefault();

    const bodyTwo = {
      data: allData,
    };
    axios
      .post(`https://node-api.jotcv.com/create-pdf/${tempId}`, bodyTwo) //https://node-api.jotcv.com/create-pdf/${tempId}  http://localhost:5000/create-pdf/${tempId}
      .then(() =>
        axios.get(`https://node-api.jotcv.com/fetch-pdf/${tempId}`, {
          responseType: "blob",
        })
      ) //   https://node-api.jotcv.com/fetch-pdf/${tempId} http://localhost:5000/fetch-pdf/${tempId}
      .then(async (res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        const file = new File([pdfBlob], "resume", { type: "application/pdf" });
        try {
          const body = {
            pdf_file: file,
            subject: formData.emailSubject,
            body: formData.emailBody,
            email_title: formData.templateName,
            job: Number(id),
            user: userData?.id,
          };
          var formDataValue = new FormData();

          for (var key in body) {
            formDataValue.append(key, body[key]);
          }
          const response = await SendEmail(formDataValue);
          if (response.status === 201) {
            showNotification("success", "Email template saved successfully");
            // Optionally, you can reset the form data after successful save
            setFormData({
              templateName: "",
              emailSubject: "",
              emailBody: "",
              emailTitle: "",
              testEmail: "",
            });
            navigate("/applied-jobs");
            // getAllEmail();
          } else {
            showNotification("danger", "Email template not saved successfully");
          }
        } catch (error) {
          showNotification("danger", "Error saving email template");
        }
      })
      .catch((err) => {});
  };

  const templateData = [
    "Create Your Own Template",
    "The Unique Value Proposition",
    "Ask regarding open position",
    "The Formal Expression of Interest",
    "The Problem Solver",
    "The Unique Skill Highlight",
    "The Introduction with a Twist",
    "Exploring Opportunities",
    "The Straightforward Application",
    "Talk about that event",
    "The Short and Sweet Application",
    "The Casual Inquiry",
    "The Recognition of Company Achievements",
    "The Enthusiastic Application",
    "The Visionary",
    "Present yourself",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleProfileChange = (id) => {
    setSelectedProfile(id);
    dispatch(getFull(id));
  };
  const username = userData?.username;
  const handleTemplateClick = (template) => {
    if (template !== "Create your custom template") {
      setSelectedTemplate(template);
      // Set the form data based on the selected template
      const EmailTemplateData = EmailTemplates({
        template,
        company,
        jobRole,
        firstName,
        lastName,
        username,
        selectedProfile,
      });
      
      setFormData(EmailTemplateData);
    } else {
      // User clicked "Create your custom template"
      setSelectedTemplate(null);
      setFormData({
        templateName: "",
        emailSubject: "",
        emailBody: "",
        emailTitle: "",
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-4">
      <div className="p-2 bg-[#EFF6FF]  w-fit  mx-56">
        <h2 className="text-lg">Select your Profile </h2>
        <div className="flex gap-10 p-3">
          {allProfile?.map((item) => (
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="profile"
                value={item?.id}
                checked={selectedProfile === item?.id}
                onChange={() => handleProfileChange(item?.id)}
              />
              <p className="text-base">{item?.profile_name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="  w-[75%] mx-auto pt-1 rounded-md p-4">
        <p className="text-base m-2 ">
          Select Your Email Templates{" "}
          <span className="text-base m-2 text-gray-400">
            (NOTE: We will attach your CV and Web Portfolio to this email.)
          </span>
        </p>

        <div className="bg-slate-50 rounded-md p-4">
          <Carousel responsive={responsive} className="">
            {templateData?.map((template, index) => (
              <p
                key={index}
                className={`p-4 mx-4 relative z-10  text-sm  w-[90%] h-[4rem] cursor-pointer rounded-md ${
                  selectedTemplate === template
                    ? "bg-gradient-to-tr from-blue-600  to-sky-400 to-70% text-white"
                    : "bg-gradient-to-b from-lime-100 30% to-green-100"
                }`}
                onClick={() => handleTemplateClick(template)}
              >
                {template}
                <input
                  checked={selectedTemplate === template}
                  className="absolute top-2 right-2"
                  type="radio"
                />
              </p>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-32 items-start w-fit mx-auto  ">
        <div className="w-[27rem]">
          <form onSubmit={HandleSaveEmail} className="flex flex-col">
            <div className="flex flex-col ">
              <p className="p-2.5 text-lg font-semibold font-poppins text-center ">
                {formData.templateName}
              </p>
            </div>
            <div className="flex flex-col mt-3">
              <label className="text-base">Email Subject</label>
              <input
                value={formData.emailSubject}
                onChange={handleChange}
                name="emailSubject"
                className="p-3 rounded-md outline-none"
                type="text"
              />
            </div>

            <div className="flex flex-col mt-3">
              <label className="text-base">Email Body</label>
              <textarea
                name="emailBody"
                value={formData.emailBody}
                onChange={handleChange}
                className="p-3 h-52 outline-none rounded-md"
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-600 w-48 m-2 p-1.5 text-white"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className="bg-white sm:w-[40rem]  mx-auto mt-3 rounded-md p-3">
            <h2 className="font-bold text- text-center mb-1">Preview Email</h2>
            <div className="flex gap-3 justify-between">
              <div className="flex gap-4">
                <img
                  className="w-7 h-7 rounded-full"
                  src={userData?.profile_picture}
                  alt=""
                />
                <div>
                  <h2 className="text-xs">
                    {userData?.email} {">no-reply.com"}{" "}
                  </h2>
                  <h2 className="text-xs font-semibold">Present Yourself</h2>
                </div>
              </div>
              <div>
                <p className="text-xs">Today 11:30AM</p>
                <img className="" src={emailIcon} alt="" />
              </div>
            </div>
            {/* email */}
            <div className="mt-7">
              <p className="text-center text-base ">{formData.emailSubject}</p>
              <textarea
                className="text-sm w-full mx-auto bg-white h-52 mt-3"
                value={formData.emailBody}
                readOnly
                disabled
                onDragStart={(e) => {
                  e.preventDefault();
                }} 
              />
              {selectedProfile != null && (
                <div className="flex gap-1 p-1.5 items-center bg-sky-50 rounded-sm w-fit relative">
                  <img src={pdf} alt="" />
                  <p className="text-sm px-3">
                    {userData?.first_name} {userData?.last_name}.pdf
                  </p>
                  <p
                    className="absolute text-xs top-1.5 px-1 right-0 font-semibold cursor-pointer"
                    onClick={() => setSelectedProfile(null)}
                  >
                    X
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
