"use client";
import Button from "@elements/Button";
import InputNumber from "@elements/InputNumber";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import myAxios from "@utils/axios";
import { verifyPhoneCodeSchema } from "@utils/validations";
import { useSearchParams } from "next/navigation";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const Verify = () => {
  const searchParamsList = useSearchParams();
  const phone = searchParamsList.get("phone");
  const methods = useForm({
    defaultValues: {
      phone,
      code: "",
    },
    resolver: yupResolver(verifyPhoneCodeSchema),
  });

  const handleVerifyMobile: SubmitHandler<FieldValues> = (values) => {
    console.log(values);
    myAxios
      .post("/auth/send-sms", values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <div className="flex flex-col mt-16 gap-5 mx-auto max-w-96">
      <span className="text-center  font-semibold">تایید شماره همراه</span>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleVerifyMobile)}
          className="flex flex-col gap-6 justify-center items-center child:max-w-full"
        >
          <InputNumber name="code" autoFocus label="کد ارسالی را وارد نمایید" />
          <Button type="submit">تایید شماره همراه</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Verify;
