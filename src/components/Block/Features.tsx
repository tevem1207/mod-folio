import type { FeaturesProps } from "./types";

const Features = ({ data }: FeaturesProps) => {
  const Feature = ({ title, content }: { title: string; content: string }) => {
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  };
  return (
    <div>
      {data.map((feature) => (
        <Feature {...feature} />
      ))}
    </div>
  );
};

export default Features;
