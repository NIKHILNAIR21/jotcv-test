import Temp1Img from "./templates/newtemp-1/temp4-1.png";
import Temp2Img from "./templates/newtemp-2/temp2-1.png";
import Temp3Img from "./templates/newtemp-3/temp3-1.png";
import Temp4Img from "./templates/newtemp-4/temp1-1.png";
import Nova1 from "./templates/novatemp-1/nova1.webp";
import Nova2 from "./templates/novatemp-2/nova2.png";
import Nova3 from "./templates/novatemp-3/nova3.png";
import Nova4 from "./templates/novatemp-4/nova4.png";
import Nova5 from "./templates/novatemp-5/nova5.png";
import Nova6 from "./templates/novatemp-6/nova6.png";
import Nova7 from "./templates/novatemp-7/nova7.png";
import Nova8 from "./templates/novatemp-8/nova8.png";
import Nova9 from "./templates/novatemp-9/nova9.png";
import Nova10 from "./templates/novatemp-10/nova10.png";
import Nova11 from "./templates/novatemp-11/nova11.png";
import Nova12 from "./templates/novatemp-12/nova12.png";
import Nova13 from "./templates/novatemp-13/nova13.png";
import Nova14 from "./templates/novatemp-14/nova14.png";
import Nova15 from "./templates/novatemp-15/nova15.png";
import Nova16 from "./templates/novatemp-16/nova16.png";
import Nova17 from "./templates/novatemp-17/nova17.png";
import Nova18 from "./templates/novatemp-18/nova18.png";
import Nova19 from "./templates/novatemp-19/nova19.png";
import Nova20 from "./templates/novatemp-20/nova20.png";
import Nova21 from "./templates/novatemp-21/nova21.png";
import Nova22 from "./templates/novatemp-22/nova22.png";
import Nova23 from "./templates/novatemp-23/nova23.png";
import Nova24 from "./templates/novatemp-24/nova24.png";
import Nova25 from "./templates/novatemp-25/nova25.png";
import Nova26 from "./templates/novatemp-26/nova26.png";
import Nova27 from "./templates/novatemp-27/nova27.png";
import Nova28 from "./templates/novatemp-28/nova28.png";
import Nova29 from "./templates/novatemp-29/nova29.png";
import Nova30 from "./templates/novatemp-30/nova30.png";
import Nova31 from "./templates/novatemp-31/nova31.webp";
import Nova32 from "./templates/novatemp-32/nova32.webp";
import Nova33 from "./templates/novatemp-33/nova33.webp";
import Nova34 from "./templates/novatemp-34/nova34.webp";
import Nova35 from "./templates/novatemp-35/nova35.webp";
import Nova36 from "./templates/novatemp-36/nova36.webp";
import Nova37 from "./templates/novatemp-37/nova37.webp";
import Nova38 from "./templates/novatemp-38/nova38.webp";
import Nova39 from "./templates/novatemp-39/nova39.webp";
import Temp42 from "./assets/fb.webp";
import Temp43 from "./assets/Flipkart.webp";
// tempaltes
export const EmailTemplates = ({
  template,
  company,
  jobRole,
  firstName,
  lastName,
  username,
  selectedProfile,
}) => {
  switch (template) {
    case "Create Your Own Template":
      return {
        templateName: "",
        emailSubject: ``,
        emailBody: ``,
      };
    case "The Unique Value Proposition":
      return {
        templateName: "Unique Value Proposition Template",
        emailSubject: `Bringing Exceptional Skills to ${company}`,
        emailBody: `Dear Hiring Team,

I trust this email finds you well.
        
I am reaching out to express my interest in the ${jobRole} position at ${company}. With a strong background in this industry, I am confident in my ability to bring a unique and valuable perspective to your team.
        
Enclosed is my resume for your consideration, and I would welcome the opportunity to discuss how my skills align with your organization's goals.
        
Thank you for considering my application.
        
Best regards, 
${firstName} ${lastName}
${
  selectedProfile != null
    ? `Web Portfolio: https://webportfolio.jotcv.com/${username}`
    : ""
}
`,
      };

    case "Ask regarding open position":
      return {
        templateName: "Ask regarding open position Template",
        emailSubject: "Quick question regarding an amazing opportunity",
        emailBody: `Dear Hiring Team at ${company},
  
I hope that this email finds you well and your day is off to a great start. I am reaching out to you today because I am actively searching for a new role and I recently learned about the ${jobRole} opportunity at ${company} and I am extremely interested in this opportunity.
  
Additionally, I wanted to confirm that this role is still open and to see if there is an opportunity for us to discuss my qualifications further. I am confident that my experience coupled with my desire to make an impact within the role makes me a strong fit for the position.
  
I value any insight that you can provide to me. Thank you so much for your time and assistance, and I look forward to hearing from you.
  
Sincerely,
${firstName} ${lastName}
${
  selectedProfile != null
    ? `Web Portfolio: https://webportfolio.jotcv.com/${username}`
    : ""
}
`,
      };

    case "The Formal Expression of Interest":
      return {
        templateName: "The Formal Expression of Interest",
        emailSubject: `Formal Application for ${jobRole}`,
        emailBody: `Dear Hiring Team,

I trust this email finds you in good health.
        
I am writing to formally express my interest in the ${jobRole} position at ${company}. Enclosed is my resume, providing a comprehensive overview of my professional background and achievements.
        
I am eager to contribute my skills to ${company} and would appreciate the opportunity to discuss how my qualifications align with the goals of your organization.
        
Thank you for considering my application.
        
Sincerely, 
${firstName} ${lastName}
${
  selectedProfile != null
    ? `Web Portfolio: https://webportfolio.jotcv.com/${username}`
    : ""
}`,
      };

    case "The Problem Solver":
      return {
        templateName: "The Problem Solver",
        emailSubject: `Solving Challenges as Your ${jobRole}`,
        emailBody: `Dear Hiring Team,

I hope this email reaches you in good health.
        
I'm ${firstName}, and I'm eager to apply for the ${jobRole} position at ${company}. With a proven track record in tackling challenges related to the context of the job description, I am confident in my ability to contribute innovative solutions to your team.
        
Attached is my resume for your review. I would welcome the opportunity to discuss how my problem-solving skills can benefit ${company}.
        
Best regards, 
${firstName} ${lastName}
${
  selectedProfile != null
    ? `Web Portfolio: https://webportfolio.jotcv.com/${username}`
    : ""
}`,
      };

    case "The Unique Skill Highlight":
      return {
        templateName: "The Unique Skill Highlight",
        emailSubject: `Elevating ${jobRole} with Specialized Skills`,
        emailBody: `Dear Hiring Team,

I hope this message finds you in good spirits.
        
My name is ${firstName}, and I'm excited to submit my application for the ${jobRole} position at ${company}. With my specialized skills and experience in this industry, I am confident in my ability to bring a fresh perspective and make a meaningful impact on your company.
        
Attached is my resume for your review. I look forward to the possibility of discussing how my unique skills align with ${company}'s goals.
        
Best regards, 
${firstName}  ${lastName}
${
  selectedProfile != null
    ? `Web Portfolio: https://webportfolio.jotcv.com/${username}`
    : ""
}`,
      };

    case "The Introduction with a Twist":
      return {
        templateName: "The Introduction with a Twist",
        emailSubject: `Unveiling My Potential for ${jobRole} Role`,
        emailBody: `Dear Hiring Team,

I trust this email finds you well.
        
I'm ${firstName}, and I couldn't resist the opportunity to explore the potential alignment of my skills with the ${jobRole} position at ${company}. I've attached my resume, and I'm eager to discuss how my unique approach aligned with the job description could contribute to your company’s success.
        
Thank you for considering my application.
        
Best,
${firstName}  ${lastName}
${
  selectedProfile != null
    ? `Web Portfolio: https://webportfolio.jotcv.com/${username}`
    : ""
}`,
      };

    case "Exploring Opportunities":
      return {
        templateName: "Exploring Opportunities",
        emailSubject: `Exploring Opportunities at  ${company}`,
        emailBody: `Dear Hiring Team,

I trust this email finds you well.

I am ${firstName} , and I am reaching out to express my interest in potential opportunities at ${company}. With my background in this industry, I am confident in my ability to bring valuable insights and contribute to your team's success.

I have attached my resume for your consideration and would welcome the chance to discuss how my skills align with the goals of ${company}.

Thank you for your time, and I look forward to the possibility of connecting.

Best regards, 
${firstName} ${lastName}
${
  selectedProfile != null
    ? `Web Portfolio: https://webportfolio.jotcv.com/${username}`
    : ""
}`,
      };

    case "The Straightforward Application":
      return {
        templateName: "The Straightforward Application",
        emailSubject: `Application for  ${jobRole}`,
        emailBody: `Dear Hiring Team,

I hope this message finds you in good health.
        
I am ${firstName}, and I am writing to apply for the ${jobRole} position at ${company}, which I found through your website.
        
With a great work experience as well as tested skills in this field, I am confident in my ability to thrive in this job role and contribute to ${company}'s goals and success.
        
I would greatly appreciate the opportunity to discuss how my professional profile aligns with your requirements.
        
Thank you for considering my application.
        
Best regards,
        
${firstName} ${lastName}
${
  selectedProfile != null
    ? `Web Portfolio: https://webportfolio.jotcv.com/${username}`
    : ""
}`,
      };
    case "Talk about that event":
      return {
        templateName: "Talk about that event",
        emailSubject: `Hi, it's ${firstName}`,
        emailBody: `I checked your website and your social media and I really like what ${company} does.

I also found this job posting on JotCV. Is the position still open?
        
I would be very interested to work as a ${jobRole}  I already have offers in similar positions, so I currently evaluate them in order to decide my next step.Feel free to contact me to arrange a skype call to discuss more.
        
Thanks,    
${firstName} ${lastName}
${
  selectedProfile != null
    ? `Web Portfolio: https://webportfolio.jotcv.com/${username}`
    : ""
}`,
      };
    case "The Short and Sweet Application":
      return {
        templateName: "The Short and Sweet Application ",
        emailSubject: `Application for  ${jobRole}`,
        emailBody: `I checked your website and your social media and I really like what ${company} does. Is the position still open?
        
I would like to work as a  ${jobRole}. I already have offers in similar positions, so I am currently evaluating them to decide my next step.
        
Thanks,      
${firstName} ${lastName}
${
  selectedProfile != null
    ? `Web Portfolio: https://webportfolio.jotcv.com/${username}`
    : ""
}`,
      };
    case "The Recognition of Company Achievements":
      return {
        templateName: "The Recognition of Company Achievements",
        emailSubject: `Impressed by ${company} Achievements`,
        emailBody: `Dear Hiring Team,

I hope this email finds you well.
        
I recently did my own research for ${company} Congratulations on the remarkable accomplishments you managed to achieve! It further solidifies my admiration for your team and your commitment to excellence.
        
In light of this, I am even more excited about the opportunity to potentially contribute to ${company}.
        
Thank you for your time and congratulations again on the recent success.
        
Best regards, ${firstName} ${lastName}
${
  selectedProfile != null
    ? `Web Portfolio: https://webportfolio.jotcv.com/${username}`
    : ""
}`,
      };

    case "The Casual Inquiry":
      return {
        templateName: "The Casual Inquiry",
        emailSubject: `Quick Question about ${jobRole} Position `,
        emailBody: `Hello Hiring Team,

Hope you're having a good day.
        
I came across the ${jobRole} position at ${company} and wanted to reach out with a quick question. Could you share a bit more about the day-to-day responsibilities of the role?
        
Thanks a bunch!      
Best, ${firstName} ${lastName}
${
  selectedProfile != null
    ? `Web Portfolio: https://webportfolio.jotcv.com/${username}`
    : ""
}`,
      };
    case "The Enthusiastic Application":
      return {
        templateName: "The Casual Inquiry",
        emailSubject: `Enthusiastically Applying for  ${jobRole} Position `,
        emailBody: `Dear Hiring Team,

I trust this email finds you well.
        
I am writing to express my genuine enthusiasm for the ${jobRole} position at  ${company}. The prospect of contributing to your team is truly exciting, and I believe my background in this industry makes me a strong fit for the role.

I look forward to the opportunity to discuss how my enthusiasm aligns with  ${company}'s mission.
        
Best regards,  ${firstName} ${lastName}
${
  selectedProfile != null
    ? `Web Portfolio: https://webportfolio.jotcv.com/${username}`
    : ""
}`,
      };
    case "The Visionary":
      return {
        templateName: "The Visionary",
        emailSubject: `Envisioning Success in the  ${jobRole} Role `,
        emailBody: `Dear Hiring Team,

I hope this email finds you in good health.
        
As a forward-thinking professional in this field, I am reaching out to express my keen interest in the ${jobRole} position at {{COMPANY_NAME}}. In envisioning the impact I could make within your team, I am inspired by the innovative projects and solutions that ${company} is known for.
        
I would love the opportunity to discuss how my vision aligns with the future goals of ${company}.
        
Best regards, ${firstName} ${lastName}
${
  selectedProfile != null
    ? `Web Portfolio: https://webportfolio.jotcv.com/${username}`
    : ""
}`,
      };
    case "Present yourself":
      return {
        templateName: "Present yourself",
        emailSubject: `Envisioning Success in the  ${jobRole} Role `,
        emailBody: `Dear Hiring Team,

I hope this email finds you in good health.
        
As a forward-thinking professional in this field, I am reaching out to express my keen interest in the ${jobRole} position at ${company}. In envisioning the impact I could make within your team, I am inspired by the innovative projects and solutions that {{COMPANY_NAME}} is known for.
        
I would love the opportunity to discuss how my vision aligns with the future goals of ${company}.
        
Best regards, ${firstName} ${lastName}
${
  selectedProfile != null
    ? `Web Portfolio: https://webportfolio.jotcv.com/${username}`
    : ""
}`,
      };

    // Add cases for other templates as needed
    default:
      // Handle other templates or set default values
      return {};
  }
};

export function isNumberKey(event) {
  const regex = /^[a-zA-Z]+$/; // Regular expression to allow only alphabets

  if (regex.test(event.key)) {
    event.preventDefault(); // Prevent the keypress if it's not an alphabet
  }
}

export function restrictNumber(event) {
  const regex = /[a-zA-Z]+$/; // Regular expression to allow only alphabets

  if (!regex.test(event.key)) {
    event.preventDefault(); // Prevent the keypress if it's not an alphabet
  }
}
export const Tips = [
  {
    tipName: "General",
    id: 1,
    Points: `<ul>
    <li class="pt-3">1. Keep sentences short and sweet.</li>
    <li class="pt-3">2. Sort sections in "Design" with more important ones coming first.</li>
    <li class="pt-3">3. Stick to reverse-chronological order for dated sections.</li>
    <li class="pt-3">4. View your resume from the employer's perspective.</li>
    <li class="pt-3">5. Start sentences with action words, not 'I' or 'my'.</li>
    <li class="pt-3">6. Use active voice, never passive voice.</li>
  </ul>`,
  },
  {
    tipName: "Personal Details",
    id: 2,
    Points: `<ul className="p-1">
  <li class="pt-3">1. Check out the "more" button in our personal details section to add more details about yourself. Adding "Nationality" and "Birthday" is generally NOT recommended, however, it is required in some countries.</li>
  <li class="pt-3">2. When choosing a photo, make sure it is not older than 2 years.</li>
  <li class="pt-3">3. Try to choose a photo where your clothing matches the dress code of the desired position (Hint: check out how employees of the company are presenting themselves on LinkedIn or on the company website).</li>
  <li class="pt-3">4. Use a professional Email-address. Something along the lines of 'firstname.lastname@gmail.com' cuts it, 'abbygirl129@gmail.com' doesn't.</li>
  <li class="pt-3">5. The 'display'-email address you show in your resume and the one for your account don't need to be the same.</li>
  <li class="pt-3">6. Don't add your Facebook or Instagram, unless you are a professional blogger or social media manager.</li>
</ul>`,
  },
  {
    tipName: "Education",
    id: 3,
    Points: `<ol>
    <li class="pt-3">1. Only list your GPA if it is a) being asked for or b) you managed to get an above-average one.</li>
    <li class="pt-3">2. When listing your GPA, make sure to include a point of reference for recruiters (e.g. 'GPA 1.1 / 5, Top 5% of class').</li>
    <li class="pt-3">3. If you didn't graduate (yet), still state achieved credits towards your degree.</li>
    <li class="pt-3">4. Consider leaving out primary & secondary school.</li>
    <li class="pt-3">5. Use past tense for your description. Use present tense if you still perform an action.</li>
    <li class="pt-3">6. When writing your description, check our list of tips.</li>
  </ol>`,
  },
  {
    tipName: "Work Experience",
    id: 4,
    Points: `<ol>
    <li class="pt-3">Focus on your achievements rather than your duties.</li>
    <li class="pt-3">1. Quantify experiences to convey size and/or scale of projects, budgets, and results.</li>
    <li class="pt-3">2. If you use bullets in your description, sort them by importance.</li>
    <li class="pt-3">3. Use keywords relevant to your desired position wherever possible in order to pass applicant tracking systems scanning for them.</li>
    <li class="pt-3">4. Use our "Present" option if you are still employed at the company.</li>
    <li class="pt-3">5. It's best practice to sort your professional experience in chronologically descending order, starting with the most recent entry. We do this automatically for you, but you can still switch things around manually.</li>
    <li class="pt-3">6. Start your sentences with action words like "created", "developed", "planned", etc.</li>
    <li class="pt-3">7. Use past tense for your description. Use present tense if you still perform an action.</li>
  </ol>`,
  },

  {
    tipName: "Projects",
    id: 5,
    Points: `<ol>
    <li class="pt-3">1. Mention the size, scope & scale of the project.</li>
    <li class="pt-3">2. Include project outcomes and what you have learned.</li>
    <li class="pt-3">3. Use past tense for your description. Use present tense if you still perform an action.</li>
  </ol>`,
  },
  {
    tipName: "skill",
    id: 6,
    Points: `<ol>
    <li class="pt-3">1. Try different designs for showing off your skills, like bars or dots under "Design".</li>
    <li class="pt-3">2. If you want to sort your skills into sub-sections (e.g. soft skills & hard skills), we recommend creating a new custom section.</li>
    <li class="pt-3">3. Select skills according to your desired position.</li>
    <li class="pt-3">4. Be specific with skills and add proof if possible, e.g. "Microsoft Office, incl. VBA Macros".</li>
  </ol>`,
  },
  {
    tipName: "Certificate",
    id: 7,
    Points: `<ol>
    <li class="pt-3">1. Mention the size, scope & scale of the project.</li>
    <li class="pt-3">2. Include project outcomes and what you have learned.</li>
    <li class="pt-3">3. Use past tense for your description. Use present tense if you still perform an action.</li>
  </ol>`,
  },
  {
    tipName: "Languages",
    id: 8,
    Points: `<ol>
    <li class="pt-3">1. Make sure to try the available different designs for listing languages, like bars or dots in the Design-Section.</li>
    <li class="pt-3">2. In "Additional information", try to prove your fluency level. This can be done by including test results or certificates, but also by stating e.g. "lived for 5 months in .."</li>
    <li class="pt-3">3. Be honest about your language level.</li>
    <li class="pt-3">4. If you do not have objective test results at hand, it can help to incorporate examples from past professional experiences where you had to use a foreign language.</li>
  </ol>`,
  },
  {
    tipName: "Interest",
    id: 9,
    Points: `<ol>
    <li class="pt-3">1. Don't be afraid to list interests on your resume, as they give employers insight into what drives you as a well-rounded individual and might add a further differentiator to your resume.</li>
    <li class="pt-3">2. Refrain from listing broad, common interests like "meeting friends".</li>
    <li class="pt-3">3. Avoid listing interests that are related to religion, politics or anything controversial.</li>
    <li class="pt-3">4. If you have dangerous interests or hobbies, maybe don't put them in your resume.</li>
    <li class="pt-3">5. Position this section more to the bottom of your resume (definitely after your professional experience and education).</li>
  </ol>`,
  },
];
export const AVAILABLE_TEMPLATES = [
  {
    id: 1,
    name: "Modern Resume",
    thumbnail: Nova1,
    type: ["3-5", "0-3"],
  },
  {
    id: 2,
    name: "Professional Resume",
    thumbnail: Nova2,
    type: ["3-5", "5-10"],
  },
  {
    id: 3,
    name: "Temp1",
    thumbnail: Nova3,
    type: ["5-10"],
  },
  {
    id: 4,
    name: "Temp2",
    thumbnail: Nova4,
    type: ["0-3", "3-5", "Fresher"],
  },
  {
    id: 5,
    name: "Temp3",
    thumbnail: Nova5,
    type: ["0-3", "3-5"],
  },

  {
    id: 6,
    name: "Temp4",
    thumbnail: Nova6,
    type: ["5-10"],
  },
  {
    id: 7,
    name: "Temp5",
    thumbnail: Nova7,
    type: ["Fresher", "0-3"],
  },
  {
    id: 8,
    name: "Temp5",
    thumbnail: Nova8,
    type: ["Fresher", "0-3"],
  },
  {
    id: 9,
    name: "Temp5",
    thumbnail: Nova9,
    type: ["5-10"],
  },

  {
    id: 10,
    name: "Temp6",
    thumbnail: Nova10,
    type: ["Fresher", "0-3", "3-5"],
  },
  {
    id: 11,
    name: "Temp7",
    thumbnail: Nova11,
    type: ["5-10"],
  },
  {
    id: 12,
    name: "Temp8",
    thumbnail: Nova12,
    type: ["5-10"],
  },
  {
    id: 13,
    name: "Temp9",
    thumbnail: Nova13,
    type: ["5-10"],
  },
  {
    id: 14,
    name: "Temp9",
    thumbnail: Nova14,
    type: ["3-5", "5-10"],
  },
  {
    id: 15,
    name: "Temp9",
    thumbnail: Nova15,
    type: ["3-5", "5-10"],
  },
  {
    id: 16,
    name: "Temp9",
    thumbnail: Nova16,
    type: ["5-10"],
  },
  // {
  //   id: 17,
  //   name: "Temp9",
  //   thumbnail: Nova17,
  //   type: ["0-3", "3-5"],
  // },
  // {
  //   id: 18,
  //   name: "Temp9",
  //   thumbnail: Nova18,
  //   type: ["3-5", "5-10"],
  // },
  {
    id: 19,
    name: "Temp9",
    thumbnail: Nova19,
    type: ["5-10"],
  },
  {
    id: 20,
    name: "Temp9",
    thumbnail: Nova20,
    type: ["0-3", "3-5"],
  },
  // {
  //   id: 21,
  //   name: "Temp9",
  //   thumbnail: Nova21,
  //   type: ["3-5"],
  // },
  // {
  //   id: 22,
  //   name: "Temp9",
  //   thumbnail: Nova22,
  //   type: ["Fresher", "0-3"],
  // },
  // {
  //   id: 23,
  //   name: "Temp9",
  //   thumbnail: Nova23,
  //   type: ["5-10"],
  // },
  // {
  //   id: 24,
  //   name: "Temp9",
  //   thumbnail: Nova24,
  //   type: ["5-10"],
  // },
  // {
  //   id: 25,
  //   name: "Temp9",
  //   thumbnail: Nova25,
  //   type: ["Fresher", "0-3", "3-5"],
  // },
  // {
  //   id: 26,
  //   name: "Temp9",
  //   thumbnail: Nova26,
  //   type: ["Fresher", "0-3", "3-5"],
  // },
  // {
  //   id: 27,
  //   name: "Temp9",
  //   thumbnail: Nova27,
  //   type: ["5-10"],
  // },
  // {
  //   id: 28,
  //   name: "Temp9",
  //   thumbnail: Nova28,
  //   type: ["5-10"],
  // },
  // {
  //   id: 29,
  //   name: "Temp9",
  //   thumbnail: Nova29,
  //   type: ["3-5"],
  // },
  // {
  //   id: 30,
  //   name: "Temp9",
  //   thumbnail: Nova30,
  //   type: ["3-5"],
  // },
  // {
  //   id: 42,
  //   name: "Temp42",
  //   thumbnail: Temp42,
  //   type: ["Fresher", "0-3", "3-5", "5-10"],
  // },
  // {
  //   id: 43,
  //   name: "Temp43",
  //   thumbnail: Temp43,
  //   type: ["Fresher", "0-3", "3-5", "5-10"],
  // },
  // {
  //   id: 41,
  //   name: "Temp41",
  //   thumbnail: Temp1Img,
  //   type: ["Fresher", "0-3", "3-5", "5-10"],
  // },
  // {
  //   id: "31",
  //   name: "Temp9",
  //   thumbnail: Nova31,
  //   type:['Fresher']
  // },
  // {
  //   id: "32",
  //   name: "Temp9",
  //   thumbnail: Nova32,
  //   type:['Fresher']
  // },
  // {
  //   id: "33",
  //   name: "Temp9",
  //   thumbnail: Nova33,
  //   type:['Fresher']
  // },
  // {
  //   id: "34",
  //   name: "Temp9",
  //   thumbnail: Nova34,
  //   type:['Fresher']
  // },
  // {
  //   id: "35",
  //   name: "Temp9",
  //   thumbnail: Nova35,
  //   type:['Fresher']
  // },
  // {
  //   id: "36",
  //   name: "Temp9",
  //   thumbnail: Nova36,
  //   type:['Fresher']
  // },
  // {
  //   id: "37",
  //   name: "Temp9",
  //   thumbnail: Nova37,
  //   type:['Fresher']
  // },
  // {
  //   id: "38",
  //   name: "Temp9",
  //   thumbnail: Nova38,
  //   type:['Fresher']
  // },
  // {
  //   id: "39",
  //   name: "Temp9",
  //   thumbnail: Nova39,
  //   type:['Fresher']
  // },

  // professional: {
  //   id: 'professional',
  //   name: 'Professional Resume',
  //   thumbnail: '/templates/professional.png',
  //   component: dynamic(() => import('src/templates/professional/ProfessionalTemplate'), {
  //     ssr: false,
  //   }),
  // },
];

export const getTemplateImage = (key) => {
  switch (key) {
    case 1:
      return Nova1;
    case 2:
      return Nova2;
    case 3:
      return Nova3;
    case 4:
      return Nova4;
    case 5:
      return Nova5;
    case 6:
      return Nova6;
    case 7:
      return Nova7;
    case 8:
      return Nova8;
    case 9:
      return Nova9;
    case 10:
      return Nova10;
    case 11:
      return Nova11;
    case 12:
      return Nova12;
    case 13:
      return Nova13;
    case 14:
      return Nova14;
    case 15:
      return Nova15;
    case 16:
      return Nova16;
    case 17:
      return Nova17;
    case 18:
      return Nova18;
    case 19:
      return Nova19;
    case 20:
      return Nova20;
    case 21:
      return Nova21;
    case 22:
      return Nova22;
    case 23:
      return Nova23;
    case 24:
      return Nova24;
    case 25:
      return Nova25;
    case 26:
      return Nova26;
    case 27:
      return Nova27;
    case 28:
      return Nova28;
    case 29:
      return Nova29;
    case 30:
      return Nova30;
    case 31:
      return Nova31;
    case 32:
      return Nova32;
    case 33:
      return Nova33;
    case 34:
      return Nova34;
    case 35:
      return Nova35;
    case 36:
      return Nova36;
    case 37:
      return Nova37;
    case 38:
      return Nova38;
    case 39:
      return Nova39;
    case 42:
      return Temp42;

    default:
      return Nova1;
  }
};
