import { EnvelopeIcon, LinkIcon as LinkOutlineIcon } from "@heroicons/react/24/outline";

import { IconKey } from "@/types";

import GithubIcon from "@/assets/github-logo.svg?react";

export const LinkIcon = ({ icon }: { icon: IconKey }) => {
  return icon === "github" ? (
    <GithubIcon className="size-4" />
  ) : icon === "link" ? (
    <LinkOutlineIcon className="size-4" />
  ) : (
    <EnvelopeIcon className="size-4" />
  );
};

export const LinkButton = ({ icon, url }: { icon: IconKey; url: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="size-8 rounded-full p-2 bg-opacity-90 hover:bg-opacity-80 active:bg-opacity-100 bg-slate-200 dark:bg-slate-800"
  >
    <LinkIcon icon={icon} />
  </a>
);
