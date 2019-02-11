import React from 'react';
import styled from 'styled-components';

const Photo = props => (
  <ImgSpan>
    <Img src={props.photo} alt="" />
  </ImgSpan>
);

export default Photo;

const Img = styled.img`
  display: inline-block;
  border: 2px solid gray;
  transition: all .2s ease-out;
`;

const ImgSpan = styled.span`
  ${Img}: hover {
    transform: scale(1.05);
    opacity: 1;
    cursor: pointer;
  }
`;
