import React from "react";

const Contact = ({ email, phoneNo, City, socialLinks }) => {
  return (
    <div>
      <section className="flex bg-pink-500 rounded-md rounded-br-[30rem]  rounded-bl-[30rem] font-semibold text-sm mt-2.5 text-violet-100 justify-around items-center">
        <div>
          <h3>{email}</h3>
          <h3>{phoneNo}</h3>
          <h3>{City}</h3>
        </div>
        <div>
          {socialLinks?.map((links) => (
            <div key={links.id}>
              <a className="px-2 text-sm" href={links?.link} >
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
