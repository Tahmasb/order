"use client";
import Button from "@elements/Button";
import InputNumber from "@elements/InputNumber";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import { setMessage } from "@redux/slices/message";
import { myAxios } from "@utils/axios";
import { verifyPhoneCodeSchema } from "@utils/validations";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useDispatch } from "react-redux";

const VerifyPage: React.FC = () => {
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParamsList = useSearchParams();
  const phone = searchParamsList.get("phone");
  const incomingLink = searchParamsList.get("incomingLink");
  const methods = useForm({
    defaultValues: {
      phone,
      code: "",
    },
    resolver: yupResolver(verifyPhoneCodeSchema),
  });

  const handleVerifyMobile: SubmitHandler<FieldValues> = (values) => {
    setIsLoadingButton(true);
    myAxios
      .post(`/auth/send-sms?incomingLink=${incomingLink}`, values)
      .then((res) => {
        dispatch(setMessage({ message: res.data.message }));
        router.push("/dashboard");
      })
      .catch((error) => {
        setIsLoadingButton(false);
        dispatch(
          setMessage({
            message: error.response.data.message,
            severity: "error",
          })
        );
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
          <Button isLoading={isLoadingButton} type="submit">
            تایید شماره همراه
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default VerifyPage;
