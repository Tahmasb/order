"use client";
import { useAppDispatch, useAppSelector } from "@hooks/redux"; // مسیر مناسب را تنظیم کنید
import { setMessage } from "@redux/slices/message";
import Snackbar from "@elements/Snackbar";

export default function ElementOnAllPages() {
  const dispatch = useAppDispatch();
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