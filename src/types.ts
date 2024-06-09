import { CloudsProps, FeaturesProps } from "./module-types";

export type Portfolio = {
  title?: Text;
  header?: { title: Text; content: Text };
  links?: { icon: IconKey; url: string }[];
  blocks?: BlockProps[];
};
export type BlockProps = FeaturesProps | CloudsProps;

export type Text = { [key: string]: string };

export type IconKey = "link" | "github" | "message";
