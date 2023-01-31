import PrimaryButton from "./PrimaryButton";
import { createPortal } from "react-dom";
import { AiFillWarning } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./ErrorModal.scss";

function ErrorModal({ children, onClose }) {
  return createPortal(
    <>
      <div className="error-modal-overlay" onClick={onClose} />

      <div className="error-modal">
        <AiFillWarning className="error-modal__icon" />
        <p className="error-modal__msg">{children}</p>
        <PrimaryButton onClick={onClose} className="error-modal__btn">
          <AiOutlineCloseCircle />
        </PrimaryButton>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default ErrorModal;
