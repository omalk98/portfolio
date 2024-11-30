import React from "react";

export default function GlowListItem({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <span className='inline-block w-2.5 h-2.5 mb-[0.1rem] mr-3 rounded-full bg-yellow-400 dark:bg-cyan-600 shadow-[0_0_10px_rgba(234,179,8,0.7),0_0_15px_rgba(234,179,8,0.7),0_0_20px_rgba(234,179,8,0.7)] dark:shadow-[0_0_10px_rgba(8,145,178,0.7),0_0_15px_rgba(8,145,178,0.7),0_0_20px_rgba(8,145,178,0.7)]' />
      {children}
    </>
  );
}
