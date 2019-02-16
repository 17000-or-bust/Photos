import React from 'react';
import styled from 'styled-components';
import PhotoDisplayEntry from './PhotoDisplayEntry';

const PhotoDisplay = (props) => {
  const { photos, openModal, closeModal } = props;
  console.log('photos', photos);

  return (
    <PhotoDiv>
      <PhotoDisplayEntry photos={photos} openModal={openModal} closeModal={closeModal} />
    </PhotoDiv>
  );
};

export default PhotoDisplay;

const PhotoDiv = styled.div`
  height: auto;
  padding: 5px;
  // overflow: hidden;
  display: block;
  box-sizing: border-box;
  position: relative;
`;
