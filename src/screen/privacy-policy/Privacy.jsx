import React from "react";

const Privacy = () => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center">
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-700 pt-[10rem] md:pt-[16rem] text-center w-[44rem] sm:w-full ">
        <h1 className="text-5xl font-semibold p-3 text-white">
          Privacy Policy
        </h1>
      </div>
      <div className="mt-14  md:w-[65rem] mb-14">
        <h1 className="text-xl  mb-14 text-justify text-gray-500 font-medium">
          Welcome to jotcv.com! This Privacy Policy is designed to help you
          understand how we collect, use, disclose, and safeguard your personal
          information. By using our website and services, you consent to the
          practices described in this Privacy Policy.
        </h1>
        {/* first */}
        <p className="text-2xl text-justify mb-3">
          <strong>1.Information We Collect</strong>
        </p>
        <p className="text-base mb-2">
          <strong className="text-blue-600">1.1 Personal Information:</strong>{" "}
          We collect personal information that you provide to us directly, such
          as your name, email address, and contact details when you register an
          account or use our services.
        </p>
        <p className="text-base mb-2">
          <strong className="text-blue-600">1.2 Resume Information:</strong>{" "}
          When you use our services to create resumes, we may collect
          information you input, including employment history, education,
          skills, and other related details.
        </p>
        <p className="text-base mb-2">
          <strong className="text-blue-600">1.3 Video Content:</strong> When you
          use our services to create resumes, we may collect informIf you choose
          to include videos in your resume, we may collect and store the video
          files you upload.
        </p>
        <p className="text-base mb-2">
          <strong className="text-blue-600">1.4 Usage Data:</strong> We
          automatically collect usage information when you visit our Website,
          including your IP address, browser type, pages visited, and actions
          taken.
        </p>

        {/* second */}
        <p className="text-2xl text-justify mt-3 mb-3">
          <strong>2. How We Use Your Information</strong>
        </p>
        <p className="text-base mb-2">
          <strong className="text-blue-600">2.1 Provide Services:</strong>We use
          your personal and resume information to provide our resume-building
          services and enable you to create, customize, and manage your resumes.
        </p>
        <p className="text-base mb-2">
          <strong className="text-blue-600">2.2 Communication:</strong>We may
          use your contact information to send you important updates,
          notifications, and promotional materials related to our services.
        </p>
        <p className="text-base mb-2">
          <strong className="text-blue-600">2.3 Improve Services:</strong>We
          analyze usage patterns and feedback to enhance and personalize our
          services, user experience, and features.
        </p>
        {/* third */}
        <p className="text-2xl text-justify mt-3 mb-3">
          <strong>3. Sharing of Information</strong>
        </p>
        <p className="text-base mb-2">
          <strong className="text-blue-600">
            3.1 Affiliates and Partners:
          </strong>
          We may share your information with our affiliates and trusted partners
          to improve and offer related services.
        </p>
        <p className="text-base mb-2">
          <strong className="text-blue-600">3.2 Legal Requirements</strong>
          We may disclose your information in response to a legal obligation or
          to protect our rights, privacy, safety, or property, or that of
          others.
        </p>
        {/* forth */}
        <p className="text-2xl text-justify mt-3 mb-3">
          <strong>4. Your Choices</strong>
        </p>
        <p className="text-base mb-2">
          <strong className="text-blue-600">4.1 Account Settings:</strong>
          You can review and edit your account information at any time by
          logging into your account.
        </p>
        <p className="text-base mb-2">
          <strong className="text-blue-600">
            4.2 Communication Preferences:
          </strong>
          You can choose to opt-out of receiving promotional communications from
          us by following the instructions in those communications.
        </p>
        {/* fifth */}
        <p className="text-2xl text-justify mt-3 mb-3">
          <strong>5. Data Security</strong>
        </p>
        <p className="text-base mb-2">
          <strong className="text-blue-600">5.1 Security Measures:</strong>
          We use industry-standard security measures to protect your personal
          information from unauthorized access, disclosure, or destruction.
        </p>
        {/* sixth */}
        <p className="text-2xl text-justify mt-3 mb-3">
          <strong>6. Children's Privacy</strong>
        </p>
        <p className="text-base mb-2">
          <strong className="text-blue-600">6.1 Age Restriction:</strong>
          Our services are not intended for users under the age of 18. We do not
          knowingly collect personal information from individuals under 18 years
          of age.
        </p>
        {/* seventh */}
        <p className="text-2xl text-justify mt-3 mb-3">
          <strong>7. Changes to this Privacy Policy</strong>
        </p>
        <p className="text-base mb-2">
          <strong className="text-blue-600">7.1 Updates:</strong>
          Our services are not intended for users under the age of 18. We do not
          knowingly collect personal information from individuals under 18 years
          of age.
        </p>
        {/* eighth */}
        <p className="text-2xl text-justify mt-3 mb-3">
          <strong>8. Contact Us</strong>
        </p>
        <p className="text-base mb-2">
          <strong className="text-blue-600">8.1 Questions</strong>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy, you can contact us at support@jotcv.com .
        </p>
        <p className="text-xl text-center mt-10 text-gray-500 font-medium">
          By using our services, you agree to the terms of this Privacy Policy.
          We encourage you to review this policy regularly to stay informed
          about how we collect, use, and protect your information.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
