"use client";
import Button from "@elements/Button";
import Input from "@elements/Input";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

const LoginPage = () => {
  const handleLogin = (values: object) => {
    console.log(values);
  };
  const methods = useForm({
    defaultValues: {
      phone: "",
      password: "",
    },
  });
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleLogin)}
        className="flex flex-col w-80 gap-5 items-center mt-20 mx-auto"
      >
        <span className="font-semibold text-lg">ثبت نام</span>
        <Input autoFocus label="شماره همراه" name="phone" />
        <div className="flex flex-col w-full">
          <Input label="رمزعبور" name="password" />
          <Link className="text-sm mr-auto text-blue-700" href={"/register"}>
            حساب ندارید؟ ثبت نام کنید
          </Link>
        </div>
        <Button>ورود</Button>
      </form>
    </FormProvider>
  );
};

export default LoginPage;
