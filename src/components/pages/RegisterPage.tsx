"use client";
import Autocomplete from "@elements/Autocomplete";
import Button from "@elements/Button";
import Input from "@elements/Input";
import { cities, states } from "@utils/staticDataLarge";
import Link from "next/link";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { useMemo, useState } from "react";
import InputNumber from "@elements/InputNumber";
import { registerSchema } from "@utils/validations";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import { OptionItemType } from "../types";
import myAxios from "@utils/axios";
import { useDispatch } from "react-redux";
import { setMessage } from "@redux/slices/message";
import { useRouter } from "next/navigation";

interface RegisterForm {
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  state: OptionItemType | null;
  city: OptionItemType | null;
}

const RegisterPage = () => {
  const router = useRouter();
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const dispatch = useDispatch();
  const methods = useForm<RegisterForm>({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      password: "",
      state: null,
      city: null,
    },
    resolver: yupResolver(registerSchema),
  });

  const handleRegister = (values: object) => {
    setIsLoadingButton(true);
    myAxios
      .post("/auth/register", values)
      .then((res) => {
        router.push("/login");
        dispatch(setMessage({ message: res.data.message }));
      })
      .catch((error) => {
        dispatch(
          setMessage({
            message: error.response.data.message,
            severity: "error",
          })
        );
        setIsLoadingButton(false);
      });
  };

  const selectedState = useWatch({
    name: "state",
    control: methods.control,
  });

  const filteredCities = useMemo(() => {
    return cities.filter((city) => city.stateId === selectedState?.id);
  }, [selectedState]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleRegister)}
        className="flex flex-col child:max-w-full w-80 gap-5 items-center mt-6 mx-auto"
      >
        <span className="font-semibold text-lg">ثبت نام</span>
        <Input autoFocus label="نام" name="firstName" />
        <Input label="نام خانوادگی" name="lastName" />
        <InputNumber maxLength={11} label="تلفن همراه" name="phone" />
        <Input name="password" type="password" label="رمزعبور" />
        <Autocomplete label="استان شما" name="state" options={states} />
        {selectedState?.label && (
          <Autocomplete label="شهر" name="city" options={filteredCities} />
        )}

        <Link className="text-sm -mt-1.5  text-blue-700" href={"/login"}>
          قبلا ثبت‌نام کردید؟ وارد شوید
        </Link>
        <Button type="submit">ثبت نام</Button>
      </form>
    </FormProvider>
  );
};

export default RegisterPage;
