"use client";
import Autocomplete from "@elements/Autocomplete";
import Button from "@elements/Button";
import Input from "@elements/Input";
import InputNumber from "@elements/InputNumber";
import TextArea from "@elements/TextArea";
import { costAmountOptions, ordersType } from "@utils/staticData";
import { useForm, FormProvider } from "react-hook-form";

const AddOrderPage = () => {
  const handleAddOrder = (values: {}) => console.log(values);
  const methods = useForm({
    defaultValues: {
      phone: "",
    },
  });
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleAddOrder)}
        className="flex py-8 px-3 flex-col gap-4  child:max-w-full max-w-[600px] items-center mx-auto"
      >
        <span className="font-bold text-lg my-2">صفحه ارسال سفارش</span>
        <Input name="fullName" autoFocus label="نام و نام‌خانوادگی" />
        <InputNumber name="phone" maxLength={11} label="شماره همراه" />
        <Autocomplete name="type" options={ordersType} label="نوع سفارش" />
        <Autocomplete
          name="costAmount"
          label="هزینه مد نظر شما"
          options={costAmountOptions}
        />
        <TextArea name="description" label="توضیحات که فکر میکنید لازم هست" />
        <Button type="submit">ثبت درخواست مشاوره</Button>
      </form>
    </FormProvider>
  );
};

export default AddOrderPage;
