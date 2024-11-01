"use client";
import Input from "@elements/Input";
import SingleImageUploader from "@elements/SingleImageUploader";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const AddBlogPage = () => {
  const methods = useForm({});
  const handleAddBlog: SubmitHandler<FieldValues> = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h1>صفحه افزودن وبلاگ</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleAddBlog)}>
          <SingleImageUploader name="image" label="تصویر اصلی مقاله" />
          <Input name="title" label="عنوان مقاله" />
          <Input name="href" label="آدرس مقاله" />
          <Input name="metaDescription" label="توضیحات متا" />
        </form>
      </FormProvider>
    </div>
  );
};

export default AddBlogPage;
