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
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {selectedOption && <p className="modal__body">{selectedOption}</p>}
      <button className="button" onClick={closeModal}>Close</button>
    </Modal>
  )
}

export default OptionModal;