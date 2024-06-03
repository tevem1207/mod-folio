import { CloudsProps, FeaturesProps } from "./module-types";

export type Portfolio = {
  title?: string;
  header?: { title: string; content: string };
  links?: { icon: IconKey; url: string }[];
  blocks?: BlockProps[];
};
export type BlockProps = FeaturesProps | CloudsProps;

export type IconKey = "link" | "github" | "message";
