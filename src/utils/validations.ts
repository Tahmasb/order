import { number, object, string } from "yup";

const registerSchema = object().shape({
  firstName: string().required("نام ضروری است"),
  lastName: string().required("نام خانوادگی ضروری است"),
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
    .min(3, "نام و نام‌خانوادگی حداقل سه کاراکتر")
    .required("نام و نام خانوادگی ضروری است"),

  phone: number()
    .typeError("شماره همراه نامعتبر")
    .min(11)
    .required("شماره همراه ضروری است"),
  type: object().required("نوع درخواست ضروری است"),
  costAmount: object().required("انتخاب محدوده هزینه ضروری است"),
});

export { registerSchema, loginSchema, addOrderSchema };
