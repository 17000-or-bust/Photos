import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PhotoCarouselRightArrow = ({ imageIndex, images, nextImg }) => {
  const arrowColor = imageIndex === images.length - 1 ? '#333333' : '#91949a';

  return (
    <RightArrowDiv>
      <FontAwesomeIcon onClick={nextImg} icon="angle-right" style={{ color: arrowColor }} />
    </RightArrowDiv>
  );
};

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
