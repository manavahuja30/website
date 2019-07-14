import styled from 'styled-components';

const SCALE = 0.25;
const LOGO_WIDTH = SCALE * (1200 / 16);
const ASPECT_RATIO = 300 / 1200;

export const StyledHeader = styled.header`
  padding: 1rem 0;
`;

export const Logo = styled.div`
  width: ${LOGO_WIDTH}rem;
  height: ${LOGO_WIDTH * ASPECT_RATIO}rem;
  background: url(${require('./__fixtures__/InlineLogo@4x.png')});
  background-size: cover;
  margin-bottom: 1rem;
`;
