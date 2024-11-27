import { ReactNode } from "react";
import HeaderNav from "@/components/header";
import Footer from "@/components/footer";
import { GlowBar } from "@/components/ui/glow-bar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen overflow-hidden'>
      <GlowBar className='absolute' />
      <HeaderNav className='mx-auto max-w-[1200px]' />
      <div className='relative dark:bg-grid-white/[0.2] bg-grid-black/[0.2]'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]' />
        <main className='relative mx-auto pt-5'>{children}</main>

        <Footer className='relative' />
      </div>
    </div>
  );
}
