import { Link } from 'gatsby';
import React, { ReactElement } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import PictureCarousel from '../components/PictureCarousel';
import MainLayout from '../layouts';

const IndexPage = (): ReactElement => (
  <MainLayout>
    <Jumbotron>
      <h2>Stores, enseignes fermetures et aménagements de terrasses</h2>
      <hr />
      <p className="lead">
        Spécialiste dans le domaine des stores, enseignes et aménagements de
        terrasses, Bleu Ciel Fermeture accompagne les entreprises et
        professionnels de différents secteurs en Ile-de-France:
      </p>
      <ul className="lead">
        <li>Cafés, hôtels, restaurants et établissements de prestige</li>
        <li>Administrations, collectivités, architectes et prescripteurs</li>
        <li>Magasins et commerces de proximité</li>
      </ul>

      <Link to="/realisations" className="btn btn-primary btn-lg">
        Voir nos réalisations
      </Link>
    </Jumbotron>

    <PictureCarousel
      pictureSlides={[
        {
          url: require('./__fixtures__/samples/L_ile_aux_singes/4.jpg'),
          description: 'Aménagements de terrasse et façade',
        },
        {
          url: require('./__fixtures__/samples/Le_Jean_Mouloud/9.jpg'),
          description: 'Stores extérieurs/ intérieurs',
        },
        {
          url: require('./__fixtures__/samples/Le_Jean_Mouloud/4.jpg'),
          description: 'Lambrequins lumineux',
        },
        {
          url: require('./__fixtures__/samples/Le_Faubourg/4.jpg'),
          description: 'Rideaux métalliques',
        },
        {
          url: require('./__fixtures__/samples/Le_canon_des_gobelins/4.jpg'),
          description: 'Réentoilage de stores',
        },
      ]}
    />
  </MainLayout>
);

export default IndexPage;
