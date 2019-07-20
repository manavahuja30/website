import React, { ReactElement, useState } from 'react';
import Carousel, { CarouselProps } from 'react-bootstrap/Carousel';

interface Props extends CarouselProps {
  pictures: string[];
}

const PictureCarousel = ({
  pictures,
  ...carouselProps
}: Props): ReactElement => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number): void => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} {...carouselProps}>
      {pictures.map(
        (picture: string, index: number): ReactElement => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={picture}
              alt={`Picture ${index}`}
            />
          </Carousel.Item>
        ),
      )}
    </Carousel>
  );
};

export default PictureCarousel;
