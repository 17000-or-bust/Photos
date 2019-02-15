import React from 'react';
import styled from 'styled-components';
import PhotoDisplayEntry from './PhotoDisplayEntry';

const PhotoDisplay = (props) => {
  const { photos, openModal, closeModal } = props;
  console.log('photos', photos);

  return (
    <PhotoDiv>
      {photos.map(photo => (
        <PhotoDisplayEntry photo={photo} key={photo.id} openModal={openModal} closeModal={closeModal} />
      ))}
    </PhotoDiv>
  );
};

export default PhotoDisplay;

const PhotoDiv = styled.div`
  margin-block: 0;
  display: inline-block;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
`;
