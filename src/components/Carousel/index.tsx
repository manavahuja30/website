import { H5 } from '@bootstrap-styled/v4';
import React, { ReactElement } from 'react';

import { CarouselInner, Picture } from './styledComponents';

type Props = {
  id: string;
  caption: string;
  pictures: string[];
};

const Carousel = ({ id, caption, pictures }: Props): ReactElement => {
  const dataTarget = `#${id}`;

  return (
    <div id={id} className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {pictures.map(
          (__: string, index: number): ReactElement => (
            <li
              className={index === 0 ? 'active' : ''}
              data-target={dataTarget}
              data-slide-to={index}
              key={index}
            />
          ),
        )}
      </ol>

      <CarouselInner className="carousel-inner">
        {pictures.map(
          (url: string, index: number): ReactElement => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <Picture
                className="d-block w-100"
                src={url}
                alt={`Slide ${index}`}
              />
            </div>
          ),
        )}
      </CarouselInner>

      <a
        className="carousel-control-prev"
        href={dataTarget}
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href={dataTarget}
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>

      <div className="carousel-caption d-none d-md-block">
        <H5>{caption}</H5>
      </div>
    </div>
  );
};

export default Carousel;
