import * as brands from "@/lib/brands";

export const experience = [
  {
    company: "K'awat'si Economic Development Corporation (KEDC)",
    role: "Web Developer",
    type: "Full-Time",
    duration: "Jun 2024 - Nov 2024",
    location: "Port Hardy, BC",
    highlights: [
      "Managed and maintained a portfolio of 14 business websites focusing on e-commerce, education, and online services for indigenous communities in British Columbia",
      "Collaborated with business owners to translate goals into effective web solutions, ensuring an engaging experience",
      "Utilized Google Analytics, Ads, Search Console, and Ubersuggest to enhance business online presence and visibility",
      "Reduced average site load times from over 4 seconds to under 1 second, significantly boosting user engagement",
      "Automated data collection and reporting, cutting analysis time from 4 hours to 20 minutes",
      "Enhanced cybersecurity measures, reducing incidents by 40% and improving resilience against cyber threats",
    ],
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
    role: "Software Developer",
    type: "Co-Op",
    duration: "Jan 2024 - Apr 2024",
    location: "Toronto, ON",
    highlights: [
      "Developed and aided in migration of internal CMS with 170K+ users and 25M+ monthly requests from WordPress to custom Go API managed by Docker/Kubernetes cluster",
      "Spearheaded internal API upgrade from Go v1.13 to v1.22 ensuring industry standard compatibility",
      "Collaborated with team members to modularize Go code, streamlining the codebase and reducing technical debt",
      "Developed Bash script to automate synchronization of local Go tools with Docker image for IDE support",
      "Implemented web accessibility standards using Vue.js resulting in more user-friendly interfaces",
    ],
    technologies: {
      top: [
        brands.go,
        brands.bash,
        brands.kubernetes,
        brands.vueJs,
      ],
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
    role: "Full Stack Developer",
    type: "Co-Op",
    duration: "Apr 2023 - Aug 2023",
    location: "Toronto, ON",
    highlights: [
      "Enhanced numerous e-commerce websites, cloud services, and built ETL tools to seamlessly integrate commerce data with manufacturing and warehousing software",
      "Led B2B site migration from PHP/jQuery to Next.js, achieving substantial usability and performance improvements",
      "Deployed Node.js microservice with React.js admin panel to dynamically calculate material cost based on user input",
      "Overhauled B2C site React.js UI and Express.js API resulting in a 20% loading time decrease and 40% traffic increase",
      "Revived wholesale site by automating order processing and enhancing manufacturing ETL workflows using Python",
    ],
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
    role: "Full Stack Developer",
    type: "Part-Time",
    duration: "Mar 2023 - Jul 2023",
    location: "Toronto, ON",
    highlights: [
      "Led the development of a community center management application, enabling automated record collection and real-time analytics for distributed access",
      "Established industry standard code structure and practices to ensure project maintainability and scalability",
      "Transformed Excel tools into an Express/React.js app with automated features and live data visualization updates",
      "Developed MySQL encrypted database backup and recovery utilities to ensure data integrity and privacy",
      "Coordinated with IT staff to test the app locally prior to cloud deployment, ensuring a reliable transition",
    ],
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
    role: "Full Stack Developer",
    type: "Contract",
    duration: "Mar 2022 - Sep 2022",
    location: "London, ON",
    highlights: [
      "Designed and implemented a web scraper to identify sales leads and market trends for corporation-wide ETLs",
      "Automated collection and analysis of resources in Postgres, reducing a 2-hour task per week to 10 minutes",
      "Achieved a 35% improvement in website loading times by optimizing visual asset compression",
      "Collaborated on developing internal Python automation tools to boost team productivity",
    ],
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
];
