import React, { Component} from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  const { selectedOption, closeModal } = props;
  return (
    <Modal
      isOpen={!!selectedOption}
      contentLabel="Selected Option"
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      <h3>Selected Option</h3>
      {selectedOption && <p>{selectedOption}</p>}
      <button onClick={closeModal}>Close</button>
    </Modal>
  )
}

export default OptionModal;