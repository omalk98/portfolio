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
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import GlowCard from "@/components/ui/glow-card";
import { languageTools } from "@/data/skills";
import TechStackCard from "@/components/tech-stack-card";
import StaggerList from "./components/stagger-list";

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
              href='./resume.pdf'
              fileName='Omar_Hussein-Resume.pdf'
              text='Download Resume'
              className='mx-auto'
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
            Software Developer with expertise in web development, microservices,
            and cloud solutions. Proficient in multiple programming languages
            and tools, with a passion for performance, scalability, automation,
            and code structure.
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
                  key={exp.company}
                  className='shadow-lg dark:shadow-white/20'
                  title={exp.company}
                  description={
                    <>
                      {exp.role} <i>({exp.type})</i> | {exp.location}
                    </>
                  }
                  date={exp.duration}
                  content={
                    <ul className='list-disc list-inside space-y-2'>
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  }
                >
                  {import.meta.env.PROD && (
                    <div className='h-full w-full absolute inset-0 bg-yellow-800'>
                      <CanvasRevealEffect
                        animationSpeed={2}
                        containerClassName='bg-emerald-900 hidden dark:block'
                        dotSize={2}
                      />
                      <div className='absolute hidden dark:block inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90' />

                      <CanvasRevealEffect
                        animationSpeed={2}
                        containerClassName='bg-yellow-600 dark:none'
                        dotSize={2}
                        colors={[[255, 255, 240]]}
                      />
                      <div className='absolute dark:hidden inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-gray-200/70' />
                    </div>
                  )}
                </DetailCard>
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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
          <DetailCard
            title='File Browser (Open-Source)'
            description='OPS/Microsoft AI Hackathon'
            date='2023 - Present'
            content={
              <ul className='list-disc list-inside space-y-2'>
                <li>Contributed to 50% of the migration to Vue3</li>
                <li>Created custom context menu with actions</li>
                <li>Added Arabic language translation</li>
              </ul>
            }
          />

          <DetailCard
            title='WellSphere AI'
            description='OPS/Microsoft AI Hackathon'
            date='2024'
            content={
              <ul className='list-disc list-inside space-y-2'>
                <li>Developed Azure Copilot assistant for mental health</li>
                <li>Created Power Pages UI</li>
                <li>Integrated PowerBI dashboard</li>
              </ul>
            }
          />
        </div>
      </SectionWrapper>

      {/* Education Section */}
      <SectionWrapper
        id='education'
        title='Education'
      >
        <DetailCard
          className='max-w-2xl mx-auto border-none'
          title='Seneca College'
          description='Honors Bachelor of Technology in Software Development'
          date='2020 - 2024'
          content={
            <>
              <h3 className='font-semibold mb-2'>Achievements</h3>
              <ul className='list-disc list-inside space-y-2'>
                <li>President's Honor List for 6 semesters</li>
                <li>1st place in MERN stack UI/UX competition</li>
                <li>Tutored 5-7 classmates each semester</li>
              </ul>
            </>
          }
        />
      </SectionWrapper>

      <SectionWrapper
        id='contact'
        title='Get in Touch'
      >
        <StaggerList
          className='flex flex-wrap flex-col md:flex-row justify-center items-center gap-10 max-w-5xl mx-auto'
          items={contactLinks}
          renderComponent={(contact) => (
            <motion.div className="inline"
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
