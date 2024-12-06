import { LuHeart } from "react-icons/lu";
import { cn } from "@/lib/utils";

export default function Footer({
  className,
  ...props
}: React.ComponentProps<"footer">) {
  return (
    <footer
      className={cn("py-12 text-center", className)}
      {...props}
    >
      <p className="flex justify-center items-center">
        Made with
        <LuHeart size={20} className="text-red-500 mx-2 mt-[-2px]" />
        by Omar Hussein
        <img
          src='/image/omar-bitmoji.png'
          className="w-[24px] h-[24px] mx-2 mt-[-2px]"
          loading="lazy"
        />
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
