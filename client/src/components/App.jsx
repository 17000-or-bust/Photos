import React from 'react';
import styled from 'styled-components';
import SaveThisRestaurantButton from './SaveThisRestaurantButton';
import PhotoBanner from './PhotoBanner';
import fakeImageData from '../../fakeImgData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: fakeImageData,
    };
  }

  render() {
    const { photos } = this.state;
    return (
      <div>
        <div className="topBanner">
          <PhotoBanner photos={photos} />
        </div>
        <SaveThisRestaurantButton>Save This Restaurant</SaveThisRestaurantButton>
        <Placeholder />
        <h2>50 Photos</h2>
        <hr />
      </div>
    );
  }
}

export default App;

const Placeholder = styled.div`
  height: 31rem;
  background: url(https://via.placeholder.com/1500x500?text=Restaurant+Overview+Placeholder);
`;
