import React from "react";

const Modal = ({ closeModal, children }) => {
  return (
    <div  className="fixed  top-0 left-0 w-full z-50 h-full flex items-center justify-center modal-overlay bg-black bg-opacity-50">
      <div className="modal w-[60%] overflow-y-auto bg-white p-4 h-[90%] rounded-md">
        <div className="modal-header flex justify-end">
          <button onClick={closeModal} className="close-button text-2xl ">
            &times;
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
