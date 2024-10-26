"use client";
import Autocomplete from "@elements/Autocomplete";
import Button from "@elements/Button";
import ImagesUploader from "@elements/ImagesUploader";
import TextArea from "@elements/TextArea";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import { setMessage } from "@redux/slices/message";
import myAxios from "@utils/axios";
import { costAmountOptions, ordersType } from "@utils/staticData";
import { addOrderSchema } from "@utils/validations";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import { useDispatch } from "react-redux";

const AddOrderInDashboardPage = () => {
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddOrder: SubmitHandler<FieldValues> = (values) => {
    setIsLoadingButton(true);
    myAxios
      .post("/request", values)
      .then((res) => {
        dispatch(setMessage({ message: res.data.message }));
        router.push(`/verify?phone=${values.phone}`);
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

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleAddOrder)}
        className="flex py-6 px-3 flex-col gap-5  child:max-w-full max-w-[600px] items-center mx-auto"
      >
        <span className="font-bold text-lg mb-2">صفحه ارسال سفارش</span>
        <Autocomplete name="type" options={ordersType} label="نوع سفارش" />
        <Autocomplete
          name="costAmount"
          label="هزینه مد نظر شما"
          options={costAmountOptions}
        />
        <TextArea
          name="description"
          label="توضیحاتی که فکر میکنید لازم است (اختیاری)"
        />
        <ImagesUploader name="images" label="آپلود تصاویر طرح (اختیاری)" />
        <small className="-mt-3">
          آپلود تصاویر از طرح سفارشی شما (اختیاری)
        </small>
        <Button
          className="hover:w-72 duration-500"
          isLoading={isLoadingButton}
          type="submit"
        >
          ثبت درخواست مشاوره
        </Button>
      </form>
    </FormProvider>
  );
};

export default AddOrderInDashboardPage;
