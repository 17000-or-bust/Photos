import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleRight, faAngleLeft, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import SaveThisRestaurantButton from './SaveThisRestaurantButton';
import PhotoBanner from './PhotoBanner';
import PhotoModal from './PhotoModal';
import PhotoDisplay from './PhotoDisplay';
import ajax from '../lib/ajax';

library.add(faAngleRight);
library.add(faAngleLeft);
library.add(faTimes);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
      randomId: Math.floor(Math.random() * 100) + 1,
      displayPhoto: 'none',
      displayFlag: 'none',
      clickedImageIndex: 0,
    };
    this.openPhotoModal = this.openPhotoModal.bind(this);
    this.closePhotoModal = this.closePhotoModal.bind(this);
    this.openFlagModal = this.openFlagModal.bind(this);
    this.closeFlagModal = this.closeFlagModal.bind(this);
  }

  componentDidMount() {
    this.getPhotosForBanner(this.state.randomId);
  }

  getPhotosForBanner(id) {
    ajax.getPhotos(id, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({
        photos: data,
      });
    });
  }

  openPhotoModal(event) {
    this.setState({
      displayPhoto: 'block',
      clickedImageIndex: parseInt(event.target.dataset.indexNumber),
    });
  }

  closePhotoModal() {
    this.setState({
      displayPhoto: 'none',
    });
  }

  openFlagModal(index) {
    this.setState({
      displayFlag: 'block',
      clickedImageIndex: index,
    });
  }

  closeFlagModal() {
    this.setState({
      displayFlag: 'none',
    });
  }

  render() {
    const {
      photos, randomId, displayPhoto, displayFlag, clickedImageIndex,
    } = this.state;

    return (
      <div>
        <NavPlaceholder />
        <MainBannerDiv>

          <PhotoBanner photos={photos} openModal={this.openPhotoModal} closeModal={this.closePhotoModal} />

          <SaveThisRestaurantButton />

        </MainBannerDiv>

        <OverviewPlaceholder />
        <PhotoContainer>
          <NumberOfPhotos>
            {photos.length}
            {' '}
            Photos
          </NumberOfPhotos>
          <Display>
            <PhotoDisplay photos={photos} openModal={this.openPhotoModal} closeModal={this.closePhotoModal} />
          </Display>
        </PhotoContainer>
        <PhotoModal randomId={randomId} photos={photos} closeModal={this.closePhotoModal} openFlag={this.openFlagModal} closeFlag={this.closeFlagModal} displayPhoto={displayPhoto} displayFlag={displayFlag} clickedImageIndex={clickedImageIndex} />
      </div>
    );
  }
}

export default App;

const OverviewPlaceholder = styled.div`
  height: 10rem;
  margin: 0 200px;
  padding: 16px
  width: 570px;
  background: url(https://via.placeholder.com/600x200?text=Restaurant+Overview+Placeholder);
`;

const NavPlaceholder = styled.div`
  height: 5rem;
  background: url(https://via.placeholder.com/1300x80?text=Restaurant+NavBar+Placeholder);
`;

const MainBannerDiv = styled.div`
  margin: 10px;
  position: relative;
`;

const PhotoContainer = styled.div`
  margin-left: 200px;
  width: 620px;
  height: auto;
`;

const Display = styled.div`
  display: block;
  width: auto;
  height: auto;
`;

const NumberOfPhotos = styled.h2`
  font-family: 'Istok Web', sans-serif;
  font-size: 1.35em;
  font-weight: 600;
  line-height: 1.5em;
  color: #2d333f
  padding-bottom: .5em;
  border-bottom: 1px solid #d8d9db;
  margin-bottom: .75em;
  display: flex;
  justify-content: space-between;
`;
