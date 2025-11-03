import { useEffect, useRef, useState } from "react";

function Toast({ message, show, onClose, type = "success", toastIndex }) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const timerRef = useRef(null);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      setVisible(false);
      onClose();
    }, 500);
  };

  useEffect(() => {
    if (show) {
      setClosing(false);
      setVisible(true);

      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        handleClose();
      }, 2500);

      return () => clearTimeout(timerRef.current);
    } else {
      setClosing(false);
      setVisible(false);
    }
  }, [show, onClose]);

  const typeIcons = {
    success: "✅",
    error: "❌",
    warning: "⚠️",
  };

  if (!visible && !closing) return null;

  const verticalOffset = toastIndex * 8;

  return (
    <div
      className={`toast ${visible ? "show" : ""} ${type} ${
        closing ? "hide-animation" : ""
      }`}
      style={{
        transform: `translateY(-${verticalOffset}px)`,
      }}
    >
      <span className="toast-icon">{typeIcons[type]}</span>
      <span className="toast-message">{message}</span>

      <button
        className="toast-close-btn"
        onClick={handleClose}
        aria-label="Close notification"
      >
        &times;
      </button>
    </div>
  );
}

export default Toast;
