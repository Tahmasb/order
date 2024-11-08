"use client";
import Autocomplete from "@elements/Autocomplete";
import Button from "@elements/Button";
import Input from "@elements/Input";
import SingleImageUploader from "@elements/SingleImageUploader";
import TextArea from "@elements/TextArea";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import { BlogDataProps } from "@myTypes/types";
import { setMessage } from "@redux/slices/message";
import { myAxios } from "@utils/axios";
import { transformArray } from "@utils/formatData";
import { addBlogSchemaFront } from "@utils/validations";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useDispatch } from "react-redux";

const Editor = dynamic(() => import("@modules/Editor"), { ssr: false });

const AddBlogPage: React.FC<{ blog?: BlogDataProps }> = ({ blog }) => {
  const [categories, setCategories] = useState([]);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const methods = useForm({
    mode: "onBlur",
    resolver: yupResolver(addBlogSchemaFront),
  });
  const handleAddBlog: SubmitHandler<FieldValues> = (values) => {
    setIsLoadingButton(true);
    if (blog) {
      myAxios
        .patch(`/blogs/${blog._id}`, values)
        .then((res) => {
          dispatch(setMessage({ message: res.data.message }));
          router.push(`/admin/blogs-list`);
        })
        .catch((error) => {
          setIsLoadingButton(false);
          dispatch(
            setMessage({
              message: error.response.data.message,
              severity: "error",
            })
          );
        });
    } else {
      myAxios
        .post("/blogs", values)
        .then((res) => {
          dispatch(setMessage({ message: res.data.message }));
          router.push(`/admin/blogs-list`);
        })
        .catch((error) => {
          setIsLoadingButton(false);
          dispatch(
            setMessage({
              message: error.response.data.message,
              severity: "error",
            })
          );
        });
    }
  };

  useEffect(() => {
    if (blog) methods.reset(blog);
    myAxios("/category?justLabel=1")
      .then((res) => {
        setCategories(res.data.data.categories);
      })
      .catch((error) => {
        console.log(error.response);
        setIsLoadingButton(false);
        dispatch(
          setMessage({
            message: error.response.data.message,
            severity: "error",
          })
        );
      });
  }, []);
  return (
    <div className="flex flex-col max-w-[800px] p-3 gap-10 mt-5 mx-auto items-center child:w-full">
      <h1 className="heading text-center">صفحه افزودن وبلاگ</h1>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleAddBlog)}
          className="flex flex-col gap-5 child:max-w-full items-center"
        >
          <SingleImageUploader name="image" label="تصویر اصلی مقاله" />
          <Input autoFocus name="title" label="عنوان مقاله" />
          <Autocomplete
            name="category"
            label="دسته بندی وبلاگ"
            options={transformArray(categories)}
          />
          <Input name="href" urlSafe label="آدرس مقاله" />
          <TextArea name="metaDescription" label="توضیحات متا" />
          <Editor name="main" control={methods.control} />
          <Button isLoading={isLoadingButton} type="submit">
            {blog ? "ویرایش وبلاگ" : "افزودن وبلاگ"}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddBlogPage;
