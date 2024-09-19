import { IoCloseSharp } from "react-icons/io5";
import { cn } from "@utils/style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  open?: boolean;
  variant?: "contained" | "outlined";
  className?: string;
  onClose?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Modal: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  open,
  onClose,
  children,
  className,
}) => {
  const handleClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      onClose?.(event);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed z-40 inset-0 overflow-y-auto" onClick={handleClose}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            onClick={(e) => handleClose}
            className="absolute inset-0 bg-gray-500 opacity-75"
          ></div>
        </div>
        <div
          className="inline-block align-bottom rounded-lg text-left  shadow-xl transform transition-all"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div
            className={cn("rounded-lg py-3 justify-start ", className || "")}
          >
            {children}
          </div>
          <div className="bg-gray-50 px-4 ">
            <button
              onClick={onClose}
              type="button"
              className="absolute top-2 left-2"
            >
              <IoCloseSharp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
