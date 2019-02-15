import React from 'react';
import styled from 'styled-components';

const PhotoDisplayEntry = props => (
  <span>
    <Img onClick={event => props.openModal(event)} src={props.photo.image_url} alt="" />
  </span>
);


export default PhotoDisplayEntry;

const Img = styled.img`
  display: inline-block;
  border: 1px solid #fff;
  height: auto;
  vertical-align: middle;
  overflow: hidden;
  transition: all .2s ease-out;
`;
