import styled from 'styled-components';

export const FOOTER_HEIGHT = 8;

export const FooterContainer = styled.footer`
  width: 100%;
  height: ${FOOTER_HEIGHT}rem;
  display: flex;
  align-items: center;
  background-color: rgb(248, 249, 250);
  position: fixed;
  bottom: 0;
`;

export const SocialContainer = styled.div`
  > a {
    margin-right: 0.5rem;
  }
`;
