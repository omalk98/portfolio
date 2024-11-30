import React, { useState } from "react";
import { LuDownload, LuCheck, LuLoader } from "react-icons/lu";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import BouncingText from "@/components/bouncing-text";
import { cn } from "@/lib/utils";

const DownloadButton = ({
  href,
  fileName,
  text,
  className,
  tooltip,
  newWindow,
}: {
  href: string;
  fileName: string;
  text: string;
  className?: string;
  tooltip?: string | React.ReactNode;
  newWindow?: boolean;
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  const downloadComplete = () => {
    setIsDownloading(false);
    setIsComplete(true);
    setTimeout(() => {
      setIsComplete(false);
      setProgress(0);
    }, 3000); // Reset after 3 seconds
  };

  const handleDownload = async () => {
    try {
      if (newWindow) {
        window.open(href, "_blank");
        downloadComplete();
        return;
      }

      setIsDownloading(true);

      const response = await fetch(href);
      // Fast way to download the file without showing progress
      // const blob = await response.blob();

      const contentLength = response.headers.get("content-length");
      if (!contentLength) {
        throw new Error("Failed to get the content length.");
      }

      const total = parseInt(contentLength, 10);
      const values = [];
      let loaded = 0;

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error("Failed to read the response body.");
      }

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        values.push(value);
        loaded += value.byteLength;
        setProgress(Math.round((loaded / total) * 100));
      }
      const blob = new Blob(values);

      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;

      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      setIsDownloading(false);
      setProgress(0);
    }

    downloadComplete();
  };

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.button
            onClick={handleDownload}
            disabled={isDownloading || isComplete}
            className={cn(
              "relative flex items-center gap-2 px-4 py-2 rounded-md border-2 transition-all duration-300 overflow-hidden",
              isComplete
                ? "border-green-500 text-green-500 cursor-not-allowed"
                : "border-gray-400",
              isDownloading || isComplete
                ? "bg-opacity-10"
                : "bg-transparent hover:bg-blue-500 hover:bg-opacity-10 hover:border-blue-500 hover:text-blue-500",
              isDownloading && "cursor-wait border-blue-500",
              className
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.1 }}
          >
            {/* Progress bar background */}
            {isDownloading && (
              <motion.div
                className='absolute left-0 top-0 h-full bg-blue-500 bg-opacity-80'
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            )}

            {/* Icon animation */}
            <motion.div
              animate={{
                rotate: isDownloading ? 360 : 0,
                scale: isDownloading ? 0.8 : 1,
              }}
              transition={{
                rotate: {
                  duration: 1,
                  repeat: isDownloading ? Infinity : 0,
                  ease: "linear",
                },
                scale: {
                  duration: 0.15,
                },
              }}
            >
              {isComplete ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <LuCheck className='h-5 w-5' />
                </motion.div>
              ) : isDownloading ? (
                <LuLoader className='h-5 w-5' />
              ) : (
                <LuDownload className='h-5 w-5' />
              )}
            </motion.div>

            {/* Text animation */}
            <div className='relative'>
              <motion.span
                initial={{ opacity: 1, y: 0 }}
                animate={{
                  opacity: isComplete || isDownloading ? 0 : 1,
                  y: isComplete || isDownloading ? -20 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                {text}
              </motion.span>

              <motion.span
                className='absolute left-0 top-0'
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isDownloading ? 1 : 0,
                  y: isDownloading ? 0 : 20,
                }}
                transition={{ duration: 0.2 }}
              >
                <BouncingText
                  text='Downloading...'
                  duration={0.35}
                  height={15}
                />
              </motion.span>

              <motion.span
                className='absolute left-0 top-0'
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isComplete ? 1 : 0,
                  y: isComplete ? 0 : 20,
                }}
                transition={{ duration: 0.2 }}
              >
                Downloaded!
              </motion.span>
            </div>
          </motion.button>
        </TooltipTrigger>
        <TooltipContent sideOffset={10}>{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DownloadButton;
