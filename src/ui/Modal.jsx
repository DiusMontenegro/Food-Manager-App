// components/Modal.js
import PropTypes from "prop-types";
import FocusLock from "react-focus-lock"; // Import the focus-lock library

const Modal = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-45">
            <FocusLock>
                <div
                    role="dialog"
                    aria-modal="true"
                    className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-xl"
                >
                    {children}
                </div>
            </FocusLock>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    action: PropTypes.string,
};

export default Modal;
