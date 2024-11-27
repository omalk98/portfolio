import { LuBinary, LuCloud } from "react-icons/lu";
import { FaJava, FaTools, FaDatabase, FaConnectdevelop } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiAmazondynamodb,
  SiRedis,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiVuedotjs,
  SiOpencv,
  SiSelenium,
  SiRedux,
  SiMui,
  SiTailwindcss,
  SiFigma,
  SiJira,
  SiWordpress,
  SiPhp,
  SiPython,
  SiDocker,
  SiGit,
  SiGithub,
  SiAmazonwebservices,
  SiHtml5,
  SiCss3,
  SiJenkins,
  SiGnubash,
  SiExpress,
  SiPandas,
  SiMysql,
  SiNuxtdotjs,
  SiShadcnui,
  SiBitbucket,
  SiGooglecloud,
  SiGoogleads,
  SiGoogleanalytics,
  SiFacebook,
  SiDjango,
  SiFlask,
  SiConfluence,
  SiAsana,
  SiLinux,
} from "react-icons/si";

export const languageTools = [
  {
    title: "Languages",
    icons: [{ icon: LuBinary, color: "#FFFFFF" }],
    badges: [
      { text: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { text: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { text: "Go", icon: SiGo, color: "#00ADD8" },
      { text: "Python", icon: SiPython, color: "#306998" },
      { text: "Java", icon: FaJava, color: "#007396" },
      { text: "PHP", icon: SiPhp, color: "#777BB4" },
      { text: "Bash", icon: SiGnubash, color: "#4EAA25" },
      { text: "HTML", icon: SiHtml5, color: "#E34F26" },
      { text: "CSS", icon: SiCss3, color: "#1572B6" },
    ]
  },
  {
    title: "JavaScript/TypeScript Tools",
    icons: [
      { icon: SiJavascript, color: "#F7DF1E" },
      { icon: SiTypescript, color: "#3178C6" },
    ],
    badges: [
      { text: "Node.js", icon: SiNodedotjs, color: "#68A063" },
      { text: "React.js", icon: SiReact, color: "#61DAFB" },
      { text: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { text: "Vue.js", icon: SiVuedotjs, color: "#42B883" },
      { text: "Nuxt.js", icon: SiNuxtdotjs, color: "#00DC82" },
      { text: "Express.js", icon: SiExpress, color: "#404D59" },
      { text: "Redux", icon: SiRedux, color: "#764ABC" },
      { text: "MaterialUI", icon: SiMui, color: "#0081CB" },
      { text: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { text: "Shadcn/UI", icon: SiShadcnui, color: "#000000" },
    ],
  },
  {
    title: "Python Tools",
    icons: [{icon: SiPython, color: "#306998"}],
    badges: [
      { text: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { text: "Selenium", icon: SiSelenium, color: "#43B02A" },
      { text: "Pandas", icon: SiPandas, color: "#150458" },
      { text: "Django", icon: SiDjango, color: "#092E20" },
      { text: "Flask", icon: SiFlask, color: "#000000" },
      { text: "MediaPipe", icon: null, color: "#0097A7" }, // Add the correct icon
    ],
  },
  {
    title: "Cloud Tools",
    icons: [{icon: LuCloud, color: "#7DD3FC"}],
    badges: [
      { text: "Linux", icon: SiLinux, color: "#FCC624" },
      { text: "Docker", icon: SiDocker, color: "#2496ED" },
      { text: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
      { text: "GCP", icon: SiGooglecloud, color: "#4285F4" },
      { text: "Azure", icon: null, color: "#007FFF" }, // Add the correct icon
    ],
  },
  {
    title: "Databases",
    icons: [{ icon: FaDatabase, color: "#FFFFFF" }],
    badges: [
      { text: "MySQL", icon: SiMysql, color: "#4479A1" },
      { text: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { text: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { text: "DynamoDB", icon: SiAmazondynamodb, color: "#4053D6" },
      { text: "Redis", icon: SiRedis, color: "#D82C20" },
    ],
  },
  {
    title: "General Tools",
    icons: [{ icon: FaTools, color: "#FF9900" }],
    badges: [
      { text: "Git", icon: SiGit, color: "#F05033" },
      { text: "GitHub", icon: SiGithub, color: "#181717" },
      { text: "BitBucket", icon: SiBitbucket, color: "#0052CC" },
      { text: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { text: "WordPress", icon: SiWordpress, color: "#21759B" },
      { text: "Figma", icon: SiFigma, color: "#F24E1E" },
      { text: "Jira", icon: SiJira, color: "#0052CC" },
      { text: "Confluence", icon: SiConfluence, color: "#172B4D" },
      { text: "Asana", icon: SiAsana, color: "#F06A6A" },
    ],
  },
  {
    title: "Marketing",
    icons: [{ icon: FaConnectdevelop, color: "#0EA5E9" }],
    badges: [
      {
        text: "Google Analytics (GA4)",
        icon: SiGoogleanalytics,
        color: "#E37400",
      },
      { text: "Google Ads", icon: SiGoogleads, color: "#4285F4" },
      { text: "Facebook Ads", icon: SiFacebook, color: "#0866FF" },
      { text: "Ubersuggest", icon: null, color: "#FA633D" }, // Add the correct icon
    ],
  },
];

export const skills = {
  Languages: ["SQL"],
  Cloud: ["Linux"],
  Utilities: ["MS Word", "Excel"],
};
