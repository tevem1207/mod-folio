import { useEffect, useState } from "react";

import { Footer, Header } from "@/components";
import { Blocks } from "@/components";
import type { Portfolio } from "@/types";

export const Component = () => {
  const [portfolioData, setPortfolioData] = useState<Portfolio>();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((portfolioData: Portfolio) => setPortfolioData(portfolioData));
  }, []);

  return (
    <article>
      <Header />
      <Blocks blocks={portfolioData?.blocks} />
      <Footer />
    </article>
  );
};
