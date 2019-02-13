import React from 'react';
import styled from 'styled-components';

const PhotoCarousel = props => (
  <CarouselDiv style={{
    backgroundImage: `url(${props.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
  />
);

const CarouselDiv = styled.div`
  position: absolute;
  top: 5%;
  left: 35%;
  height: 600px;
  width: 600px;
  display: block;
  transition: 'transform ease-out 0.45s';
`;

export default PhotoCarousel;
