interface Experience {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

interface Education {
  institution: string;
  program: string;
  period: string;
}

interface ResumeSection {
  heading: string;
  items: string[];
}

export const skills: string[] = [
  "JavaScript", "TypeScript", "React.js", "Next.js", "Redux", "HTML", "CSS", "SCSS", "Styled‑components", "Tailwind CSS", "Redux Toolkit", "Axios", "Material UI", "Chakra UI", "Lottie", "Webpack", "Node.js", "Express", "MongoDB", "REST API", "Git", "Bitbucket", "AWS", "Docker", "CI/CD", "Jest", "Swagger", "Postman", "Figma", "Jira", "Confluence", "Storybook"
];

export const experiences: Experience[] = [
  {
    title: "Senior Frontend Software Developer",
    company: "ITREX GROUP INTERNATIONAL CORPORATION",
    period: "May 2024 – Present",
    bullets: [
      "Develop and maintain responsive web apps with React.js and Redux, focusing on performance and scalability.",
      "Write reusable, modular, and well‑documented code using JavaScript, HTML5, and CSS.",
      "Integrate frontend interfaces with RESTful APIs for dynamic data rendering.",
      "Collaborate with UI/UX designers to convert Figma/Adobe XD mockups into live UIs.",
      "Implement state management with Redux and Context API for predictable data flows.",
      "Use GitLab for version control and release management.",
      "Refactor production apps to simplify architecture and improve speed.",
      "Debug, profile, and optimize performance with Chrome DevTools and React Profiler."
    ]
  },
  {
    title: "Full‑Stack Software Engineer",
    company: "LLC SumatoSoft",
    period: "Aug 2021 – May 2024",
    bullets: [
      "Designed and developed full‑scale web apps from scratch using JavaScript, TypeScript, HTML, CSS, React, Redux, etc.",
      "Built SPAs with dynamic routing and CSR for seamless UX.",
      "Defined API contracts with backend teams and normalized data client‑side for efficient rendering.",
      "Created reusable component libraries and design systems for UI consistency.",
      "Implemented i18n and localization for multilingual experiences.",
      "Developed and maintained server apps with Node.js and Express.js.",
      "Authored unit tests with Jest / Testing Library to ensure high quality.",
      "Documented code and workflows for internal teams and future reference."
    ]
  },
  {
    title: "Frontend Software Programmer",
    company: "LLC On The Spot Development",
    period: "Aug 2020 – Aug 2021",
    bullets: [
      "Developed and maintained web apps using HTML, CSS, JavaScript, and jQuery with focus on client‑side logic.",
      "Built and supported a cross‑browser extension integrating seamlessly with web apps.",
      "Implemented robust validation on inputs and DOM elements.",
      "Debugged and optimized legacy codebases.",
      "Collaborated through version control and code reviews."
    ]
  },
  {
    title: "Network Support Specialist",
    company: "ZAO MTBank",
    period: "Jan 2018 – Sept 2020",
    bullets: [
      "Maintained and enhanced internal banking software for corporate cash & settlement operations.",
      "Integrated software with the Colvir banking platform, customizing to operational needs.",
      "Gathered requirements with IT/business teams and implemented workflow improvements.",
      "Diagnosed and resolved application‑level issues in internal systems.",
      "Automated workflows and improved internal UIs with JavaScript scripts.",
      "Documented technical procedures and integration workflows."
    ]
  }
];


export const education: Education[] = [
  {
    institution: "Udemy",
    program: "Generative AI for JavaScript Developers – LangChain, RAG",
    period: "Jul 2025"
  },
  {
    institution: "TeachMeSkills",
    program: "Frontend Development",
    period: "Jan 2020 – Jun 2020"
  },
  {
    institution: "Belarusian State Economic University",
    program: "Bachelor's Degree",
    period: "Sep 2014 – Jul 2018"
  }
];


export const languages: ResumeSection = {
  heading: "Languages",
  items: [
    "English – Professional proficiency",
    "Polish – Intermediate",
    "Belarusian – Native",
    "Russian – Native"
  ]
};
