import { useEffect, useState } from "react";

export const useScreenWidth = () => {
  const [width, setWidth] = useState(() => {
    if(typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 0;
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },
  []);

  return {
    width,
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
  };
};