import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PhotoCarouselLeftArrow = ({ imageIndex, prevImg }) => {
  const arrowColor = imageIndex === 0 ? '#333333' : '#91949a';

  return (
    <LeftArrowDiv>
      <FontAwesomeIcon onClick={prevImg} icon="angle-left" style={{ color: arrowColor }} />
    </LeftArrowDiv>
  );
};

const LeftArrowDiv = styled.div`
  &:hover {
    color: #6f737b;
  }
  font-size: 2em;
  position: absolute;
  top: 50%;
  left: 0;
  font-family: icons;
  font-style: normal;
  outline: none;
`;

export default PhotoCarouselLeftArrow;
