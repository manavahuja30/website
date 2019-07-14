import React, { ReactElement } from 'react';
import { Jumbotron, H1, P, Hr, Button } from '@bootstrap-styled/v4';

import Carousel from '../components/Carousel';
import IndexLayout from '../layouts';

const IndexPage = (): ReactElement => (
  <IndexLayout>
    <Jumbotron>
      <H1 className="display-3">Hello, world!</H1>
      <P lead>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </P>
      <Hr className="my-4" />
      <P>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </P>
      <P lead>
        <Button color="primary" size="lg" role="button">
          Learn more
        </Button>
      </P>
    </Jumbotron>

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
