"use client";

import Button from "@elements/Button";
import Input from "@elements/Input";
import SingleImageUploader from "@elements/SingleImageUploader";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const AddCategoryPage = () => {
  const methods = useForm({});
  const handleAddCategory: SubmitHandler<FieldValues> = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h1>صفحه افزودن دسته بندی مقاله</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleAddCategory)}>
          <SingleImageUploader name="image" label="تصویر دسته بندی" />
          <Input name="title" label="عنوان دسته بندی" />
          <Input name="href" label="لینک دسته بندی" />
          <Input name="description" label="توضیحات دسته بندی" />
          <Button type="submit">افزودن مقاله</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddCategoryPage;
