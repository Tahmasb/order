import { number, object, string } from "yup";

const registerSchema = object().shape({
  fullName: string()
    .min(3, "نام و نام‌خانوداگی حداقل سه کاراکتر")
    .required("نام و نام‌خانوادگی ضروری است"),
  phone: number()
    .typeError("شماره همراه ضروری است")
    .required("شماره همراه ضروری است"),
  password: string()
    .min(8, "رمزعبور حداقل ۸ کاراکتر")
    .required("رمزعبور ضروری است"),
  state: object().required("استان ضروری است").typeError("ضروری"),
  city: object().typeError("شهر ضروری است").required("شهر ضروری است"),
});

const loginSchema = object().shape({
  phone: number()
    .typeError("شماره همراه نامعتبر است")
    .required("شماره همراه ضروری است"),
  password: string()
    .min(8, "رمزعبور حداقل ۸ کارکتر")
    .required("رمزعبور ضروری است"),
});

const addOrderSchema = object().shape({
  fullName: string()
    .min(3, "نام و نام‌خانوداگی حداقل سه کاراکتر")
    .required("نام و نام‌خانوادگی ضروری است"),
  phone: number()
    .typeError("شماره همراه نامعتبر")
    .min(11)
    .required("شماره همراه ضروری است"),
  password: string()
    .min(8, "رمزعبور حداقل ۸ کارکتر")
    .required("رمزعبور ضروری است"),
  type: object().required("نوع درخواست ضروری است"),
  costAmount: object().required("انتخاب محدوده هزینه ضروری است"),
  state: object().required("استان ضروری است").typeError("ضروری"),
  city: object().typeError("شهر ضروری است").required("شهر ضروری است"),
  image: string().notRequired(),
  description: string(),
});

const verifyPhoneCodeSchema = object().shape({
  code: string().required("ضروری"),
});

const addCategorySchema = object().shape({
  label: string()
    .min(3, "عنوان دسته بندی حداقل ۳ کاراکتر")
    .required("عنوان دسته بندی ضروری است"),
  href: string()
    .min(2, "آدرس دسته بندی حداقل دو کاراکتر")
    .required("آدرس دسته بندی ضروری است"),
  description: string()
    .min(10, "توضیحات دسته بندی حداقل 10 کاراکتر")
    .required("توضیحات دسته بندی ضروری است"),
  image: string(),
});

const addBlogSchemaFront = object().shape({
  image: string()
    .url("لینک تصویر نامعتبر است")
    .matches(
      /\.(png|jpg|webp|jpeg)$/i,
      "فرمت تصویر باید jpg،jpeg، png یا webp باشد"
    )
    .required("تصویر اصلی مقاله ضروری است"),
  title: string()
    .min(35, "عنوان مقاله حداقل ۳۵ کاراکتر")
    .max(60, "عنوان مقاله حداکثر ۶۰ کاراکتر")
    .required("عنوان مقاله ضروری است"),
  category: object().required("دسته بندی مقاله ضروری است"),
  href: string()
    .min(3, "آدرس مقاله حداقل ۳ کاراکتر")
    .required("آدرس مقاله ضروری است"),
  metaDescription: string()
    .min(100, "توضیحات متا حداقل 100 کاراکتر")
    .max(200, "توضیحات متا حداکثر 200 کاراکتر")
    .required("توضیحات متا دسکریپشن ضروری است"),
  main: string()
    .min(10, "محتوای اصلی حداقل ۱۰ کاراکتر")
    .required("محتوای اصلی مقاله ضروری است"),
});

export {
  addBlogSchemaFront,
  registerSchema,
  loginSchema,
  addOrderSchema,
  verifyPhoneCodeSchema,
  addCategorySchema,
};
