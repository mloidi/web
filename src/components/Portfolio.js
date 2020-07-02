import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { device, SectionTitle } from './Elements';

const Container = styled.div`
  padding: 10px 20px;
  font-family: 'Cutive Mono', monospace;
  @media ${device.laptop} {
    padding: 10px 200px;
  }
`;

export const Portfolio = () => {
  return (
    <Container>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <SectionTitle>Portfolio</SectionTitle>
    </Container>
  );
};