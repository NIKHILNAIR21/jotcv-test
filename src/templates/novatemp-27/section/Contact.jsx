import React from "react";

const Contact = ({ email, phoneNo, City, socialLinks }) => {
  return (
    <div>
      <section className="flex bg-black  font-semibold text-sm mt-1.5 text-violet-100 justify-evenly items-center">
        <div>
          <h3>{email}</h3>
          <h3>{phoneNo}</h3>
          <h3>{City}</h3>
        </div>
        <div>
          {socialLinks?.map((links) => (
            <div key={links.id}>
              <a className="px-2" href={links?.link} >
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
