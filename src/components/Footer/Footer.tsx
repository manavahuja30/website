import React, { ReactElement } from 'react';
import Container from 'react-bootstrap/Container';

import { FooterContainer, SocialContainer } from './styledComponents';

type Props = {
  mailTo: string;
};

const Footer = ({ mailTo }: Props): ReactElement => (
  <FooterContainer>
    <Container>
      <p>© Bleu ciel Fermeture 2019</p>
      <SocialContainer>
        <a href="https://www.facebook.com/Bleu-Ciel-Fermeture-379301312413490/">
          <i className="fa fa-facebook-square fa-3x social" />
        </a>
        <a href="https://www.instagram.com/?hl=fr">
          <i className="fa fa-instagram fa-3x social" />
        </a>
        <a href={`mailto:${mailTo}`}>
          <i className="fa fa-envelope-square fa-3x social" />
        </a>
      </SocialContainer>
    </Container>
  </FooterContainer>
);

export default Footer;
