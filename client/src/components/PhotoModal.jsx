import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import PhotoCarousel from './PhotoCarousel';
import PhotoCarouselRightArrow from './PhotoCarouselRightArrow';
import PhotoCarouselLeftArrow from './PhotoCarouselLeftArrow';
import ajax from '../lib/ajax';

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [{}],
      currentImageIndex: this.props.clickedImageIndex,
      randomId: this.props.randomId,
      currentKey: '',
    };
    this.handlePreviousImageClick = this.handlePreviousImageClick.bind(this);
    this.handleNextImageClick = this.handleNextImageClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    this.getImagesForBanner(this.state.randomId);
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentImageIndex: nextProps.clickedImageIndex
    })
  }

  getImagesForBanner(id) {
    ajax.getPhotos(id, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({
        images: data,
      });
    });
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

  handleKeyPress(event) {
    event.preventDefault();
    this.setState({
      currentKey: event.keyCode,
    });
    const { currentKey } = this.state;
    if (currentKey === 39) {
      this.handleNextImageClick(event);
    } else if (currentKey === 37) {
      this.handlePreviousImageClick(event);
    } else if (currentKey === 27) {
      this.props.closeModal();
    }
  }

  render() {
    const {
      closeModal, openFlag, closeFlag, displayPhoto, displayFlag,
    } = this.props;
    const { currentImageIndex, images } = this.state;

    return (
      <ModalPhotoDiv style={{ display: displayPhoto }}>
        <InnerModal>
          <Wrapper>
            <PhotoCarouselLeftArrow prevImg={this.handlePreviousImageClick} />
            <PhotoCarousel openFlag={openFlag} closeFlag={closeFlag} displayFlag={displayFlag} url={images[currentImageIndex].image_url} caption={images[currentImageIndex].caption} username={images[currentImageIndex].username} date={moment(images[currentImageIndex].date_posted).format('LL')} imageIndex={currentImageIndex} />
            <PhotoCarouselRightArrow nextImg={this.handleNextImageClick} />
          </Wrapper>
        </InnerModal>

        <ExitButton>
          <FontAwesomeIcon type="button" onClick={closeModal} icon="times" />
        </ExitButton>
      </ModalPhotoDiv>
    );
  }
}

const InnerModal = styled.section`
  position: fixed;
  width: 660px;
  height: 645px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  display: block;
  margin: 35px;
`;

const ModalPhotoDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
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
