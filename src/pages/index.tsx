import React, { ReactElement } from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

import PictureCarousel from '../components/PictureCarousel';
import IndexLayout from '../layouts';

const IndexPage = (): ReactElement => (
  <IndexLayout>
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p>
        <Button color="primary" size="lg" role="button">
          Learn more
        </Button>
      </p>
    </Jumbotron>

    <PictureCarousel
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
