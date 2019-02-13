import React from 'react';
import styled from 'styled-components';

const PhotoCarousel = props => (
  <CarouselDiv>
    <CurrentImg
      src={props.image}
      alt=""
    />
  </CarouselDiv>

);

const CarouselDiv = styled.div`
  position: absolute;
  top: 20%
  left: 20%
  display: block;
`;

const CurrentImg = styled.img`
  display: block;
  height: 600px;
  width: 600px;
`;

export default PhotoCarousel;
