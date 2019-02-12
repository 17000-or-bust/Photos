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
  width: 240px;
  height: 50.31px;
  border-radius: 2px;
  border: 1px solid #d8d9db;
  color: #2d333f;
  padding: 11px 15px;
  position: absolute;
  top: 10%;
  left: 80%;
  text-align: center;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-weight: 20px;
  cursor: pointer;
`;

export default SaveThisRestaurantButton;
