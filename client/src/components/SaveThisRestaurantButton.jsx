import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <ButtonSpan>
        <SaveButton onClick={this.handleClick}>
          {isSaved
            ? (
              <div>
                <IconSpan><FontAwesomeIcon icon="bookmark" /></IconSpan>
                <span>Save This Restaurant</span>
              </div>
            )
            : (
              <TextDiv>
                <svg width="24px" height="24px">
                  <g id="icon/ic_bookmarked" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="icon/ic_bookmark" transform="translate(5.000000, 3.000000)" fill="#DA3743">
                      <path d="M2,-0.000121269196 L12,-0.000121269196 C13.1045695,-0.000121269196 14,0.895309231 14,1.99987873 L14,17.6055572 C14,17.8816996 13.7761424,18.1055572 13.5,18.1055572 C13.421402,18.1055572 13.343911,18.0870278 13.273815,18.0514724 L7,14.8691561 L0.726185039,18.0514724 C0.479912898,18.1763909 0.17900339,18.0780144 0.054084842,17.8317423 C0.0185294562,17.7616462 2.78518304e-15,17.6841552 2.77555756e-15,17.6055572 L0,1.99987873 C-6.25798147e-16,0.895309231 0.8954305,-0.000121269196 2,-0.000121269196 Z" id="Combined-Shape">
                      </path>
                    </g>
                  </g>
                </svg>
                <TextSpan>Restaurant Saved!</TextSpan>
              </TextDiv>
            )
          }
        </SaveButton>
      </ButtonSpan>
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

const ButtonSpan = styled.span`
  ${SaveButton}: hover {
    border: 2px solid #da3743;
  }
`;

const IconSpan = styled.span`
  margin-right: 5px;
`;

const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: middle;
`;

const TextSpan = styled.span`
  padding-top: 5px;
`;


export default SaveThisRestaurantButton;
