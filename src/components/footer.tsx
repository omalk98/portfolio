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
      <p className="flex justify-center">
        Made with ❤️ by Omar Hussein
        <img
          src='/portfolio/image/omar-bitmoji.png'
          className="w-[24px] h-[24px] mx-2 mt-[-2px]"
        />
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
