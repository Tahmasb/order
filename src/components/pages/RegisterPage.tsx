"use client";
import Autocomplete from "@elements/Autocomplete";
import Button from "@elements/Button";
import Input from "@elements/Input";
import { cities, states } from "@utils/staticDataLarge";
import Link from "next/link";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { useMemo } from "react";

const RegisterPage = () => {
  const methods = useForm({
    defaultValues: {
      fullName: "",
      phone: "",
      password: "",
      state: "",
      city: "",
    },
  });

  const handleRegister = (values: object) => {
    console.log(values);
  };

  // Watching the selected state
  const selectedState: any = useWatch({
    name: "state",
    control: methods.control,
  });

  // Filter cities based on selected state
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

        {/* Conditionally show the city input based on selected state */}
        {selectedState && (
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
