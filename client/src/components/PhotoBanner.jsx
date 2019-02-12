import React from 'react';
import styled, { keyframes } from 'styled-components';
import Photo from './Photo';

class PhotoBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <PhotoDiv>
        <PhotoInnerDiv>
          {this.props.photos.map(photo => (
            <Photo photo={photo} key={photo.id} />
          ))}
        </PhotoInnerDiv>
      </PhotoDiv>
    );
  }
}

const scroll = keyframes`
  {
    0% { left: 0; }
    100% { left: -100%; }
  }
`;

const PhotoInnerDiv = styled.div`
  display: block;
  width: 200%;
  margin: auto;
  padding: .75em;
  position: absolute;
  animation: ${scroll} 30s linear infinite;
`;

const PhotoDiv = styled.div`
  display: inline-block;
  height: 19.53em;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  margin: auto;
  ${PhotoInnerDiv}: hover {
    animation-play-state: paused;
  }
`;

export default PhotoBanner;
