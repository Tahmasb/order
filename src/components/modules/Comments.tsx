"use client";
import Button from "@elements/Button";
import TextArea from "@elements/TextArea";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import { setMessage } from "@redux/slices/message";
import { myAxios } from "@utils/axios";
import { convertTimestampToShamsi } from "@utils/date";
import { cleanObject } from "@utils/formatData";
import { addCommentValidationSchema } from "@utils/validations";
import Image from "next/image";
import { useState } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { BsReply } from "react-icons/bs";
import { useDispatch } from "react-redux";

type FormValues = {
  body: string;
  replyId: string;
  blogId: string;
};

interface User {
  _id: string;
  role: "ADMIN" | "USER";
  fullName: string;
}

interface Comment {
  _id: string;
  userId: User;
  body: string;
  replays: Comment[];
  createdAt: string; // یا Date، بستگی به نیاز شما دارد.
}

const Comments: React.FC<{ blogId: string; comments: Comment[] }> = ({
  blogId,
  comments,
}) => {
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const dispatch = useDispatch();
  const handleToggleShowCommentInput = () =>
    setShowCommentInput(!showCommentInput);
  const methods = useForm<FormValues>({
    defaultValues: {
      replyId: "",
      blogId,
      body: "",
    },
    resolver: yupResolver(addCommentValidationSchema),
  });
  const handleAddComment: SubmitHandler<FieldValues> = (values) => {
    const newValues = cleanObject(values);
    myAxios
      .post("/comment", newValues)
      .then((res) => {
        console.log("test 1 -> ", res.data);
        dispatch(setMessage({ message: res.data.message }));
      })
      .catch((error) => {
        setIsLoadingButton(false);
        dispatch(
          setMessage({
            message: error.response.data.message,
            severity: "error",
          })
        );
      });
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-xl">نظرات</span>
        <Button
          onClick={handleToggleShowCommentInput}
          className={`${showCommentInput && "hidden"}`}
        >
          ایجاد نظر جدید
        </Button>
      </div>
      {showCommentInput && (
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(handleAddComment)}
            className="w-full flex flex-col gap-2"
          >
            <TextArea
              autoFocus
              name="body"
              label="نظر خود را بنویسید"
              className="w-full"
            />
            <div className="flex gap-3 mr-auto">
              <Button
                onClick={handleToggleShowCommentInput}
                className="w-28 h-9"
                variant="outlined"
              >
                لغو
              </Button>
              <Button
                isLoading={isLoadingButton}
                type="submit"
                className="w-28 h-9"
              >
                ارسال
              </Button>
            </div>
          </form>
        </FormProvider>
      )}
      <div className="flex gap-6 flex-col ">
        {comments.map((comment) => {
          return (
            <div
              key={comment._id}
              className="border bg-[#f3f4f6] rounded-md p-1.5 gap-4 flex flex-col"
            >
              <div className="flex justify-between items-center border-b">
                <div className="flex gap-2.5">
                  <Image
                    src="/images/contact.svg"
                    width={40}
                    height={40}
                    alt="تصویر کاربر‍"
                    className="border rounded-full w-11 h-11"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1.5 items-center">
                      <span>{comment.userId.fullName}</span> |
                      <span className="text-sm text-secondary-active">
                        {comment.userId.role}
                      </span>
                    </div>
                    <span className="text-sm text-black-2">
                      {convertTimestampToShamsi(comment.createdAt)}
                    </span>
                  </div>
                </div>
                <BsReply
                  onClick={() => {
                    setShowCommentInput(true);
                    methods.setValue("replyId", "");
                  }}
                  className="cursor-pointer text-xl"
                />
              </div>
              <span className="text-sm">{comment.body}</span>
              <div className="flex  gap-3 flex-col">
                {comment.replays.map((subComment) => {
                  return (
                    <div
                      key={subComment._id}
                      className="px-5 py-2 rounded border bg-[#e5e7eb] gap-3 flex flex-col"
                    >
                      <div className="flex gap-2.5 pb-1 border-b border-gray-300">
                        <Image
                          src="/images/contact.svg"
                          width={40}
                          height={40}
                          alt="تصویر کاربر‍"
                          className="border rounded-full w-11 h-11"
                        />
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-1.5 items-center">
                            <span>{subComment.userId.fullName}</span> |
                            <span className="text-sm text-secondary-active">
                              {subComment.userId.role}
                            </span>
                          </div>
                          <span className="text-sm text-black-2">
                            {convertTimestampToShamsi(subComment.createdAt)}
                          </span>
                        </div>
                      </div>

                      <span className="text-sm">{subComment.body}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
