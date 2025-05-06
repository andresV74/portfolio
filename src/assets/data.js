import aboutMe from './videos/about_me.mp4';
import experience from './videos/experience.mp4';
import knowledge from './videos/skills.mp4';

export const data = [
  {
    id: 'about-me',
    title: 'About me',
    videoSrc: aboutMe,
		content: [
      {
        index: 1,
        paragraph: "I am  a Visual Designer and a Frontend Developer from Manizales, Colombia and  I have honed my skills in web development for more than 5 years, specializing in frontend technologies like JavaScript, TypeScript, React, Astro, HTML, CSS, SASS, Tailwind, Git & Github among others."
      },
      {
        index: 2,
        paragraph: "This experience has equipped me to contribute effectively to projects for big names like Google. I am also very proficient in skills like attention to detail, multidisciplinary teamwork and effective communication."
      },
    ],
  },
  {
    id: "experience",
    title: "experience",
    videoSrc: experience,
		content: [
      {
        index: 1,
        isTitle: true,
        paragraph: "UI Engineer at Huge Inc. @Google"
      },
      {
        index: 2,
        paragraph: "I collaborated in component development, maintenance and optimization for Google and YouTube blogs."
      },
      {
        index: 3,
        link: "https://blog.google",
        paragraph: "Google Blog (The Keyword)"
      },
      {
        index: 4,
        link: "https://blog.youtube",
        paragraph: "YouTube Blog"
      },
      {
        index: 5,
        isTitle: true,
        paragraph: "Web Developer at Julius Connected to Grow."
      },
      {
        index: 6,
        paragraph: "I was in charge of creating and maintaining the client's website by customizing the CMS components according to their needs."
      },
    ],
  },
  {
    id: "knowledge",
    title: "knowledge",
    videoSrc: knowledge,
		content: [
      {
        index: 1,
        isTitle: true,
        paragraph: "Programming languages",
      },
      {
        index: 2,
        paragraph: "JavaScript - TypeScript - React",
      },
      {
        index: 3,
        paragraph: "Astro",
      },
      {
        index: 4,
        paragraph: "HTML5",
      },
      {
        index: 5,
        paragraph: "CSS3 - SASS - Tailwind",
      },
      {
        index: 7,
        paragraph: "Git & GitHub",
      },
      {
        index: 8,
        isTitle: true,
        paragraph: "Methodologies",
      },
      {
        index: 9,
        paragraph: "BEM",
      },
      {
        index: 10,
        paragraph: "Agile methodologies · Scrum (Jira)",
      },
      {
        index: 11,
        isTitle: true,
        paragraph: "Spoken Languages",
      },
      {
        index: 12,
        paragraph: "Native Spanish",
      },
      {
        index: 13,
        paragraph: "English C1 level",
      },
    ],
  },
]
