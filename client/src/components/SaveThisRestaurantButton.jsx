import React from 'react';
import styled from 'styled-components';

class SaveThisRestaurantButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSaved: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log('clicked');
    event.preventDefault();
    this.setState(state => ({
      isSaved: !state.isSaved,
    }));
  }

  render() {
    const { isSaved } = this.state;
    return (
      <SaveButton onClick={this.handleClick}>{isSaved ? 'Save this restaurant' : 'Restaurant saved!'}</SaveButton>
    );
  }
}

const SaveButton = styled.button`
  display: inline-block;
  background: white;
  width: 15rem;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: black;
  margin: 0 1em;
  padding: .7em 1em;
  overflow: visible;
  outline: none;
`;

export default SaveThisRestaurantButton;
