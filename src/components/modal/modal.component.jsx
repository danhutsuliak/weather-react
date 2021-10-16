import React from 'react';

import './modal.styles.scss';

const Modal = ({ text, isShown }) => {
  return (
    <div id="myModal" className="modal" style={{ display: isShown && 'block' }}>
      <div className="modal-content">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Modal;
