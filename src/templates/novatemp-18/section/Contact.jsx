import React from "react";

const Contact = ({ email, phoneNo, City, socialLinks }) => {
  return (
    <div>
      <section className="flex bg-amber-700/50  font-semibold text-sm mt-1. justify-between px-14 py-2 items-center">
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
