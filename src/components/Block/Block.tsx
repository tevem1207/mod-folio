import { lazy } from "react";

import type { BlockProps } from "./types";

const Features = lazy(() => import("./Features"));

export const Block = ({ type, data }: BlockProps) => {
  return <div>{type === "features" ? <Features {...{ type, data }} /> : <></>}</div>;
};
