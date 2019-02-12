import React from 'react';
import styled from 'styled-components';

const PhotoModal = (props) => {
  const { closeModal, show, children } = props;
  const showHide = show ? 'photo-modal block' : 'photo-modal none';

  return (
    <div className={showHide}>
      <InnerModal>
        {children}
      </InnerModal>
      <input type="button" onClick={closeModal} value="X" />
    </div>
  );
};

const InnerModal = styled.section`
  position: fixed;
  background: lightyellow;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default PhotoModal;
