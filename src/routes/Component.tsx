import { useEffect, useState } from "react";

import { Footer, Header } from "@/components";
import { Blocks } from "@/components";
import type { Portfolio } from "@/types";

export const Component = () => {
  const [portfolioData, setPortfolioData] = useState<Portfolio | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch("/mod-folio/data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Portfolio = await response.json();
        setPortfolioData(data);
      } catch (err) {
        setError((err as Error)?.message ?? "unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  return (
    <article>
      <Header {...portfolioData} />
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <Blocks {...portfolioData} />
      )}
      <Footer {...portfolioData} />
    </article>
  );
};
