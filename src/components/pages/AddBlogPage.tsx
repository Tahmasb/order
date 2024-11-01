"use client";
import Autocomplete from "@elements/Autocomplete";
import Button from "@elements/Button";
import Input from "@elements/Input";
import SingleImageUploader from "@elements/SingleImageUploader";
import myAxios from "@utils/axios";
import { transformArray } from "@utils/formatData";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const Editor = dynamic(() => import("@modules/Editor"), { ssr: false });

const AddBlogPage = () => {
  const [categories, setCategories] = useState([]);
  const methods = useForm({});
  const handleAddBlog: SubmitHandler<FieldValues> = (values) => {
    console.log(values);
  };

  useEffect(() => {
    myAxios("/category?justLabel=1").then((res) => {
      setCategories(res.data.data);
    });
  }, []);
  return (
    <div className="flex flex-col max-w-[800px] p-3 gap-10 mt-5 mx-auto items-center child:w-full">
      <h1 className="heading text-center">صفحه افزودن وبلاگ</h1>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleAddBlog)}
          className="flex flex-col gap-4 child:max-w-full items-center"
        >
          <SingleImageUploader name="image" label="تصویر اصلی مقاله" />
          <Input name="title" label="عنوان مقاله" />
          <Autocomplete
            name="category"
            label="دسته بندی وبلاگ"
            options={transformArray(categories)}
          />
          <Input name="href" urlSafe label="آدرس مقاله" />
          <Input name="metaDescription" label="توضیحات متا" />
          <Editor name="main" control={methods.control} />
          <Button type="submit">افزودن وبلاگ</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddBlogPage;
