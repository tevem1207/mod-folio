import { lazy } from "react";

import type { BlockProps } from "./types";

const Features = lazy(() => import("./Features"));

export const Block = ({ type, data }: BlockProps) => {
  return <>{type === "features" ? <Features {...{ type, data }} /> : <></>}</>;
};

export const Blocks = ({ blocksData }: { blocksData?: BlockProps[] }) => {
  return (
    <div className="sm:px-5 md:px-8 lg:px-10 py-10 flex flex-col gap-5">
      {blocksData?.map((blockdata) => <Block {...blockdata} />)}
    </div>
  );
};
