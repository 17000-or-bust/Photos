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
  top: 0;
  left: 30%;
  height: 500px;
  width: 500px;
  display: inline-block;
  transition: 'transform ease-out 0.45s';
`;

export default PhotoCarousel;
