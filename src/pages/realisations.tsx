import React, { ReactElement } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import PictureCarousel from '../components/PictureCarousel';
import MainLayout from '../layouts';

const RealisationsPage = (): ReactElement => (
  <MainLayout>
    <h2>Nos réalisations</h2>
    <br />

    <Row>
      <Col md={6} sm={12}>
        <h5>L'ile aux singes</h5>
        <PictureCarousel
          interval={null}
          pictureSlides={[
            { url: require('./__fixtures__/samples/L_ile_aux_singes/1.jpg') },
            { url: require('./__fixtures__/samples/L_ile_aux_singes/2.jpg') },
            { url: require('./__fixtures__/samples/L_ile_aux_singes/3.jpg') },
            { url: require('./__fixtures__/samples/L_ile_aux_singes/4.jpg') },
            { url: require('./__fixtures__/samples/L_ile_aux_singes/5.jpg') },
            { url: require('./__fixtures__/samples/L_ile_aux_singes/6.jpg') },
          ]}
        />
      </Col>
      <Col md={6} sm={12}>
        <h5>Le canon des gobelins</h5>
        <PictureCarousel
          interval={null}
          pictureSlides={[
            {
              url: require('./__fixtures__/samples/Le_canon_des_gobelins/1.jpg'),
            },
            {
              url: require('./__fixtures__/samples/Le_canon_des_gobelins/2.jpg'),
            },
            {
              url: require('./__fixtures__/samples/Le_canon_des_gobelins/3.jpg'),
            },
            {
              url: require('./__fixtures__/samples/Le_canon_des_gobelins/4.jpg'),
            },
            {
              url: require('./__fixtures__/samples/Le_canon_des_gobelins/5.jpg'),
            },
            {
              url: require('./__fixtures__/samples/Le_canon_des_gobelins/6.jpg'),
            },
          ]}
        />
      </Col>
    </Row>

    <Row>
      <Col md={6} sm={12}>
        <h5>Le faubourg</h5>
        <PictureCarousel
          interval={null}
          pictureSlides={[
            { url: require('./__fixtures__/samples/Le_Faubourg/1.jpg') },
            { url: require('./__fixtures__/samples/Le_Faubourg/2.jpg') },
            { url: require('./__fixtures__/samples/Le_Faubourg/3.jpg') },
            { url: require('./__fixtures__/samples/Le_Faubourg/4.jpg') },
          ]}
        />
      </Col>
      <Col md={6} sm={12}>
        <h5>Le Jean Mouloud</h5>
        <PictureCarousel
          interval={null}
          pictureSlides={[
            { url: require('./__fixtures__/samples/Le_Jean_Mouloud/1.jpg') },
            { url: require('./__fixtures__/samples/Le_Jean_Mouloud/2.jpg') },
            { url: require('./__fixtures__/samples/Le_Jean_Mouloud/3.jpg') },
            { url: require('./__fixtures__/samples/Le_Jean_Mouloud/4.jpg') },
            { url: require('./__fixtures__/samples/Le_Jean_Mouloud/5.jpg') },
            { url: require('./__fixtures__/samples/Le_Jean_Mouloud/6.jpg') },
            { url: require('./__fixtures__/samples/Le_Jean_Mouloud/7.jpg') },
            { url: require('./__fixtures__/samples/Le_Jean_Mouloud/8.jpg') },
            { url: require('./__fixtures__/samples/Le_Jean_Mouloud/9.jpg') },
          ]}
        />
      </Col>
    </Row>
  </MainLayout>
);

export default RealisationsPage;
