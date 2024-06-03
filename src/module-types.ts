export type FeaturesProps = { type: "features"; data: { title: string; content: string }[] };

export type CloudsProps = {
  type: "clouds";
  data: { title?: string; content?: string; img: string; bgColor?: string }[];
};
