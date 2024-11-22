"use client";
import Button from "@elements/Button";
import Input from "@elements/Input";
import InputNumber from "@elements/InputNumber";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import { loginSchema } from "@utils/validations";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { setMessage } from "@redux/slices/message";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogin = async (values: object) => {
    setIsLoadingButton(true);
    const res = await signIn("credentials", {
      redirect: false,
      ...values,
    });
    if (res?.error) {
      console.log(res.error);
      setIsLoadingButton(false);
      dispatch(
        setMessage({
          message: res.error,
          severity: "error",
        })
      );
    } else {
      router.push("/dashboard");
      dispatch(
        setMessage({
          message: "خوش آمدید",
        })
      );
    }
  };
  const methods = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleLogin)}
        className="flex flex-col px-3 w-80 gap-5 items-center mt-20 mx-auto"
      >
        <span className="font-semibold text-lg text-center">ورود</span>
        <InputNumber
          autoFocus
          maxLength={11}
          label="شماره همراه"
          name="phone"
        />
        <div className="flex flex-col gap-3 items-center w-full">
          <Input label="رمزعبور" name="password" type="password" />
          <Link className="text-sm text-blue-700" href={"/register"}>
            حساب ندارید؟ ثبت نام کنید
          </Link>
        </div>
        <Button
          className="hover:w-full duration-500"
          isLoading={isLoadingButton}
          type="submit"
        >
          ورود
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginPage;
