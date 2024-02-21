import React from "react";

const Contact = ({ email, phoneNo, City, socialLinks }) => {
  return (
    <div>
      <section className="flex bg-gray-700  font-semibold text-sm mt-1.5 text-violet-100 justify-evenly items-center">
        <div>
          <h3 className="text-xs">{email}</h3>
          <h3 className="text-xs">{phoneNo}</h3>
          <h3 className="text-xs">{City}</h3>
        </div>
        <div>
          {socialLinks?.map((links) => (
            <div key={links.id}>
              <a className="px-2 text-xs" href={links?.link} >
                {links?.name}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
