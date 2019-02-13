import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhotoCarousel from './PhotoCarousel';
import PhotoCarouselRightArrow from './PhotoCarouselRightArrow';
import PhotoCarouselLeftArrow from './PhotoCarouselLeftArrow';
import fakeDataImg from '../../fakeImgData';

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: fakeDataImg,
      currentImageIndex: 0,
    };
    this.handlePreviousImageClick = this.handlePreviousImageClick.bind(this);
    this.handleNextImageClick = this.handleNextImageClick.bind(this);
  }

  handlePreviousImageClick(event) {
    event.preventDefault();
    const { currentImageIndex } = this.state;

    this.setState({
      currentImageIndex: currentImageIndex !== 0 ? currentImageIndex - 1 : 0,
    });
  }

  handleNextImageClick(event) {
    event.preventDefault();
    const { currentImageIndex, images } = this.state;

    this.setState({
      currentImageIndex: currentImageIndex !== images.length - 1 ? currentImageIndex + 1 : images.length - 1,
    });
  }

  render() {
    const { closeModal, show } = this.props;
    const { images, currentImageIndex } = this.state;
    const showHide = show ? 'photo-modal block' : 'photo-modal none';

    return (
      <div className={showHide}>
        <InnerModal>
          <PhotoCarouselLeftArrow prevImg={this.handlePreviousImageClick} />
          <PhotoCarousel url={images[currentImageIndex]} />
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
