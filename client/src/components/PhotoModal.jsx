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
      currentImage: 0,
    };
    this.handlePreviousImageClick = this.handlePreviousImageClick.bind(this);
    this.handleNextImageClick = this.handleNextImageClick.bind(this);
  }

  handlePreviousImageClick(event) {
    event.preventDefault();
    this.setState(prevPhoto => ({
      currentImage: prevPhoto.currentImage - 1,
    }));
  }

  handleNextImageClick(event) {
    event.preventDefault();

    this.setState(prevPhoto => ({
      currentImage: prevPhoto.currentImage + 1,
    }));
  }


  render() {
    const { closeModal, show } = this.props;
    const { images } = this.state;
    const showHide = show ? 'photo-modal block' : 'photo-modal none';

    return (
      <div className={showHide}>
        <InnerModal>
          <ImgWrapper style={{ transform: 'translateX(100px)' }}>
            {
              images.map((image, i) => (
                <PhotoCarousel image={image} key={i} />
              ))
            }
          </ImgWrapper>
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

const ImgWrapper = styled.div`
  transition: 'transform ease-out 0.45s'
`;

export default PhotoModal;
