"use client";
import Autocomplete from "@elements/Autocomplete";
import Button from "@elements/Button";
import Input from "@elements/Input";
import InputNumber from "@elements/InputNumber";
import TextArea from "@elements/TextArea";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import { setMessage } from "@redux/slices/message";
import { myAxios } from "@utils/axios";
import { costAmountOptions, ordersType } from "@utils/staticData";
import { cities, states } from "@utils/staticDataLarge";
import { addOrderSchema } from "@utils/validations";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
  useWatch,
} from "react-hook-form";
import { useDispatch } from "react-redux";

const AddOrderPage = () => {
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { data } = useSession();

  const handleAddOrder: SubmitHandler<FieldValues> = (values) => {
    setIsLoadingButton(true);
    myAxios
      .post("/request", values)
      .then((res) => {
        dispatch(setMessage({ message: res.data.message }));
        router.push(`/verify?phone=${values.phone}&incomingLink=add-order`);
      })
      .catch((error) => {
        setIsLoadingButton(false);
        console.log("hi => ", error.response);
        dispatch(
          setMessage({
            message: error.response.data.message,
            severity: "error",
          })
        );
      });
  };

  const methods = useForm({
    resolver: yupResolver(addOrderSchema),
  });

  const selectedState = useWatch({
    name: "state",
    control: methods.control,
  });

  const filteredCities = useMemo(() => {
    return cities.filter((city) => city.stateId === selectedState?.id);
  }, [selectedState]);

  useEffect(() => {
    if (data) router.push("/dashboard/add-order");
  }, [data]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleAddOrder)}
        className="flex py-6 px-3 flex-col gap-5  child:max-w-full max-w-[600px] items-center mx-auto"
      >
        <span className="font-bold text-lg mb-2">صفحه ارسال سفارش</span>
        <Input name="fullName" autoFocus label="نام و نام‌خانوادگی" />
        <InputNumber name="phone" maxLength={11} label="شماره همراه" />
        <Input name="password" type="password" label="رمزعبور" />
        <Autocomplete name="type" options={ordersType} label="نوع سفارش" />
        <Autocomplete
          name="costAmount"
          label="هزینه مد نظر شما"
          options={costAmountOptions}
        />
        <Autocomplete label="استان شما" name="state" options={states} />
        {selectedState?.label && (
          <Autocomplete label="شهر" name="city" options={filteredCities} />
        )}
        <TextArea
          name="description"
          label="توضیحاتی که فکر میکنید لازم است (اختیاری)"
        />
        <Button
          isLoading={isLoadingButton}
          type="submit"
          className="hover:w-72 duration-500"
        >
          ثبت درخواست مشاوره
        </Button>
      </form>
    </FormProvider>
  );
};

export default AddOrderPage;
