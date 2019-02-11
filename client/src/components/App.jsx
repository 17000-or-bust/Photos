import React from 'react';
import styled from 'styled-components';
import SaveThisRestaurantButton from './SaveThisRestaurantButton';
import PhotoBanner from './PhotoBanner';
import ajax from '../lib/ajax';
// import fakeImageData from '../../fakeImgData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    const randomId = Math.floor(Math.random() * 100);
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

  render() {
    const { photos } = this.state;
    return (
      <div>
        <NavPlaceholder />
        <MainBannerDiv>
          <PhotoBanner photos={photos} />
        </MainBannerDiv>
        <SaveThisRestaurantButton>Save This Restaurant</SaveThisRestaurantButton>
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
`;
