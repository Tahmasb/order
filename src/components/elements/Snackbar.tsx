"use client";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

type Severity = "success" | "error" | "warning" | "info" | "";

interface SnackbarProps {
  open: boolean;
  onClose: () => void;
  severity?: Severity;
  autoHideDuration?: number;
  message?: string;
}

const Snackbar: React.FC<SnackbarProps> = ({
  open,
  onClose,
  severity = "success",
  autoHideDuration = 18000,
  message = "عملیات با موفقیت انجام شد",
}) => {
  useEffect(() => {
    if (open && autoHideDuration) {
      const timer = setTimeout(onClose, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [open, autoHideDuration, onClose]);

  if (!open) return null;

  const severityClasses: Record<Severity, string> = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
    "": "",
  };

  return (
    <div
      className={`w-10/12 max-w-72 transition fixed top-5 left-1/2 transform -translate-x-1/2 z-40 p-2 rounded shadow-lg text-white flex items-center space-x-4 ${severityClasses[severity]}`}
      role="alert"
    >
      <button onClick={onClose}>
        <IoMdClose className="w-5 h-5" />
      </button>
      <span>{message}</span>
    </div>
  );
};

export default Snackbar;
