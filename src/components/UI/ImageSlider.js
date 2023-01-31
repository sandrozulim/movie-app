import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./ImageSlider.scss";

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="slider">
        <div className="slider__slide">
          <img
            className="slider__img"
            src={images[currentIndex].image}
            alt={images[currentIndex].title}
          ></img>
        </div>

        <GrFormPrevious
          onClick={goToPreviousSlide}
          className="slider__arrow slider__arrow--previous"
        />
        <GrFormNext
          onClick={goToNextSlide}
          className="slider__arrow slider__arrow--next"
        />
      </div>
    </>
  );
}

export default ImageSlider;
