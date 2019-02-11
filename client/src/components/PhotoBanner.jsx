import React from 'react';
import styled from 'styled-components';
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
        {this.props.photos.map(photo => (
          <Photo photo={photo} />
        ))}
      </PhotoDiv>
    );
  }
}

export default PhotoBanner;

const PhotoDiv = styled.div`
  display: inline-block;
  height: 288px;
  width: 100%;
  border: 2px solid #eee;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  margin: 200px auto;
`;
