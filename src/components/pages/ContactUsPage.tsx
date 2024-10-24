"use client";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Button from "@elements/Button";
import Input from "@elements/Input";
import TextArea from "@elements/TextArea";
import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";

const ContactUsPage = () => {
  const handleAddTicket = (values: {
    fullName: string;
    phone: string;
    subject: string;
    message: string;
  }) => {
    console.log(values);
  };
  const methods = useForm({
    defaultValues: {
      fullName: "",
      phone: "",
      subject: "",
      message: "",
    },
  });
  return (
    <div className="flex flex-col md:flex-row items-center">
      <FormProvider {...methods}>
        <form
          className="w-full md:w-7/12 flex flex-col gap-5 p-4"
          onSubmit={methods.handleSubmit(handleAddTicket)}
        >
          <span className="font-bold text-lg">با ما در ارتباط باشید</span>
          <div className="w-full flex flex-col gap-3.5 child:min-w-full last:child:min-w-min">
            <Input name="fullName" autoFocus label="نام و نام‌خانوادگی" />
            <Input name="phone" label="شماره همراه" />
            <Input name="subject" label="موضوع" />
            <TextArea name="message" label="پیام" />
            <Button>ارسال</Button>
          </div>
        </form>
      </FormProvider>
      <div className="w-full md:w-5/12 flex flex-col gap-10 py-8 items-center">
        <Image
          src={"/images/contact.svg"}
          width={200}
          height={200}
          alt="سفارش تابلو چنلیوم"
          className="w-full h-96 hidden md:flex"
        />
        <div className="flex flex-col gap-4">
          <div className="flex gap-5">
            <span>شماره تماس: </span>
            <a href="">۰۹۱۱۲۰۷۶۱۳۹</a>
          </div>
          <div className="flex gap-3">
            <span>شبکه‌های اجتمائی: </span>
            <a
              href="https://wa.me/989112076139"
              target="_blank"
              className="text-[#0dc143] text-2xl"
            >
              <FaWhatsapp />
            </a>
            <a
              target="_blank"
              href="https://t.me/+989112076139"
              className="text-[#269eda] text-2xl"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
