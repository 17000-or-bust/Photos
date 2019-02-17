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
        <LastSmallImg onClick={event => props.openModal(event)} src={props.photos[8].image_url} alt="" />
        <LastSmallOverlay onClick={event => props.openModal(event)}>
          <TextDiv>
            +
            {' '}
            {props.photos.length - 9}
            {' '}
            more
          </TextDiv>
        </LastSmallOverlay>
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

const LastSmallImg = styled.img`
  height: 90.84px;
  width: 90.84px;
  margin: 0 2px;
  z-index: 1;
  position: absolute;
`;

const LastSmallOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  height: 90.84px;
  width: 90.84px;
  margin: 0 2px;
  cursor: pointer;
  z-index: 2;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8)
  }
`;

const TextDiv = styled.div`
  position: absolute;
  top: 40%;
  left: 20%;
  font-size: 12px;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  color: white;
`;
