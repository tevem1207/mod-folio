import { Text } from "./types";

export type FeaturesProps = {
  type: "features";
  title: Text;
  data: { title: Text; content: Text }[];
};

export type CloudsProps = {
  type: "clouds";
  title: Text;
  data: { title?: Text; content?: Text; img: string; bgColor?: string }[];
};
