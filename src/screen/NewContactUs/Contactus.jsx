import React, { useState } from "react";
import "./style.css";
import {Contact} from "../../services/ApiServices"
import showNotification from "../../services/NotificationService";
const Contactus = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {

      let data = {
       formData
      };
      // formData.append("web_portfolio",JSON.stringify(data));

      try {
        let response = await Contact(data);
        if (response?.status == 200) {
          showNotification("success", "Request sent Successfully");
          setFormData({})
        }
      } catch (error) {
        showNotification("danger", "Request Failed to Reach");
      }
   
    e.preventDefault();
    // You can add your form submission logic here
  
  };
  return (
    <div className="min-h-screen">
      <div className="max-w-md z-100 relative bg-amber-400/75 mx-auto p-6 ">
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded-md py-2 px-3"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
