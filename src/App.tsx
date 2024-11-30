import { useEffect } from "react";
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
import { languageTools } from "@/data/skills";
import TechStackCard from "@/components/tech-stack-card";
import StaggerList from "./components/stagger-list";
import GlowListItem from "./components/glow-list-item";

export default function Portfolio() {
  useEffect(() => {
    if (
      import.meta.env.VITE_MAILER_URL &&
      import.meta.env.VITE_AUTHORIZATION &&
      import.meta.env.PROD
    )
      fetch(import.meta.env.VITE_MAILER_URL, {
        method: "GET",
        headers: {
          Authorization: import.meta.env.VITE_AUTHORIZATION,
          "Content-Type": "application/json",
        },
      });
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
            Software Developer
          </h2>

          {/* Typed Text */}
          <div className='text-xl text-gray-300 mb-6 h-10'>
            <ReactTyped
              strings={[
                "Building scalable web applications",
                "Creating efficient microservices",
                "Solving complex technical challenges",
                "Passionate about clean code",
                "Obsessed with performance",
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

      {/* Skills Section */}
      <SectionWrapper
        id='skills'
        title='Skills & Technologies'
      >
        <StaggerList
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'
          items={languageTools}
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
            title: exp.duration,
            content: (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='relative'
              >
                <DetailCard
                  className='shadow-lg dark:shadow-white/20'
                  title={
                    <div className='flex justify-between items-baseline'>
                      <span>{exp.role}</span>
                      <i className='text-lg'>{exp.location}</i>
                    </div>
                  }
                  description={
                    <div className='flex justify-between items-center italic text-yellow-600 dark:text-cyan-600 drop-shadow-[0_0_10px_rgba(234,179,8,0.7)] dark:drop-shadow-[0_0_10px_rgba(8,145,178,0.7)]'>
                      <span>{exp.company}</span>
                      <span>{exp.type}</span>
                    </div>
                  }
                  content={
                    <ul className='list-none space-y-2'>
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>
                          <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              transition: {
                                duration: 0.6,
                                delay: 0.8 + i * 0.2,
                              },
                            }}
                            exit={{
                              opacity: 0,
                              x: 100,
                              transition: { duration: 0, delay: 0.8 },
                            }}
                          >
                            <GlowListItem>{highlight}</GlowListItem>
                          </motion.div>
                        </li>
                      ))}
                    </ul>
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
