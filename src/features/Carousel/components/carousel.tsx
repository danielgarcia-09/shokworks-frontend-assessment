import { useMemo } from "react";
import arrowLeft from "../../../assets/images/arrow-left.png";
import arrowRight from "../../../assets/images/arrow-right.png";
import "../styles.css";
import { useStyle } from "../../../hooks/useStyle";
import { useNews } from "../../../hooks/useNews";
import { CarouselItem } from "./carousel-item";

export const Carousel = () => {
  const { clonedStartNews, clonedEndNews, currentNews } = useNews();
  const {
    isLoading,
    numberToShow,
    isTransitioning,
    currentIndex,
    goToPrevious,
    goToNext,
    handleTransitionEnd,
  } = useStyle();

  const prevNews = useMemo(() => {
    if (!clonedStartNews.length) return null;

    return clonedStartNews.map((item, index) => (
      <CarouselItem
        key={`${index}-start`}
        {...{ ...item, currentIndex, numberToShow }}
      />
    ));
  }, [clonedStartNews, currentIndex, numberToShow]);

  const nextNews = useMemo(() => {
    if (!clonedEndNews.length) return null;

    return clonedEndNews.map((item, index) => (
      <CarouselItem
        key={`${index}-end`}
        {...{ ...item, currentIndex, numberToShow }}
      />
    ));
  }, [clonedEndNews, currentIndex, numberToShow]);

  const mainNews = useMemo(() => {
    if (!currentNews.length) return null;

    return currentNews.map((item, index) => (
      <CarouselItem key={index} {...{ ...item, currentIndex, numberToShow }} />
    ));
  }, [currentNews, currentIndex, numberToShow]);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-header">
        <h1>What is the</h1>
        <h2>Specialty Of Us?</h2>
      </div>

      <div className="carousel-content">
        <div
          className="carousel-items-container"
          style={{
            transform: `translateX(-${currentIndex * (100 / numberToShow)}%)`,
            transition: !isTransitioning ? "none" : undefined,
          }}
          onTransitionEnd={() => handleTransitionEnd()}
        >
          {prevNews}
          {mainNews}
          {nextNews}
        </div>
      </div>

      <div className="carousel-navigation">
        <button
          disabled={isLoading}
          onClick={goToPrevious}
          className="nav-button"
        >
          <img src={arrowLeft} alt="arrow-left" />
        </button>
        <button disabled={isLoading} onClick={goToNext} className="nav-button">
          <img src={arrowRight} alt="arrow-right" />
        </button>
      </div>
    </div>
  );
};
