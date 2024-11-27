import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BouncingList from "@/components/bouncing-list";
import LinkWrapper from "@/components/link-wrapper";
import { Contact } from "@/types";
import { contactLinks } from "@/data";
import { navItems } from "@/lib/constants";
import { GlowBar } from "./components/ui/glow-bar";
import Navigation from "@/components/header/navigation";
import { useRef } from "react";

// Component used to generate Open Graph image
export default function OG() {
  const emptyRef = useRef<(HTMLAnchorElement | null)[]>([]);
  return (
    <div className='relative overflow-hidden max-w-2xl border-4 border-white container mx-auto transition-padding duration-200 flex flex-col items-center justify-start text-center dark:bg-grid-white/[0.3] bg-grid-black/[0.3]'>
      <GlowBar
        duration={0}
        delay={0}
        className='absolute'
      />
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]' />
      <div className='z-50 mt-2'>
        <Navigation
          navItems={navItems}
          handleClick={() => {}}
          activeTab={-1}
          itemsRef={emptyRef}
          dimensions={{ width: 0, left: 0 }}
        />
      </div>
      <div className='relative m-2 mb-6 flex flex-row items-center'>
        {/* Avatar */}
        <div className='flex justify-center'>
          <Avatar className='w-48 h-48 border-4 border-yellow-500 dark:border-blue-500'>
            <AvatarImage
              src='/image/omar-bitmoji.png'
              alt='Omar Hussein'
              className='object-cover'
            />
            <AvatarFallback className='text-7xl'>OH</AvatarFallback>
          </Avatar>
        </div>
        {/* Name and Title */}
        <div className='ml-10 mt-4'>
          <h1 className='text-4xl font-bold mb-2'>Omar Hussein</h1>
          <h2 className='text-2xl text-gray-500 dark:text-gray-400 mb-4'>
            Software Developer
          </h2>
          <div className='flex flex-wrap gap-4 justify-center mt-10'>
            <BouncingList
              className='flex flex-wrap gap-4'
              step={2}
              items={contactLinks}
              duration={0}
              delay={0}
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
        </div>
      </div>
    </div>
  );
}
