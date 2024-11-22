import { NextRequest } from "next/server";
import User from "src/models/User";
import {
  connectDB,
  errorResponse,
  hashPassword,
  successResponse,
  yupValidateData,
} from "@utils/backFuncs";
import { registerSchema } from "@utils/validations";
import OTP from "@models/Otp";
import sendSMS from "@utils/sendSms";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { fullName, phone, password, state, city } = await req.json();
    const validateBodyData = await yupValidateData(registerSchema, {
      fullName,
      phone,
      password,
      state,
      city,
    });
    if (validateBodyData !== true)
      return errorResponse(400, "اطلاعات نامعتر است", validateBodyData);
    const existingUserPhone = await User.findOne({ phone }).lean();

    if (existingUserPhone) {
      return errorResponse(
        422,
        "این شماره همراه از قبل ثبت شده است لطفا شماره دیگری وارد کنید"
      );
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
      fullName,
      state,
      city,
      password: hashedPassword,
      phone,
    });

    const code = Math.floor(10000 + Math.random() * 90000).toString();
    const otp = await OTP.create({ phone, code });
    const response = await sendSMS(phone, code);
    if (response.status === 200) {
      return successResponse(200, "کد تایید برای شما پیامک شد");
    }
    return errorResponse(500, "مشکلی در ارسال پیامک رخ داده است");
  } catch (err) {
    console.log(err);
    return errorResponse(500, "مشکلی در سرور رخ داده است");
  }
}
