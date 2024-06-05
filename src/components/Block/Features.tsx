import type { FeaturesProps } from "@/module-types";

const Features = ({ title, data }: FeaturesProps) => {
  const Feature = ({ title, content }: FeaturesProps["data"][0]) => {
    return (
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl	font-bold">{title}</h3>
        <p>{content}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-12">
      <h2 className="text-3xl	font-bold">{title}</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-12 md:gap-16">
        {data.map((feature, index) => (
          <Feature key={`feature-block-${index}`} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
