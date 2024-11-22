"use client";
import { useAppSelector } from "@hooks/redux"; // مسیر مناسب را تنظیم کنید
import { setMessage } from "@redux/slices/message";
import Snackbar from "@elements/Snackbar";
import { useDispatch } from "react-redux";

export default function ElementOnAllPages() {
  const dispatch = useDispatch();
  const isShow = useAppSelector((state) => state.messages.isShow);
  const messageStatus = useAppSelector((state) => state.messages.severity);
  const message = useAppSelector((state) => state.messages.message);

  return (
    <>
      <Snackbar
        open={isShow}
        onClose={() =>
          dispatch(setMessage({ message: "", isShow: false, severity: "" }))
        }
        message={message}
        severity={messageStatus}
      />
    </>
  );
}
