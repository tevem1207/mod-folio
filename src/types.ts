export type Portfolio = {
  title?: string;
  header?: { title: string; content: string };
  links?: { icon: IconKey; url: string }[];
  blocks?: BlockProps[];
};
export type BlockProps = FeaturesProps;
export type FeaturesProps = { type: "features"; data: { title: string; content: string }[] };

export type IconKey = "link" | "github" | "message";
