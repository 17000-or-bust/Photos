import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PhotoCarouselRightArrow = props => (
  <RightArrowDiv>
    <FontAwesomeIcon onClick={props.nextImg} icon="angle-right" />
  </RightArrowDiv>
);

const RightArrowDiv = styled.div`
  color: #91949a;
  &:hover {
    color: #6f737b;
  }
  font-size: 2em;
  position: absolute;
  top: 50%;
  right: 0;
  font-family: icons;
  font-style: normal;
  outline: none;
`;

export default PhotoCarouselRightArrow;
