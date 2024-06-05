export type FeaturesProps = {
  type: "features";
  title: "string";
  data: { title: string; content: string }[];
};

export type CloudsProps = {
  type: "clouds";
  title: "string";
  data: { title?: string; content?: string; img: string; bgColor?: string }[];
};
