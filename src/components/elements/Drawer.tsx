import { useEffect } from "react";

type DrawerProps = {
  open: boolean;
  anchor?: "right" | "left" | "top" | "bottom";
  onClose?: (event: React.MouseEvent<HTMLElement>) => void;
};

const Drawer: React.FC<React.PropsWithChildren<DrawerProps>> = ({
  open,
  onClose,
  anchor = "right",
  children,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const anchorClasses = {
    left: "left-0 top-0 h-full",
    right: "right-0 top-0 h-full",
    top: "top-0 left-0 w-full",
    bottom: "bottom-0 left-0 w-full",
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Overlay with opacity */}
      <div
        className={`fixed inset-0 bg-black-2 bg-opacity-50 transition-opacity duration-300 ${
          open ? "opacity-50" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      {/* Drawer content */}
      <div
        className={`fixed bg-white shadow-xl ${
          anchorClasses[anchor]
        } transform transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : anchor === "left"
            ? "-translate-x-full"
            : anchor === "right"
            ? "translate-x-full"
            : anchor === "top"
            ? "-translate-y-full"
            : "translate-y-full"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Drawer;
