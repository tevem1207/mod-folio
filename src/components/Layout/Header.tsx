import { EnvelopeIcon, LinkIcon } from "@heroicons/react/24/outline";

import GithubIcon from "@/assets/github-logo.svg?react";

export const Header = () => {
  return (
    <header className="header-background sm:px-5 md:px-8 bg-slate-100">
      <div className="max-w-screen-lg w-full mx-auto">
        <div className="text-xl font-bold py-4">ModFolio</div>
        <div className="pt-4 pb-8">
          <h2 className="text-3xl font-bold py-4">This is My Portfolio</h2>
          <p className="opacity-90 py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
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
        </div>
      </div>
    </header>
  );
};
