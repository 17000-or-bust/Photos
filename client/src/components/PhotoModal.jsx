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
      images: this.props.photos,
      currentImageIndex: 0,
      randomId: this.props.randomId,
    };
    this.handlePreviousImageClick = this.handlePreviousImageClick.bind(this);
    this.handleNextImageClick = this.handleNextImageClick.bind(this);
  }

  componentDidMount() {
    this.getImagesForBanner(this.state.randomId);
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

  render() {
    const {
      closeModal, show, showFlag, openFlag, closeFlag,
    } = this.props;
    const { currentImageIndex, images } = this.state;
    const showHide = show ? 'photo-modal block' : 'photo-modal none';

    return (
      <div className={showHide}>
        <InnerModal>
          <Wrapper>
            <PhotoCarouselLeftArrow prevImg={this.handlePreviousImageClick} />
            <PhotoCarousel openFlag={openFlag} closeFlag={closeFlag} showFlag={showFlag} url={images[currentImageIndex].image_url} caption={images[currentImageIndex].caption} username={images[currentImageIndex].username} date={moment(images[currentImageIndex].date_posted).format('LL')} />
            <PhotoCarouselRightArrow nextImg={this.handleNextImageClick} />
          </Wrapper>
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
