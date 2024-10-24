"use client";
import Autocomplete from "@elements/Autocomplete";
import Button from "@elements/Button";
import Input from "@elements/Input";
import { cities, states } from "@utils/staticDataLarge";
import Link from "next/link";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { useMemo } from "react";

interface IRegisterForm {
  fullName: string;
  phone: string;
  password: string;
  state: { id: number; label: string };
  city: string;
}

const RegisterPage = () => {
  const methods = useForm<IRegisterForm>({
    defaultValues: {
      fullName: "",
      phone: "",
      password: "",
      state: {},
      city: "",
    },
  });

  const handleRegister = (values: object) => {
    console.log(values);
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
        className="flex flex-col w-80 gap-5 items-center mt-10 mx-auto"
      >
        <span className="font-semibold text-lg">ثبت نام</span>
        <Input autoFocus label="نام و نام‌خانوادگی" name="fullName" />
        <Input label="تلفن همراه" name="phone" />
        <Input name="password" label="رمزعبور" />
        <Autocomplete label="استان شما" name="state" options={states} />
        {selectedState?.label && (
          <Autocomplete label="شهر" name="city" options={filteredCities} />
        )}

        <Link className="text-sm -mt-3 mr-auto text-blue-700" href={"/login"}>
          قبلا ثبت‌نام کردید؟ وارد شوید
        </Link>
        <Button type="submit">ثبت نام</Button>
      </form>
    </FormProvider>
  );
};

export default RegisterPage;
