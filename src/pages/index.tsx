import React, { ReactElement } from 'react';

import Carousel from '../components/Carousel';
import IndexLayout from '../layouts';

const IndexPage = (): ReactElement => (
  <IndexLayout>
    <Carousel
      id="carousel1"
      caption="L'île aux singes"
      pictures={[
        require('./__fixtures__/samples/L_ile_aux_singes/1.jpg'),
        require('./__fixtures__/samples/L_ile_aux_singes/2.jpg'),
        require('./__fixtures__/samples/L_ile_aux_singes/3.jpg'),
        require('./__fixtures__/samples/L_ile_aux_singes/4.jpg'),
        require('./__fixtures__/samples/L_ile_aux_singes/5.jpg'),
        require('./__fixtures__/samples/L_ile_aux_singes/6.jpg'),
      ]}
    />
  </IndexLayout>
);

export default IndexPage;
