import React from 'react';
import styled from 'styled-components';

const PhotoDisplayEntry = props => (
  <ImgContainer>
    <span>
      <div>
        <MediumImg onClick={event => props.openModal(event)} src={props.photos[0].image_url} alt="" />
      </div>
      <div>
        <MediumImg onClick={event => props.openModal(event)} src={props.photos[1].image_url} alt="" />
      </div>
    </span>
    <span>
      <LargeImg onClick={event => props.openModal(event)} src={props.photos[2].image_url} alt="" />
    </span>
    <span>
      <div>
        <SmallImg onClick={event => props.openModal(event)} src={props.photos[3].image_url} alt="" />
      </div>
      <div>
        <SmallImg onClick={event => props.openModal(event)} src={props.photos[4].image_url} alt="" />
      </div>
      <div>
        <SmallImg onClick={event => props.openModal(event)} src={props.photos[5].image_url} alt="" />
      </div>
    </span>
    <span>
      <div>
        <SmallImg onClick={event => props.openModal(event)} src={props.photos[6].image_url} alt="" />
      </div>
      <div>
        <SmallImg onClick={event => props.openModal(event)} src={props.photos[7].image_url} alt="" />
      </div>
      <div>
        <SmallImg onClick={event => props.openModal(event)} src={props.photos[8].image_url} alt="" />
      </div>
    </span>
  </ImgContainer>

);

export default PhotoDisplayEntry;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

const MediumImg = styled.img`
  height: 138.77px;
  width: 138.77px;
`;

const LargeImg = styled.img`
  height: 281.53px;
  width: 280.53px;
  margin: 0 3px;
`;

const SmallImg = styled.img`
  height: 90.84px;
  width: 90.84px;
  margin: 0 2px;
`;
