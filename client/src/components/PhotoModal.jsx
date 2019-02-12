import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhotoCarousel from './PhotoCarousel';
import PhotoCarouselRightArrow from './PhotoCarouselRightArrow';
import PhotoCarouselLeftArrow from './PhotoCarouselLeftArrow';

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handlePreviousImageClick = this.handlePreviousImageClick.bind(this);
    this.handleNextImageClick = this.handleNextImageClick.bind(this);
  }

  handlePreviousImageClick(event) {
    event.preventDefault();
    console.log('GO BACK');
  }

  handleNextImageClick(event) {
    event.preventDefault();
    console.log('NEXT');
  }


  render() {
    const { closeModal, show } = this.props;
    const showHide = show ? 'photo-modal block' : 'photo-modal none';

    return (
      <div className={showHide}>
        <InnerModal>
          <PhotoCarousel />

          <PhotoCarouselLeftArrow prevImg={this.handlePreviousImageClick} />
          <PhotoCarouselRightArrow nextImg={this.handleNextImageClick} />

        </InnerModal>
        <ExitButton>
          <FontAwesomeIcon type="button" onClick={closeModal} icon="times" />
        </ExitButton>
      </div>
    );
  }
}

const InnerModal = styled.section`
  position: fixed;
  background: lightyellow;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ExitButton = styled.div`
  color: #6f737b;
  font-size: 2em;
  position: absolute;
  top: 2%;
  right: 2%;
  font-family: icons;
  font-style: normal;
  font-weight: normal;
  outline: none;
`;

export default PhotoModal;
