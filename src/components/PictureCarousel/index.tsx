import React, { ReactElement, useState } from 'react';
import Carousel, { CarouselProps } from 'react-bootstrap/Carousel';

import { Picture } from './styledComponents';

export type PictureSlide = {
  url: string;
  description?: string;
};

interface Props extends CarouselProps {
  pictureSlides: PictureSlide[];
}

const PictureCarousel = ({
  pictureSlides,
  ...carouselProps
}: Props): ReactElement => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number): void => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} {...carouselProps}>
      {pictureSlides.map(
        (pictureSlide: PictureSlide, index: number): ReactElement => (
          <Carousel.Item key={index}>
            <Picture
              className="d-block"
              src={pictureSlide.url}
              alt={`Picture ${index}`}
            />
            {pictureSlide.description && (
              <Carousel.Caption>
                <h3>{pictureSlide.description}</h3>
              </Carousel.Caption>
            )}
          </Carousel.Item>
        ),
      )}
    </Carousel>
  );
};

export default PictureCarousel;
