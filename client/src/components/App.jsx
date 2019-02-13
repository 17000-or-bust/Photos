import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight, faAngleLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import SaveThisRestaurantButton from './SaveThisRestaurantButton';
import PhotoBanner from './PhotoBanner';
import PhotoModal from './PhotoModal';
import fakeDataImg from '../../fakeImgData';
import ajax from '../lib/ajax';

library.add(faAngleRight);
library.add(faAngleLeft);
library.add(faTimes);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      showModal: false,
    };
    this.openPhotoModal = this.openPhotoModal.bind(this);
    this.closePhotoModal = this.closePhotoModal.bind(this);
  }

  componentDidMount() {
    const randomId = Math.floor(Math.random() * 100) + 1;
    this.getPhotosForBanner(randomId);
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
    const { photos, showModal } = this.state;

    return (
      <div>
        <NavPlaceholder />
        <MainBannerDiv>

          <PhotoBanner photos={photos} openModal={this.openPhotoModal} closeModal={this.closePhotoModal} isOpen={showModal} />

          <SaveThisRestaurantButton />

        </MainBannerDiv>

        <PhotoModal photos={photos} show={showModal} closeModal={this.closePhotoModal} />

        <OverviewPlaceholder />
        <h2>50 Photos</h2>
        <hr />
      </div>
    );
  }
}

export default App;

const OverviewPlaceholder = styled.div`
  height: 30rem;
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
