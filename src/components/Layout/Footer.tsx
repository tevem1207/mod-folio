import { EnvelopeIcon, LinkIcon } from "@heroicons/react/24/outline";

import GithubIcon from "@/assets/github-logo.svg?react";

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-6 md:justify-between w-full max-w-screen-lg mx-auto items-center sm:px-5 md:px-8 pt-10 pb-20">
      <div className="text-sm opacity-80">© 2024 mod_folio. All rights reserved</div>
      <div className="h-6 flex gap-4">
        <button className="size-6 rounded-full p-1 bg-slate-200">
          <EnvelopeIcon className="size-4" />
        </button>
        <button className="size-6 rounded-full p-1 bg-slate-200">
          <GithubIcon className="size-4" />
        </button>
        <button className="size-6 rounded-full p-1 bg-slate-200">
          <LinkIcon className="size-4" />
        </button>
      </div>
    </footer>
  );
};
