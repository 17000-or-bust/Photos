import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PhotoCarouselLeftArrow = props => (
  <LeftArrowDiv>
    <FontAwesomeIcon onClick={props.prevImg} icon="angle-left" />
  </LeftArrowDiv>
);

const LeftArrowDiv = styled.div`
  color: #91949a;
  &:hover {
    color: #6f737b;
  }
  font-size: 3em;
  position: absolute;
  top: 47%;
  left: 0;
  font-family: icons;
  font-style: normal;
  outline: none;
`;

export default PhotoCarouselLeftArrow;
