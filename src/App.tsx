import { useEffect } from "react";
// lazy, useState, Suspense, useMemo
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Layout from "@/layout";
import LinkWrapper from "@/components/link-wrapper";
import DownloadButton from "@/components/download-button";
import { experience, contactLinks } from "@/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BouncingList from "@/components/bouncing-list";
import DetailCard from "@/components/detail-card";
import SectionWrapper from "@/components/section-wrapper";
import { Contact } from "@/types";
import { Timeline } from "@/components/ui/timeline";
import GlowCard from "@/components/ui/glow-card";
import { skills } from "@/data";
import TechStackCard from "@/components/tech-stack-card";
import StaggerList from "./components/stagger-list";
import GlowListItem from "./components/glow-list-item";
import { /*getMapPoints,*/ track } from "./api";
import { FaDesktop, FaMobile, FaServer } from "react-icons/fa";
import AbbreviationHighlighter from "./components/abbreviation-highlighter";
// const WorldMap = lazy(() => import("./components/ui/world-map"));

export default function Portfolio() {
  // const [mapData, setMapData] = useState<
  //   { start: { lat: number; lng: number }; end: { lat: number; lng: number } }[]
  // >([]);
  // const memoMapData = useMemo(() => (
  //   <Suspense
  //       fallback={
  //         <div className='w-full h-64 flex items-center justify-center bg-gray-200 dark:bg-gray-800'>
  //           <svg className="animate-spin h-10 w-10 text-yellow-500 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  //             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
  //             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
  //           </svg>
  //         </div>
  //       }
  //     >
  //       <WorldMap dots={mapData} />
  //     </Suspense>
  // ), [mapData]);
  useEffect(() => {
    async function fetchData() {
      track();
      // const mapPoints = await getMapPoints();
      // setMapData(
      //   mapPoints.map((point) => ({
      //     start: { lat: point.start.lat, lng: point.start.lng },
      //     end: { lat: point.end.lat, lng: point.end.lng },
      //   }))
      // );
    }
    fetchData();
  }, []);
  return (
    <Layout>
      {/* Hero Section */}
      <motion.div
        id='top'
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 8,
        }}
        className='container mx-auto transition-padding duration-200 min-h-screen flex flex-col items-center justify-center text-center'
      >
        <div className='relative max-w-4xl w-full p-4'>
          {/* Avatar */}
          <div className='flex justify-center mb-6'>
            <Avatar className='w-48 h-48 border-4 border-yellow-500 dark:border-blue-500'>
              <AvatarImage
                src='/image/omar-headshot.jpg'
                alt='Omar Hussein'
                className='object-cover'
              />
              <AvatarFallback className='text-7xl'>OH</AvatarFallback>
            </Avatar>
          </div>
          {/* Name and Title */}
          <h1 className='text-4xl font-bold mb-2'>Omar Hussein</h1>
          <h2 className='text-2xl text-gray-500 dark:text-gray-400 mb-4'>
            Software Engineer / Full-Stack Developer
          </h2>

          <div className='flex flex-wrap gap-4 justify-center mb-10'>
            {[
              {
                label: "Desktop",
                icon: FaDesktop,
              },
              {
                label: "Web",
                icon: FaServer,
              },
              {
                label: "Mobile",
                icon: FaMobile,
              },
            ].map((item) => (
              <div
                key={item.label}
                className='items-center gap-2 transition-all align-center justify-center hover:scale-110 rounded-full p-2'
              >
                <item.icon
                  className='mx-auto'
                  size={26}
                />
                <span className='text-sm font-semibold text-gray-800 dark:text-gray-200'>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Typed Text */}
          <div className='text-xl text-gray-300 mb-6 h-10'>
            <ReactTyped
              strings={[
                "Building scalable web applications",
                "Creating efficient microservices",
                "Solving complex technical challenges",
                "Obsessed with automation",
                "Optimizing performance for fast solutions",
                "Passionate about clean code",
              ]}
              typeSpeed={55}
              backSpeed={40}
              backDelay={2000}
              loop
              className='text-yellow-600 dark:text-blue-400'
            />
          </div>
          <div className='my-10'>
            <DownloadButton
              href='https://drive.google.com/uc?export=download&id=1SipnZucXQ5cM2SaJxPC5XYLBoUA-GjkD'
              newWindow
              // href='/resume.pdf'
              fileName='Omar_Hussein-Resume.pdf'
              text='Download Resume'
              className='mx-auto'
              tooltip={<p>Hire Me!</p>}
            />
          </div>

          <div className='flex flex-wrap gap-4 mb-8 justify-center my-10'>
            <BouncingList
              className='flex flex-wrap gap-4'
              step={2}
              items={contactLinks}
              renderComponent={(contact: Contact) => (
                <LinkWrapper
                  key={contact.label}
                  href={contact.href}
                  title={contact.label}
                  className='items-center gap-2 transition-all align-center inline-flex hover:scale-110 rounded-full p-2'
                >
                  <contact.icon
                    size={26}
                    style={{ color: contact.color }}
                  />
                </LinkWrapper>
              )}
            />
          </div>

          <p className='text-lg text-gray-800 dark:text-gray-300 max-w-xl mx-auto'>
            Software Engineer with expertise in full-stack development,
            microservices, and cloud solutions. Proficient in multiple
            programming languages and tools, with a passion for performance,
            scalability, automation, and code structure. Known for
            problem-solving, teamwork, and an eagerness to learn new skills and
            technologies.
          </p>
        </div>
      </motion.div>

      {/* {memoMapData} */}

      {/* About Section */}

      {/* Skills Section */}
      <SectionWrapper
        id='skills'
        title='Skills & Technologies'
      >
        <StaggerList
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'
          items={skills}
          renderComponent={(tool) => (
            <TechStackCard
              key={tool.title}
              title={tool.title}
              icons={tool.icons}
              badges={tool.badges}
            />
          )}
        />
      </SectionWrapper>

      {/* Experience Section */}
      <SectionWrapper
        id='experience'
        title='Experience'
        fullWidth
      >
        <Timeline
          data={experience.map((exp) => ({
            title: `${exp.role[exp.role.length - 1].duration.start} - ${
              exp.role[0].duration.end
            }`,
            content: (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='relative'
              >
                <DetailCard
                  className='shadow-lg dark:shadow-white/20'
                  title={
                    <>
                      <div className='flex items-center gap-4'>
                        <motion.div
                          animate={{ rotateY: [0, 360] }}
                          transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 2,
                          }}
                        >
                          <Avatar
                            className={`w-12 h-12 border-2 border-yellow-500 dark:border-blue-500 ${
                              exp.logo.bg === "dark"
                                ? "bg-gray-600"
                                : "bg-white"
                            }`}
                          >
                            <AvatarImage
                              src={exp.logo.src}
                              alt={`${exp.company} logo`}
                              className='object-contain p-1'
                            />
                            <AvatarFallback className='text-sm font-bold bg-gradient-to-br from-amber-100 to-amber-200 dark:from-sky-900 dark:to-sky-800 text-amber-700 dark:text-sky-200'>
                              {(() => {
                                const words = exp.company.split(" ");
                                if (words.length >= 2) {
                                  return words[0][0] + words[1][0];
                                }
                                return words[0][0];
                              })()}
                            </AvatarFallback>
                          </Avatar>
                        </motion.div>
                        <div className='w-full'>
                          <div>
                            <div className='text-xl font-bold block'>
                              {exp.company}
                            </div>
                            {exp.department && (
                              <div className='text-sm text-gray-600 dark:text-gray-400 italic'>
                                {exp.department}
                              </div>
                            )}
                          </div>
                          <div className='flex items-center justify-between gap-2 text-sm'>
                            <i className='text-nowrap'>{exp.location}</i>
                            <div className='flex justify-between items-center italic text-yellow-600 dark:text-cyan-600 drop-shadow-[0_0_10px_rgba(234,179,8,0.7)] dark:drop-shadow-[0_0_10px_rgba(8,145,178,0.7)]'>
                              <span>{exp.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  }
                  description={
                    <div>
                      <p className=' text-lg mt-2'>
                        <AbbreviationHighlighter>
                          {exp.description}
                        </AbbreviationHighlighter>
                      </p>
                    </div>
                  }
                  badges={exp.technologies.top}
                  badgeCarousel={[
                    ...exp.technologies.rest,
                    ...exp.technologies.top,
                  ]}
                  content={
                    <div className='space-y-6'>
                      {exp.role.map((role, roleIndex) => (
                        <div
                          key={role.title}
                          className='relative'
                        >
                          {/* Role Header */}
                          <div className='flex justify-between items-center mb-3 pb-2 border-b border-gray-300 dark:border-gray-600'>
                            <h3 className='text-lg font-semibold text-yellow-600 dark:text-blue-400'>
                              {role.title}
                            </h3>
                            <span className='text-sm text-gray-600 dark:text-gray-400 font-medium'>
                              {role.duration.start} - {role.duration.end}
                            </span>
                          </div>

                          {/* Role Highlights */}
                          <ul className='list-none space-y-2'>
                            {role.highlights.map(
                              (highlight, highlightIndex) => (
                                <li key={highlight}>
                                  <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{
                                      opacity: 1,
                                      x: 0,
                                      transition: {
                                        duration: 0.6,
                                        delay:
                                          0.8 +
                                          (roleIndex * role.highlights.length +
                                            highlightIndex) *
                                            0.1,
                                      },
                                    }}
                                    viewport={{ once: true }}
                                  >
                                    <GlowListItem>
                                      <AbbreviationHighlighter>
                                        {highlight}
                                      </AbbreviationHighlighter>
                                    </GlowListItem>
                                  </motion.div>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  }
                />
              </motion.div>
            ),
          }))}
        />
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper
        id='projects'
        title='Notable Projects'
      >
        <StaggerList
          className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'
          items={[
            {
              title: "File Browser (Open-Source)",
              description: "OPS/Microsoft AI Hackathon",
              date: "2023 - Present",
              list: [
                "Contributed to 50% of the migration to Vue3",
                "Created custom context menu with actions",
                "Added Arabic language translation",
              ],
            },
            {
              title: "WellSphere AI",
              description: "OPS/Microsoft AI Hackathon",
              date: "2024",
              list: [
                "Developed Azure Copilot assistant for mental health",
                "Created Power Pages UI",
                "Integrated PowerBI dashboard",
              ],
            },
          ]}
          renderComponent={(project) => (
            <DetailCard
              key={project.title}
              {...project}
              content={project.list.map((text) => (
                <ul className='list-none space-y-2'>
                  <li>
                    <GlowListItem>{text}</GlowListItem>
                  </li>
                </ul>
              ))}
            />
          )}
        />
      </SectionWrapper>

      {/* Education Section */}
      <SectionWrapper
        id='education'
        title='Education'
      >
        <StaggerList
          items={[""]}
          renderComponent={() => (
            <DetailCard
              className='max-w-2xl mx-auto border-none'
              title='Seneca College'
              description='Honors Bachelor of Technology in Software Development'
              date='2020 - 2024'
              content={
                <>
                  <h3 className='font-semibold mb-2'>Achievements</h3>
                  <ul className='list-none space-y-2'>
                    <li>
                      <GlowListItem>
                        President's Honor List for 6 semesters
                      </GlowListItem>
                    </li>
                    <li>
                      <GlowListItem>
                        1st place in MERN stack UI/UX competition
                      </GlowListItem>
                    </li>
                    <li>
                      <GlowListItem>
                        Tutored 5-7 classmates each semester
                      </GlowListItem>
                    </li>
                  </ul>
                </>
              }
            />
          )}
        />
      </SectionWrapper>

      <SectionWrapper
        id='contact'
        title='Get in Touch'
      >
        <StaggerList
          className='relative flex flex-wrap flex-col md:flex-row justify-center items-center gap-10 max-w-5xl mx-auto'
          items={contactLinks}
          renderComponent={(contact) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkWrapper
                href={contact.href}
                className='h-full custom-hover-data-color'
                style={{ "--data-color": contact.color }}
              >
                <GlowCard className='shadow-xl w-[300px] transition-colors bg-slate-100/90 dark:bg-gray-900/90 border hover:bg-slate-100/70 hover:dark:bg-gray-900/70 border-gray-300 dark:border-gray-700 px-4 py-8 rounded-2xl'>
                  <div className='w-full flex flex-col items-center text-center space-y-4'>
                    <div className='p-4 rounded-full bg-white dark:bg-slate-900'>
                      <contact.icon
                        size={32}
                        style={{ color: contact.color }}
                      />
                    </div>
                    <div>
                      <h3 className='font-semibold text-xl mb-1 custom-hover-data-color'>
                        {contact.label}
                      </h3>
                      <p className='text-gray-600 dark:text-gray-300'>
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </LinkWrapper>
            </motion.div>
          )}
        />
      </SectionWrapper>
    </Layout>
  );
}
