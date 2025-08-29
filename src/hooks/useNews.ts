import { useEffect, useMemo, useState } from "react";
import { visibleItems } from "./useStyle";

export interface News {
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  url: string;
  date: string;
}

interface NewsResponse {
  status: string;
  totalResults: number;
  articles: News[];
}

export const pageSize = 8;

export const useNews = () => {
  const [news, setNews] = useState<News[]>([]);

  const clonedStartNews = useMemo(() => {
    if (!news.length) return [];
    const clonedStart = news.slice(-visibleItems);
    return clonedStart;
  }, [news]);

  const clonedEndNews = useMemo(() => {
    if (!news.length) return [];
    const clonedEnd = news.slice(0, visibleItems);
    return clonedEnd;
  }, [news]);

  const currentNews = useMemo(() => {
    if (!news.length) return [];
    return news;
  }, [news]);

  const fetchNews = async () => {
    const urlParams = new URLSearchParams({
      q: "music",
      pageSize: pageSize.toString(),
      from: "2025-08-01",
      to: "2025-08-31",
      apiKey: import.meta.env.VITE_NEWS_API_KEY,
    });

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?${urlParams.toString()}`
      );

      const data: NewsResponse = await response.json();

      if (data.status === "ok") {
        setNews(data.articles);
      }
    } catch {
      console.log("Error al obtener noticias");
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return {
    clonedStartNews,
    clonedEndNews,
    currentNews,
  };
};
