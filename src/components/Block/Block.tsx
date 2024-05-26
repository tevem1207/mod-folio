import { lazy } from "react";

import type { BlockProps } from "./types";

const Features = lazy(() => import("./Features"));

export const Block = ({ type, data }: BlockProps) => {
  return <>{type === "features" ? <Features {...{ type, data }} /> : <></>}</>;
};

export const Blocks = ({ blocksData }: { blocksData?: BlockProps[] }) => {
  return (
    <div className="sm:px-5 md:px-8 py-10 flex flex-col gap-5 min-h-[calc(100dvh-13.5rem)]">
      {blocksData?.map((blockdata) => <Block {...blockdata} />)}
    </div>
  );
};
