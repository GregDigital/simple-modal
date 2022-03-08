import React from "react";
import "./Modal.css";
import PropTypes from "prop-types";

export const Modal = ({ content, open, close }) => {
  if (!open) {
    return null;
  }
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-wrapper">
          <div className="modal">
            <div className="modal-header">
              <button
                type="button"
                className="modal-close-button"
                onClick={close}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">{content}</div>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  content: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};
