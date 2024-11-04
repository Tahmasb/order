"use client";

import Button from "@elements/Button";
import Input from "@elements/Input";
import SingleImageUploader from "@elements/SingleImageUploader";
import ShowErrors from "@modules/ShowErrors";
import { setMessage } from "@redux/slices/message";
import myAxios from "@utils/axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useDispatch } from "react-redux";

const AddCategoryPage = () => {
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [responseErrors, setResponseErrors] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const methods = useForm({});
  const handleAddCategory: SubmitHandler<FieldValues> = (values) => {
    setIsLoadingButton(true);
    myAxios
      .post("/category", values)
      .then((res) => {
        dispatch(setMessage({ message: res.data.message }));
        router.push(`/admin`);
      })
      .catch((error) => {
        setIsLoadingButton(false);
        setResponseErrors(error.response.data.data || []);
        dispatch(
          setMessage({
            message: error.response.data.message,
            severity: "error",
          })
        );
      });
  };
  return (
    <div className="flex flex-col max-w-[800px] p-3 gap-4 mt-5 mx-auto items-center child:w-full">
      <h1 className="text-center heading">صفحه افزودن دسته بندی مقاله</h1>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleAddCategory)}
          className="flex flex-col gap-4 child:max-w-full items-center"
        >
          <ShowErrors errors={responseErrors} />
          <SingleImageUploader name="image" label="تصویر دسته بندی" />
          <Input name="href" autoFocus urlSafe label="لینک دسته بندی" />
          <Input name="label" label="عنوان دسته بندی" />
          <Input name="description" label="توضیحات دسته بندی" />
          <Button type="submit" isLoading={isLoadingButton}>
            افزودن مقاله
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddCategoryPage;
