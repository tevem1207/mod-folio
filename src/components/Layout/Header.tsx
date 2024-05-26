import { LinkIcon } from "@/components";
import { Portfolio } from "@/types";

export const Header = ({ title, header, links }: Portfolio) => {
  return (
    <header className="header-background bg-slate-100">
      <div className="max-w-screen-lg sm:px-5 md:px-8 w-full mx-auto">
        <div className="text-xl font-bold py-4">{title}</div>
        <div className="flex flex-col gap-6 pt-4 pb-8">
          <h2 className="text-3xl font-bold">{header?.title}</h2>
          <p className="opacity-90">{header?.content}</p>
          <div className="h-8 flex gap-4">
            {links?.map(({ icon, url }) => (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                key={`link-button-${icon}`}
                className="size-8 rounded-full p-2 bg-opacity-90 hover:bg-opacity-80 active:bg-opacity-100 bg-slate-200 dark:bg-slate-800"
              >
                <LinkIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
