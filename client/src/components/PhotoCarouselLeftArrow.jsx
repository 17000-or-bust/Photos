import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PhotoCarouselLeftArrow = () => (
  <LeftArrowDiv>
    <FontAwesomeIcon icon="angle-left" />
  </LeftArrowDiv>
);

const LeftArrowDiv = styled.div`
  color: #91949a;
  font-size: 3em;
  position: absolute;
  top: 47%;
  left: 0;
  font-family: icons;
  font-style: normal;
  font-weight: normal;
  outline: none;
`;

export default PhotoCarouselLeftArrow;
