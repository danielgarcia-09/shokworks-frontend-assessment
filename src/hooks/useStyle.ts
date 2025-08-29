import { useCallback, useEffect, useMemo, useState } from "react";
import { pageSize } from "./useNews";
import { useScreenWidth } from "./useScreenWidth";

export const visibleItems = 3;

export const useStyle = () => {
  const { isMobile, isTablet } = useScreenWidth();
  const numberToShow = useMemo(() => {
    if (isMobile) {
      return 1;
    }
    if (isTablet) {
      return 2;
    }
    return visibleItems;
  }, [isMobile, isTablet]);

  const [currentIndex, setCurrentIndex] = useState(numberToShow);
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const goToPrevious = () => {
    const isOnEdgeBackward = currentIndex === 0;

    if (isOnEdgeBackward) {
      setIsLoading(true);
    }

    if (currentIndex > 0) setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const goToNext = () => {
    const isOnEdgeForward = currentIndex > pageSize;

    if (isOnEdgeForward) {
      setIsLoading(true);
    }

    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    if (currentIndex === numberToShow || currentIndex === pageSize) {
      setIsTransitioning(true);
    }
  }, [currentIndex, setIsTransitioning, numberToShow]);

  const handleTransitionEnd = useCallback(() => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(pageSize);
    }
    if (currentIndex === pageSize + numberToShow) {
      setIsTransitioning(false);
      setCurrentIndex(numberToShow);
    }

    setIsLoading(false);
  }, [currentIndex, numberToShow]);

  return {
    isLoading,
    numberToShow,
    isTransitioning,
    currentIndex,
    goToPrevious,
    goToNext,
    setCurrentIndex,
    handleTransitionEnd,
  };
};
