import OTP from "@models/Otp";
import Request from "@models/Request";
import User from "@models/User";
import {
  connectDB,
  errorResponse,
  hashPassword,
  successResponse,
  yupValidateData,
} from "@utils/backFuncs";
import sendSMS from "@utils/sendSms";
import { addOrderSchema } from "@utils/validations";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const {
      fullName,
      phone,
      type,
      image,
      state,
      city,
      costAmount,
      password,
      description,
    } = await req.json();
    const validateBody = await yupValidateData(addOrderSchema, {
      fullName,
      phone,
      type,
      image,
      state,
      city,
      costAmount,
      password,
      description,
    });
    if (validateBody !== true) {
      return errorResponse(400, "اطلاعات نامعتبر", validateBody);
    }
    const isExistUser = await User.findOne({ phone });

    if (isExistUser) {
      const newRequest = await Request.create({
        userId: isExistUser._id,
        type,
        costAmount: costAmount.id,
        description,
        image,
      });
      return successResponse(201, "درخواست شما ثبت شد و به پنل اضافه شد");
    } else {
      const hashedPassword = await hashPassword(password);

      console.log("ok ta inga");
      const newUser = await User.create({
        fullName,
        state,
        city,
        password: hashedPassword,
        phone: phone,
      });

      const newRequest = await Request.create({
        userId: newUser._id,
        type,
        costAmount: costAmount.id,
        description,
        image,
      });
      const code = Math.floor(10000 + Math.random() * 90000).toString();
      const otp = await OTP.create({ phone, code });
      const response = await sendSMS(phone, code);
      console.log(response);
      if (response.status === 200) {
        return successResponse(200, "کد تایید برای شما پیامک شد");
      }
      return errorResponse(500, "مشکلی در ارسال پیامک رخ داده است");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      return errorResponse(500, error.message);
    } else {
      console.log("Unknown error", error);
      return errorResponse(500, "An unknown error occurred");
    }
  }
}
