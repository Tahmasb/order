"use client";
import Button from "@elements/Button";
import Input from "@elements/Input";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

const RegisterPage = () => {
  const handleRegister = (values: object) => {
    console.log(values);
  };
  const methods = useForm({
    defaultValues: {
      fullName: "",
      phone: "",
      password: "",
      rePassword: "",
      state: "",
      city: "",
    },
  });
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleRegister)}
        className="flex flex-col w-80 gap-5 items-center mt-20 mx-auto"
      >
        <span className="font-semibold text-lg">ثبت نام</span>
        <Input autoFocus label="نام و نام‌خانوادگی" name="fullName" />
        <Input label="تلفن همراه" name="phone" />
        <Input name="password" label="رمزعبور" />
        <Input name="rePassword" label="تکرار رمزعبور" />

        <Link className="text-sm mr-auto text-blue-700" href={"/register"}>
          قبلا ثبت‌نام کردید؟ وارد شوید
        </Link>
        <Button>ثبت نام</Button>
      </form>
    </FormProvider>
  );
};

export default RegisterPage;
