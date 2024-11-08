"use client";
import Button from "@elements/Button";
import TextArea from "@elements/TextArea";
import { myAxios } from "@utils/axios";
import { cleanObject } from "@utils/formatData";
import Image from "next/image";
import { useState } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { BsReply } from "react-icons/bs";

type FormValues = {
  body: string;
  replyId: string;
  blogId: string;
};

const Comments: React.FC<{ blogId: string }> = ({ blogId }) => {
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const handleToggleShowCommentInput = () =>
    setShowCommentInput(!showCommentInput);
  const methods = useForm<FormValues>({
    defaultValues: {
      replyId: "",
      blogId,
      body: "",
    },
  });
  const handleAddComment: SubmitHandler<FieldValues> = (values) => {
    console.log(cleanObject(values));
    // myAxios.post('/comments',)
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-xl">نظرات</span>
        <Button onClick={handleToggleShowCommentInput}>ایجاد نظر جدید</Button>
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
        {[1, 2, 3, 4, 5, 6].map((comment) => {
          return (
            <div
              key={comment}
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
                      <span>محمد محمدی</span> |
                      <span className="text-sm text-secondary-active">
                        ادمین
                      </span>
                    </div>
                    <span className="text-sm text-black-2">1403/04/12</span>
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
              <span className="text-sm">
                سلام من دوره جاوا اسکریپت رو گذرونم و میخواهم در ادامه میسر تایپ
                اسکریپت هم یاد بگیرم. به نظر شما اول بهتره چند تا دوره فریم ورک
                جاوا اسکریپت ببینم و بعد این دوره رو مشاهده کنم؟ یا فرقی نداره؟
              </span>
              <div className="flex  gap-3 flex-col">
                {[1, 2, 3].map((comment) => {
                  return (
                    <div
                      key={comment}
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
                            <span>محمد محمدی</span> |
                            <span className="text-sm text-secondary-active">
                              ادمین
                            </span>
                          </div>
                          <span className="text-sm text-black-2">
                            1403/04/12
                          </span>
                        </div>
                      </div>

                      <span className="text-sm">
                        سلام من دوره جاوا اسکریپت رو گذرونم و میخواهم در ادامه
                        میسر تایپ اسکریپت هم یاد بگیرم. به نظر شما اول بهتره چند
                        تا دوره فریم ورک جاوا اسکریپت ببینم و بعد این دوره رو
                        مشاهده کنم؟ یا فرقی نداره؟
                      </span>
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
