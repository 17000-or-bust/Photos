import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight, faAngleLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
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
      photos: [{}],
      showModal: false,
      randomId: Math.floor(Math.random() * 100) + 1,
    };
    this.openPhotoModal = this.openPhotoModal.bind(this);
    this.closePhotoModal = this.closePhotoModal.bind(this);
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

  openPhotoModal() {
    this.setState({
      showModal: true,
    });
  }

  closePhotoModal() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    const { photos, showModal, randomId } = this.state;

    return (
      <div>
        <NavPlaceholder />
        <MainBannerDiv>

          <PhotoBanner photos={photos} openModal={this.openPhotoModal} closeModal={this.closePhotoModal} isOpen={showModal} />

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
            <PhotoDisplay photos={photos} openModal={this.openPhotoModal} closeModal={this.closePhotoModal} isOpen={showModal} />
          </Display>
        </PhotoContainer>
        <PhotoModal randomId={randomId} photos={photos} show={showModal} closeModal={this.closePhotoModal} />
      </div>
    );
  }
}

export default App;

const OverviewPlaceholder = styled.div`
  height: 30rem;
  margin: 0 154px;
  padding: 16px
  width: 1000px;
  background: url(https://via.placeholder.com/1300x500?text=Restaurant+Overview+Placeholder);
`;

const NavPlaceholder = styled.div`
  height: 10rem;
  background: url(https://via.placeholder.com/1300x177?text=Restaurant+NavBar+Placeholder);
`;

const MainBannerDiv = styled.div`
  margin: 10px;
  position: relative;
`;

const PhotoContainer = styled.div`
  margin: 0 154px 154px 154px;
  padding: 16px
  width: 1000px;
  height: auto;
`;

const Display = styled.div`
  display: block;
  width: auto;
  height: auto;
`;

const NumberOfPhotos = styled.h2`
  font-family: 'Istok Web', sans-serif;
  font-size: 2em;
  font-weight: 700;
  line-height: 2em;
  color: #2d333f
  padding-bottom: 1.5em;
  border-bottom: 1px solid #d8d9db;
  margin-bottom: 1.25em;
  display: flex;
  justify-content: space-between;
`;

// const MediumPic = styled.div`
//   height: 200px;
//   width: 200px;
//   border: 1px solid #000;
// `;

// const LargePic = styled.span`
//   height: 380px;
//   width: 380px;
//   vborder: 1px solid #000;
// `;

// const SmallPic = styled.div`
//   height: 150px;
//   width: 150px;
//   border: 1px solid #000;
// `;
