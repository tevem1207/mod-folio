import { Features } from "./Features";
import type { FeaturesProps } from "./types";

type BlockProps = {
  blocks: FeaturesProps[];
};

export const Block = ({ blocks }: BlockProps) => {
  return (
    <div>
      {blocks.map(({ type, data }) => {
        switch (type) {
          case "features":
            return <Features {...{ type, data }} />;

          default:
            break;
        }
      })}
    </div>
  );
};
