import { useEffect, useState } from "react";

import { Footer, Header } from "@/components";
import { Blocks } from "@/components";

import { BlockProps } from "@/components/Block/types";

export const Component = () => {
  const [blocksData, setBlocksData] = useState<BlockProps[]>();

  useEffect(() => {
    fetch("/block-data.json")
      .then((res) => res.json())
      .then((data: BlockProps[]) => setBlocksData(data));
  }, []);

  return (
    <article className="max-w-screen-lg mx-auto">
      <Header />
      <Blocks blocksData={blocksData} />
      <Footer />
    </article>
  );
};
