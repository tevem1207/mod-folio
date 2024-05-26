import { LinkButton } from "@/components";
import { Portfolio } from "@/types";

export const Footer = ({ links }: Portfolio) => {
  return (
    <footer className="flex flex-col md:flex-row gap-6 md:justify-between w-full max-w-screen-lg mx-auto items-center sm:px-5 md:px-8 pt-10 pb-20">
      <div className="text-sm opacity-80">© 2024 mod_folio. All rights reserved</div>
      <div className="h-8 flex gap-4">
        {links?.map(({ icon, url }) => (
          <LinkButton key={`link-button-${icon}`} icon={icon} url={url} />
        ))}
      </div>
    </footer>
  );
};
