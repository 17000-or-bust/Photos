import React from 'react';
import styled from 'styled-components';

const Photo = props => (
  <span>
    <SpanImg src={props.photo} alt="" />
  </span>
);

export default Photo;

const SpanImg = styled.img`
  display: inline-block;
  border: 2px solid gray;
  transition: all .2s ease-out;
`;
