import * as brands from "@/lib/brands";
import { IconType } from "react-icons/lib";

export interface Experience {
  company: string;
  logo: {
    src: string;
    bg: "dark" | "light";
  };
  department: string;
  role: {
    title: string;
    highlights: string[];
    duration: {
      start: string;
      end: string;
    };
  }[];
  description: string;
  type: string;
  location: string;
  technologies: {
    top: {
      text: string;
      icon: IconType | undefined;
      color: string;
      textColor?: string;
    }[];
    rest: {
      text: string;
      icon: IconType | undefined;
      color: string;
      textColor?: string;
    }[];
  };
}

export const experience: Experience[] = [
  {
    company: "Calian Group LTD",
    department: "Operational & Training Technologies (OTTS)",
    logo: {
      src: "/logo/calian.svg",
      bg: "light",
    },
    role: [
      {
        title: "Front-End Software Developer (Data Team)",
        highlights: [
          "Engineer Angular/Electron.js launcher for Midas simulation analytics platform",
          "Create and integrate AAR report generation framework within Midas platform",
          "Build unified UI component library for Midas with extensible plugin support",
        ],
        duration: {
          start: "Jul 2025",
          end: "Present",
        },
      },
      {
        title: "Front-End Software Developer (NewArch Team)",
        highlights: [
          "Developed Angular/Electron.js launcher for Nexus simulation adapter platform",
          "Refactored Nexus Angular GIS interface using scalable design patterns and UI improvements",
          "Improved Nexus Java server data resilience with enhanced backup, timeline recovery, and compression",
        ],
        duration: {
          start: "Jan 2025",
          end: "Jul 2025",
        },
      },
    ],
    description:
      "Design & Build NATO-compliant C2 simulation solutions for military training exercises",
    type: "Full-Time",
    location: "Ottawa, ON",
    technologies: {
      top: [brands.typeScript, brands.angular, brands.electronJs, brands.java],
      rest: [
        { ...brands.javaScript, textColor: "" },
        brands.windows,
        { ...brands.linux, textColor: "" },
        brands.nodeJs,
        brands.html,
        brands.css,
        brands.git,
        brands.gitLab,
        brands.micronaut,
        brands.mariaDB,
      ],
    },
  },
  {
    company: "K'awat'si Economic Development Corporation (KEDC)",
    department: "K'awat'si Consulting & Management Services (KCMS)",
    logo: {
      src: "/logo/kedc.svg",
      bg: "dark",
    },
    role: [
      {
        title: "Web Developer",
        highlights: [
          "Collaborated with business owners to translate goals into effective web solutions, ensuring an engaging experience",
          "Utilized Google Analytics, Ads, Search Console, and Ubersuggest to enhance business online presence and visibility",
          "Reduced average site load times from over 4 seconds to under 1 second, significantly boosting user engagement",
          "Automated data collection and reporting, cutting analysis time from 4 hours to 20 minutes",
          "Enhanced cybersecurity measures, reducing incidents by 40% and improving resilience against cyber threats",
        ],
        duration: {
          start: "Jun 2024",
          end: "Nov 2024",
        },
      },
    ],
    description:
      "Managed and maintained a portfolio of 14 business websites focusing on e-commerce, education, and online services for indigenous communities in British Columbia",
    type: "Full-Time",
    location: "Port Hardy, BC",

    technologies: {
      top: [
        { ...brands.javaScript, textColor: "" },
        brands.php,
        brands.bash,
        { ...brands.linux, textColor: "" },
      ],
      rest: [
        brands.mySQL,
        brands.html,
        brands.css,
        brands.wordPress,
        brands.cPanel,
        brands.googleAnalytics,
        brands.googleAds,
        brands.googleSearchConsole,
        brands.uberSuggest,
      ],
    },
  },
  {
    company: "Ontario Treasury Board Secretariat",
    department: "Enterprise Applications Branch, Central Agencies I&IT Cluster",
    logo: {
      src: "/logo/otbs.svg",
      bg: "dark",
    },
    role: [
      {
        title: "Web Developer",
        highlights: [
          "Spearheaded internal API upgrade from Go v1.13 to v1.22 ensuring industry standard compatibility",
          "Collaborated with team members to modularize Go code, streamlining the codebase and reducing technical debt",
          "Developed Bash script to automate synchronization of local Go tools with Docker image for IDE support",
          "Implemented web accessibility standards using Vue.js resulting in more user-friendly interfaces",
        ],
        duration: {
          start: "Jan 2024",
          end: "Apr 2024",
        },
      },
    ],
    description:
      "Developed and aided in migration of internal CMS with 170K+ users and 25M+ monthly requests from WordPress to custom Go API managed by Docker/Kubernetes cluster",
    type: "Co-Op",
    location: "Toronto, ON",
    technologies: {
      top: [brands.go, brands.bash, brands.kubernetes, brands.vueJs],
      rest: [
        brands.typeScript,
        { ...brands.javaScript, textColor: "" },
        { ...brands.linux, textColor: "" },
        brands.docker,
        { ...brands.sql, textColor: "" },
        brands.mySQL,
        brands.minIO,
        brands.nuxtJs,
        brands.html,
        brands.css,
        brands.tailwind,
        brands.azure,
        brands.git,
        brands.bitBucket,
        brands.gitea,
        brands.elk,
        brands.googleAnalytics,
        brands.jira,
      ],
    },
  },
  {
    company: "Sun Glow Window Coverings",
    department: "Marketing & IT",
    logo: {
      src: "/logo/sun-glow.png",
      bg: "light",
    },
    role: [
      {
        title: "Full Stack Developer",
        highlights: [
          "Led B2B site migration from PHP/jQuery to Next.js, achieving substantial usability and performance improvements",
          "Deployed Node.js microservice with React.js admin panel to dynamically calculate material cost based on user input",
          "Overhauled B2C site React.js UI and Express.js API resulting in a 20% loading time decrease and 40% traffic increase",
          "Revived wholesale site by automating order processing and enhancing manufacturing ETL workflows using Python",
        ],
        duration: {
          start: "Apr 2023",
          end: "Aug 2023",
        },
      },
    ],
    description:
      "Enhanced numerous e-commerce websites, cloud services, and built ETL tools to seamlessly integrate commerce data with manufacturing and warehousing software",
    type: "Co-Op",
    location: "Toronto, ON",
    technologies: {
      top: [
        brands.nextJs,
        brands.python,
        { ...brands.aws, textColor: "" },
        brands.docker,
      ],
      rest: [
        brands.typeScript,
        { ...brands.javaScript, textColor: "" },
        brands.php,
        { ...brands.linux, textColor: "" },
        { ...brands.sql, textColor: "" },
        brands.mySQL,
        brands.reactJs,
        brands.nodeJs,
        brands.expressJs,
        brands.tailwind,
        brands.html,
        brands.css,
        brands.materialUI,
        brands.git,
        brands.gitHub,
        brands.stripe,
        brands.wordPress,
        brands.cPanel,
      ],
    },
  },
  {
    company: "Seneca Innovation Labs",
    department: "",
    logo: {
      src: "/logo/seneca.svg",
      bg: "light",
    },
    role: [
      {
        title: "Full Stack Developer",
        highlights: [
          "Established industry standard code structure and practices to ensure project maintainability and scalability",
          "Transformed Excel tools into an Express/React.js app with automated features and live data visualization updates",
          "Developed MySQL encrypted database backup and recovery utilities to ensure data integrity and privacy",
          "Coordinated with IT staff to test the app locally prior to cloud deployment, ensuring a reliable transition",
        ],
        duration: {
          start: "Mar 2023",
          end: "Jul 2023",
        },
      },
    ],
    description:
      "Led the development of a community center management application, enabling automated record collection and real-time analytics for distributed access",
    type: "Part-Time",
    location: "Toronto, ON",
    technologies: {
      top: [
        brands.reactJs,
        brands.expressJs,
        { ...brands.aws, textColor: "" },
        brands.docker,
      ],
      rest: [
        { ...brands.javaScript, textColor: "" },
        { ...brands.sql, textColor: "" },
        brands.mySQL,
        { ...brands.linux, textColor: "" },
        brands.nodeJs,
        brands.materialUI,
        brands.html,
        brands.css,
        brands.git,
        brands.gitHub,
        brands.bash,
      ],
    },
  },
  {
    company: "EK Tech Solutions",
    department: "Web Services",
    logo: {
      src: "/logo/ek-tech.jpg",
      bg: "light",
    },
    role: [
      {
        title: "Full Stack Developer",
        highlights: [
          "Automated collection and analysis of resources in Postgres, reducing a 2-hour task per week to 10 minutes",
          "Achieved a 35% improvement in website loading times by optimizing visual asset compression",
          "Collaborated on developing internal Python automation tools to boost team productivity",
        ],
        duration: {
          start: "Mar 2022",
          end: "Sep 2022",
        },
      },
    ],
    description:
      "Designed and implemented a web scraper to identify sales leads and market trends for corporation-wide ETLs",
    type: "Contract",
    location: "London, ON",
    technologies: {
      top: [
        brands.python,
        { ...brands.javaScript, textColor: "" },
        brands.postgreSQL,
      ],
      rest: [
        brands.nodeJs,
        { ...brands.sql, textColor: "" },
        brands.html,
        brands.css,
        brands.git,
        brands.gitHub,
      ],
    },
  },
  {
    company: "Stud Coffee",
    department: "",
    logo: {
      src: "/logo/stud-coffee.png",
      bg: "light",
    },
    role: [
      {
        title: "Wordpress Developer",
        highlights: [
          "Led website redesign and implemented order scheduling resulting in a 20% customer conversion rate increase",
          "Analyzed customer interactions to identify successful UI changes to improve overall user experience",
          "Utilized CRM and sales data to guide product price adjustments and marketing strategies",
          "Managed recourse and asset collection to integrate for display across the website",
        ],
        duration: {
          start: "Mar 2022",
          end: "May 2022",
        },
      },
    ],
    description:
      "Improved and maintained e-commerce platform with market-driven adaptations and analysis to meet business needs",
    type: "Contract",
    location: "London, ON",
    technologies: {
      top: [
        brands.wordPress,
        { ...brands.javaScript, textColor: "" },
        brands.mySQL,
      ],
      rest: [
        brands.linux,
        { ...brands.sql, textColor: "" },
        brands.html,
        brands.css,
        brands.git,
        brands.gitHub,
      ],
    },
  },
];
