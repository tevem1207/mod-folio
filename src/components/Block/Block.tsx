import { lazy } from "react";

import { Menu } from "@/components";
import type { BlockProps } from "@/types";

const Features = lazy(() => import("./Features"));
const Clouds = lazy(() => import("./Clouds"));

export const Block = ({ type, title, data }: BlockProps) => {
  return (
    <>
      {type === "features" ? (
        <Features {...{ type, title, data }} />
      ) : type === "clouds" ? (
        <Clouds {...{ type, title, data }} />
      ) : (
        <></>
      )}
    </>
  );
};

export const Blocks = ({ blocks }: { blocks?: BlockProps[] }) => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-1 py-4 bg-white/90 shadow-sm backdrop-blur">
        <div className="max-w-screen-lg sm:px-5 md:px-8 mx-auto">
          <Menu />
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto sm:px-5 md:px-8 pt-10 pb-20 flex flex-col gap-40 border-b">
        {blocks?.map((blockdata, index) => <Block key={`block-item-${index}`} {...blockdata} />)}
      </div>
    </div>
  );
};
