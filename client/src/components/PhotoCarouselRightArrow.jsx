import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PhotoCarouselRightArrow = () => (
  <RightArrowDiv>
    <FontAwesomeIcon icon="angle-right" />
  </RightArrowDiv>
);

const RightArrowDiv = styled.div`
  color: #91949a;
  font-size: 3em;
  position: absolute;
  top: 47%;
  right: 0;
  font-family: icons;
  font-style: normal;
  font-weight: normal;
  outline: none;
`;

export default PhotoCarouselRightArrow;
