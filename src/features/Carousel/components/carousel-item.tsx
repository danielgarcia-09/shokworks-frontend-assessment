import type { News } from "../../../hooks/useNews";

interface CarouselItemProps extends News {
  numberToShow: number;
}

export const CarouselItem = ({
  description,
  title,
  urlToImage,
  numberToShow,
}: CarouselItemProps) => {
  return (
    <div
      className="carousel-item-container-wrapper"
      style={{ width: `calc(100% / ${numberToShow})` }}
    >
      <div className="carousel-item-container">
        <div className="carousel-item-circle">
          <img src={urlToImage} alt={title} className="carousel-item-image" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
