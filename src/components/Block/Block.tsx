import { lazy } from "react";

import { Menu } from "./Menu";

import type { BlockProps } from "./types";

const Features = lazy(() => import("./Features"));

export const Block = ({ type, data }: BlockProps) => {
  return <>{type === "features" ? <Features {...{ type, data }} /> : <></>}</>;
};

export const Blocks = ({ blocksData }: { blocksData?: BlockProps[] }) => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-1 py-4 bg-white/90 shadow-sm backdrop-blur">
        <div className="max-w-screen-lg sm:px-5 md:px-8 mx-auto">
          <Menu></Menu>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto sm:px-5 md:px-8 pt-10 pb-20 flex flex-col gap-5 border-b">
        {blocksData?.map((blockdata) => <Block {...blockdata} />)}
      </div>
    </div>
  );
};
